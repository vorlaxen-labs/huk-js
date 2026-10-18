import { createModule } from '../../../src/core/create-module';

class Sample {
  public static greet(name: string) {
    return `hi ${name}`;
  }

  public static count = 0;
}

describe('createModule', () => {
  const api = createModule(Sample);

  test('binds static methods', () => {
    expect(api.greet('HuK')).toBe('hi HuK');
  });

  test('exposes static methods as own keys', () => {
    expect(Object.keys(api)).toContain('greet');
  });
});
