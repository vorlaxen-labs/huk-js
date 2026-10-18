import { HuK } from '../../src';

describe('scenario: data sanitization', () => {
  test('escapeHtml + isEmpty + clone', () => {
    const raw = '<img onerror="x" />';
    const safe = HuK.string.escapeHtml(raw);
    expect(HuK.is.empty(safe)).toBe(false);
    const obj = { a: 1, nested: { b: 2 } };
    const cloned = HuK.object.clone(obj);
    cloned.nested.b = 99;
    expect(obj.nested.b).toBe(2);
  });
});
