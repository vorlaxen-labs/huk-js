import { HuK } from '../../src';

describe('scenario: i18n slug routing', () => {
  test('title slug for blog route', () => {
    const title = 'İstanbul’da Yazılım Geliştirme 101';
    const slug = HuK.string.slugify(title);
    expect(slug).not.toMatch(/[İışğüöç]/i);
    expect(HuK.string.truncate(slug, 40).length).toBeLessThanOrEqual(43);
  });
});
