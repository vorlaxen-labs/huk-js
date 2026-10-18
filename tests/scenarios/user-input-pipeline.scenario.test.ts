import { HuK } from '../../src';
import { SAMPLE_USER, TURKISH_SLUG_EXPECTED, TURKISH_SLUG_INPUT } from '../shared/fixtures';

describe('scenario: user input pipeline', () => {
  test('validate, slugify, mask, pick', () => {
    expect(HuK.string.isEmail(SAMPLE_USER.email)).toBe(true);
    const slug = HuK.string.slugify(SAMPLE_USER.displayName);
    expect(slug).toMatch(/^[a-z0-9-]+$/);
    const masked = HuK.string.mask(SAMPLE_USER.card, { visibleEnd: 4 });
    expect(masked.endsWith('7777')).toBe(true);
    const picked = HuK.object.pick(SAMPLE_USER, ['email']);
    expect(picked).toEqual({ email: SAMPLE_USER.email });
  });

  test('turkish slug routing', () => {
    expect(HuK.string.slugify(TURKISH_SLUG_INPUT)).toBe(TURKISH_SLUG_EXPECTED);
  });
});
