import { mergeRemoteConfig } from './config';

describe('mergeRemoteConfig', () => {
  const DEFAULTS = {
    max_permit_accuracy: 1500,
    force_not_arrived_on_low_accuracy: true,
    eta_assist_enabled: false,
  };

  it('returns defaults when KV is missing/unparseable', () => {
    expect(mergeRemoteConfig(null)).toEqual(DEFAULTS);
    expect(mergeRemoteConfig(undefined)).toEqual(DEFAULTS);
    expect(mergeRemoteConfig('broken')).toEqual(DEFAULTS);
    expect(mergeRemoteConfig(['a'])).toEqual(DEFAULTS);
  });

  it('passes through the stored value, including keys the handler does not know', () => {
    expect(
      mergeRemoteConfig({
        max_permit_accuracy: 2000,
        force_not_arrived_on_low_accuracy: false,
        eta_assist_enabled: true,
      })
    ).toEqual({
      max_permit_accuracy: 2000,
      force_not_arrived_on_low_accuracy: false,
      eta_assist_enabled: true,
    });
  });

  it('fills only the missing keys with defaults', () => {
    // eta_assist_enabled 未設定 → 既定 false で補完、他は KV 値のまま
    expect(
      mergeRemoteConfig({
        max_permit_accuracy: 2000,
        force_not_arrived_on_low_accuracy: false,
      })
    ).toEqual({
      max_permit_accuracy: 2000,
      force_not_arrived_on_low_accuracy: false,
      eta_assist_enabled: false,
    });
  });

  it('passes through future flags added to KV without code changes', () => {
    expect(mergeRemoteConfig({ some_future_flag: 'x' }).some_future_flag).toBe(
      'x'
    );
  });

  it('drops non-primitive values (object/array/null) and keeps defaults', () => {
    const merged = mergeRemoteConfig({
      max_permit_accuracy: { nested: 1 },
      force_not_arrived_on_low_accuracy: [true],
      eta_assist_enabled: null,
      extra: { a: 1 },
    });
    expect(merged).toEqual(DEFAULTS);
    expect(merged.extra).toBeUndefined();
  });

  it('passes through primitive string/number/boolean values as-is', () => {
    expect(
      mergeRemoteConfig({
        max_permit_accuracy: '2000',
        force_not_arrived_on_low_accuracy: false,
        flag: true,
      })
    ).toEqual({
      max_permit_accuracy: '2000',
      force_not_arrived_on_low_accuracy: false,
      eta_assist_enabled: false,
      flag: true,
    });
  });
});
