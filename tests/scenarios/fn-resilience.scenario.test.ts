import { HuK } from '../../src';

describe('scenario: fn resilience', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('debounce fires once after wait', () => {
    const fn = jest.fn();
    const debounced = HuK.fn.debounce(fn, 500);
    debounced();
    debounced();
    jest.advanceTimersByTime(500);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('once only invokes first call', () => {
    let n = 0;
    const onced = HuK.fn.once(() => ++n);
    onced();
    onced();
    expect(n).toBe(1);
  });
});
