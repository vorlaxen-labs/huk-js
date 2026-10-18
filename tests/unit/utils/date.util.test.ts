import { createDate } from '../../../src/utils/date.util';

describe('date.util', () => {
  test('createDate parses ISO string', () => {
    const d = createDate('2026-05-28');
    expect(d.getFullYear()).toBe(2026);
  });
});
