import { HuK } from '../../src';

describe('crypto — runtime', () => {
  test('hash is deterministic with same salt', async () => {
    const h1 = await HuK.crypto.hash('data', 'salt');
    const h2 = await HuK.crypto.hash('data', 'salt');
    expect(h1).toBe(h2);
    expect(HuK.crypto.validate.isSha256(h1)).toBe(true);
  });

  test('generateUuid validates as uuid', () => {
    const id = HuK.crypto.generateUuid();
    expect(HuK.crypto.validate.isUuid(id)).toBe(true);
  });
});
