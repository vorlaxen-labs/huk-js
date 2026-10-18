import { isBrowser } from '../../../src/utils/env.util';

describe('env.util', () => {
  test('isBrowser is false in node test environment', () => {
    expect(isBrowser()).toBe(false);
  });
});
