import { buildContextMessage } from './prompt';

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
  });

  it('現在駅が未解決ならグループ ID のみへフォールバックする', () => {
    const msg = buildContextMessage('ja', null, 1130205);
    expect(msg).toContain('現在駅グループID: 1130205');
    expect(msg).not.toContain('「ここ」');
  });

  it('現在駅情報が一切無ければ locale 行のみ', () => {
    const msg = buildContextMessage('en');
    expect(msg).toBe('locale: en（Respond in English）');
  });
});
