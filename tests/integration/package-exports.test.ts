import { string } from '../../src/modules/string';
import { number } from '../../src/modules/number';
import { is } from '../../src/modules/is';

describe('package subpath exports (source)', () => {
  test('string subpath', () => {
    expect(string.slugify('Hello')).toBe('hello');
  });

  test('number subpath', () => {
    expect(number.isNumber(1)).toBe(true);
  });

  test('is subpath', () => {
    expect(is.string('x')).toBe(true);
  });
});
