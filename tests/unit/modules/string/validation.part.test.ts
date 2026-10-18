import { HuK } from '../../../../src';

describe('string — validation.part', () => {
  test('isEmail: should validate email formats', () => {
    expect(HuK.string.isEmail('test@vorlaxen.com')).toBe(true);
    expect(HuK.string.isEmail('invalid-email')).toBe(false);
  });

  test('isStrongPassword: should validate complexity', () => {
    expect(HuK.string.isStrongPassword('Weak123')).toBe(false);
    expect(HuK.string.isStrongPassword('Strong@123')).toBe(true);
  });

  test('isEmpty: should check null, undefined and empty strings', () => {
    expect(HuK.string.isEmpty('')).toBe(true);
    expect(HuK.string.isEmpty('   ')).toBe(true);
    expect(HuK.string.isEmpty('Hakan')).toBe(false);
  });
});
