import { HuK } from '../../../../src';

describe('string — transform.part', () => {
  test('slugify: should convert complex strings to URL-friendly slugs', () => {
    expect(HuK.string.slugify('Hello World! Bu Bir Testtir @2026')).toBe(
      'hello-world-bu-bir-testtir-2026',
    );
  });

  test('slugify: should handle Turkish characters correctly', () => {
    expect(HuK.string.slugify('çalışma ekranı şifreleme')).toBe(
      'calisma-ekrani-sifreleme',
    );
  });

  test('truncate: should cut string and append suffix', () => {
    expect(
      HuK.string.truncate('This is a very long text for testing purposes', 10),
    ).toBe('This is a...');
  });

  test('case conversion: should convert to PascalCase and camelCase', () => {
    const input = 'hello_world-test';
    expect(HuK.string.toPascalCase(input)).toBe('HelloWorldTest');
    expect(HuK.string.toCamelCase(input)).toBe('helloWorldTest');
  });

  test('toTitleCase: should capitalize first letter of each word', () => {
    expect(HuK.string.toTitleCase('merhaba dünya bu bir test')).toBe(
      'Merhaba Dünya Bu Bir Test',
    );
  });

  test('toSentenceCase: should capitalize only the first letter of the sentence', () => {
    expect(HuK.string.toSentenceCase('merhaba dünya')).toBe('Merhaba dünya');
  });

  test('removeWhitespace: should remove all whitespace from string', () => {
    expect(HuK.string.removeWhitespace(' a b c ')).toBe('abc');
  });

  test('truncateWords: should truncate without breaking words', () => {
    expect(HuK.string.truncateWords('Bu bir test mesajıdır', 10)).toBe(
      'Bu bir...',
    );
  });

  test('removeNumbers: should strip all digits from the string', () => {
    expect(HuK.string.removeNumbers('abc123def456')).toBe('abcdef');
  });

  test('reverse: should reverse the string', () => {
    expect(HuK.string.reverse('hello')).toBe('olleh');
  });
});
