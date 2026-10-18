import { HuK } from '../../../../src';

describe('string — security.part', () => {
  test('mask: should hide middle characters', () => {
    expect(HuK.string.mask('1234567812345678')).toBe('************5678');
  });

  test('mask: should handle custom options', () => {
    const masked = HuK.string.mask('905554443322', {
      visibleStart: 2,
      visibleEnd: 2,
      char: '#',
    });
    expect(masked).toBe('90########22');
  });

  test('secureRandom: should return string of correct length', () => {
    const random = HuK.string.secureRandom(32);
    expect(random).toHaveLength(32);
    expect(typeof random).toBe('string');
  });

  test('escapeHtml: should prevent XSS by escaping tags', () => {
    const safe = HuK.string.escapeHtml('<script>alert("xss")</script>');
    expect(safe).not.toContain('<script>');
    expect(safe).toContain('&lt;script&gt;');
  });
});
