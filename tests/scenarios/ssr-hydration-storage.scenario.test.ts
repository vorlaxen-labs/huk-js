import { HuK } from '../../src';

describe('scenario: SSR then client storage', () => {
  test('node: set is no-op, get returns default', () => {
    HuK.storage.set('token', 'secret');
    expect(HuK.storage.get('token', null)).toBeNull();
  });
});
