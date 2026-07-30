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
    expect(msg).toContain('乗り換えなしで行ける駅だけを返す');
  });

  it('現在駅が未解決ならグループ ID のみへフォールバックする', () => {
    const msg = buildContextMessage('ja', null, 1130205);
    expect(msg).toContain('現在駅グループID: 1130205');
    expect(msg).toContain('乗り換えなしで行ける駅だけを返す');
    expect(msg).not.toContain('「ここ」');
  });

  it('現在駅情報が一切無ければ locale 行のみ', () => {
    const msg = buildContextMessage('en');
    expect(msg).toBe('locale: en（Respond in English）');
  });
});

describe('buildSystemPrompt', () => {
  it('英語会話でも日本語表記で検索させる指示を含む', () => {
    const prompt = buildSystemPrompt(null);
    expect(prompt).toContain('日本語表記（漢字・かな）を第一候補にする');
    expect(prompt).toContain('Kinugawa-onsen');
  });

  it('0 件で諦めず直通で行ける沿線から引き直す指示を含む', () => {
    const prompt = buildSystemPrompt(null);
    expect(prompt).toContain('乗り換えなしで行ける駅');
    expect(prompt).toContain('「候補が見つからない」で終わらせず');
  });
});
