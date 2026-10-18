import { HuK, string, number, array, object, storage, fn, crypto, date } from '../../src';

describe('HuK facade parity', () => {
  test('HuK namespaces match named exports', () => {
    expect(HuK.string).toBe(string);
    expect(HuK.number).toBe(number);
    expect(HuK.date).toBe(date);
    expect(HuK.array).toBe(array);
    expect(HuK.object).toBe(object);
    expect(HuK.storage).toBe(storage);
    expect(HuK.fn).toBe(fn);
    expect(HuK.crypto).toBe(crypto);
  });

  test('HuK.is is defined', () => {
    expect(HuK.is.empty('')).toBe(true);
  });
});
