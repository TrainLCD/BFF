import { normalizeRemoteConfig } from './config';

describe('normalizeRemoteConfig', () => {
  const DEFAULTS = {
    max_permit_accuracy: 1500,
    force_not_arrived_on_low_accuracy: true,
  };

  it('falls back when the value is null/undefined/non-object', () => {
    expect(normalizeRemoteConfig(null)).toEqual(DEFAULTS);
    expect(normalizeRemoteConfig(undefined)).toEqual(DEFAULTS);
    expect(normalizeRemoteConfig('nope')).toEqual(DEFAULTS);
    expect(normalizeRemoteConfig(42)).toEqual(DEFAULTS);
  });

  it('reads native number/boolean values from KV', () => {
    expect(
      normalizeRemoteConfig({
        max_permit_accuracy: 2000,
        force_not_arrived_on_low_accuracy: false,
      })
    ).toEqual({
      max_permit_accuracy: 2000,
      force_not_arrived_on_low_accuracy: false,
    });
  });

  it('coerces Remote Config style string values ("2000" / "false")', () => {
    expect(
      normalizeRemoteConfig({
        max_permit_accuracy: '2000',
        force_not_arrived_on_low_accuracy: 'false',
      })
    ).toEqual({
      max_permit_accuracy: 2000,
      force_not_arrived_on_low_accuracy: false,
    });
  });

  it('coerces "true"/"1"/"0" style booleans', () => {
    expect(
      normalizeRemoteConfig({ force_not_arrived_on_low_accuracy: 'TRUE' })
        .force_not_arrived_on_low_accuracy
    ).toBe(true);
    expect(
      normalizeRemoteConfig({ force_not_arrived_on_low_accuracy: '0' })
        .force_not_arrived_on_low_accuracy
    ).toBe(false);
  });

  it('falls back per-field on invalid or non-positive values', () => {
    expect(
      normalizeRemoteConfig({
        max_permit_accuracy: 'abc',
        force_not_arrived_on_low_accuracy: 'maybe',
      })
    ).toEqual(DEFAULTS);
    expect(
      normalizeRemoteConfig({ max_permit_accuracy: 0 }).max_permit_accuracy
    ).toBe(1500);
    expect(
      normalizeRemoteConfig({ max_permit_accuracy: -10 }).max_permit_accuracy
    ).toBe(1500);
  });

  it('keeps one field from KV even if the other is invalid', () => {
    expect(
      normalizeRemoteConfig({
        max_permit_accuracy: '3000',
        force_not_arrived_on_low_accuracy: null,
      })
    ).toEqual({
      max_permit_accuracy: 3000,
      force_not_arrived_on_low_accuracy: true,
    });
  });
});
