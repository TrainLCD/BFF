import { mergeRemoteConfig } from './config';

describe('mergeRemoteConfig', () => {
  it('returns an empty object when KV is missing/unparseable', () => {
    expect(mergeRemoteConfig(null)).toEqual({});
    expect(mergeRemoteConfig(undefined)).toEqual({});
    expect(mergeRemoteConfig('broken')).toEqual({});
    expect(mergeRemoteConfig(['a'])).toEqual({});
  });

  it('passes the stored value through as-is', () => {
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

  it('returns only the keys present in KV (no defaults injected)', () => {
    // eta_assist_enabled は KV に無ければレスポンスにも含まれない
    expect(
      mergeRemoteConfig({
        max_permit_accuracy: 2000,
        force_not_arrived_on_low_accuracy: false,
      })
    ).toEqual({
      max_permit_accuracy: 2000,
      force_not_arrived_on_low_accuracy: false,
    });
  });

  it('passes through future flags added to KV without code changes', () => {
    expect(mergeRemoteConfig({ some_future_flag: 'x' }).some_future_flag).toBe(
      'x'
    );
  });

  it('drops non-primitive values (object/array/null)', () => {
    expect(
      mergeRemoteConfig({
        max_permit_accuracy: { nested: 1 },
        force_not_arrived_on_low_accuracy: [true],
        eta_assist_enabled: null,
        ok: 3000,
      })
    ).toEqual({ ok: 3000 });
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
      flag: true,
    });
  });
});
