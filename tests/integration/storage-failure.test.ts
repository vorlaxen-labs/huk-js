/**
 * @jest-environment jsdom
 */
import { HuK } from '../../src';

describe('storage — failure handling', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('get: corrupt JSON returns default', () => {
    localStorage.setItem('bad', '{not-json');
    expect(HuK.storage.get('bad', 'fallback')).toBe('fallback');
  });

  test('set: quota exceeded does not throw', () => {
    const setItem = Storage.prototype.setItem;
    Storage.prototype.setItem = () => {
      throw new DOMException('QuotaExceededError');
    };
    expect(() => HuK.storage.set('k', 'v')).not.toThrow();
    Storage.prototype.setItem = setItem;
  });
});
