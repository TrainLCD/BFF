import { buildContextMessage, buildSystemPrompt } from './prompt';

describe('buildContextMessage', () => {
  it('現在駅が解決済みなら駅名・路線と相対表現の解釈指示を含める', () => {
    const msg = buildContextMessage('ja', {
      stationId: 1,
      stationGroupId: 1130205,
      name: '西船橋',
      nameRoman: 'Nishi-Funabashi',
      lineNames: ['JR総武線', '東京メトロ東西線'],
    });
    expect(msg).toContain('現在駅: 西船橋駅（Nishi-Funabashi）');
    expect(msg).toContain('JR総武線・東京メトロ東西線');
    expect(msg).toContain('「ここ」');
    // 到達可能性による絞り込みは仕様。0 件を「存在しない」と誤解させない
    expect(msg).toContain('列車種別を連結して到達できる駅だけを返す');
  });

  it('現在駅が未解決ならグループ ID のみへフォールバックする', () => {
    const msg = buildContextMessage('ja', null, 1130205);
    expect(msg).toContain('現在駅グループID: 1130205');
    expect(msg).toContain('列車種別を連結して到達できる駅だけを返す');
    expect(msg).not.toContain('「ここ」');
  });

  it('現在駅情報が一切無ければ locale 行のみ', () => {
    const msg = buildContextMessage('en');
    expect(msg).toBe(
      'locale: en（会話から入力言語を判別できないときの既定言語。Respond in English）'
    );
  });

  // locale は端末の言語設定であり、応答言語そのものの指示ではない
  it('locale 行は入力言語を判別できないときの既定であることを明示する', () => {
    expect(buildContextMessage('ja')).toContain('既定言語');
  });
});

describe('buildSystemPrompt', () => {
  it('英語会話でも日本語表記で検索させる指示を含む', () => {
    const prompt = buildSystemPrompt(null);
    expect(prompt).toContain('日本語表記（漢字・かな）を第一候補にする');
    expect(prompt).toContain('Kinugawa-onsen');
  });

  it('0 件で諦めず到達可能な範囲から引き直す指示を含む', () => {
    const prompt = buildSystemPrompt(null);
    expect(prompt).toContain('列車種別の');
    expect(prompt).toContain('到達できる範囲に代替候補がないか確認する');
  });

  it('連結経路が見つかったら行き先だけを候補として肯定的に案内する', () => {
    const prompt = buildSystemPrompt(null);
    expect(prompt).toContain('その駅へ到達できることを肯定的に案内');
    expect(prompt).toContain('その行き先駅を suggestions に含める');
    expect(prompt).toContain('途中駅を別の行き先候補として追加してはならない');
    expect(prompt).toContain('ツール結果と矛盾する返答をしてはならない');
  });

  // 端末が英語設定でも日本語で聞かれたら日本語で返す（locale 追従をやめた経緯）
  it('応答言語を直近のユーザ発話に合わせる指示を含む', () => {
    const prompt = buildSystemPrompt(null);
    expect(prompt).toContain('reply は直近のユーザ発話と同じ言語で書く');
    // 直近が判別不能なときは前ターンへ、それも無ければ locale へ、の 2 段階
    expect(prompt).toContain('それより前のユーザ発話の言語に合わせる');
    expect(prompt).toContain('会話全体で判別できなければ locale の既定言語');
    expect(prompt).not.toContain(
      '応答言語は会話に添えられた locale 指示に従う'
    );
  });

  it('候補が無いときは正直に空配列を返させる（断定で埋めさせない）', () => {
    const prompt = buildSystemPrompt(null);
    expect(prompt).toContain(
      '見つからなければ、候補がないことを正直に伝えて suggestions は空配列にする'
    );
    expect(prompt).not.toContain('必ず代替候補がある');
  });
});
