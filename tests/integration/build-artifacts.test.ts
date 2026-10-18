import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const distRoot = join(process.cwd(), 'dist');
const describeIfBuilt = existsSync(join(distRoot, 'index.cjs'))
  ? describe
  : describe.skip;

describeIfBuilt('dist build artifacts', () => {
  test('root CJS export', () => {
    const require = createRequire(import.meta.url);
    const mod = require(join(distRoot, 'index.cjs'));
    expect(mod.HuK.string.slugify('Test')).toBe('test');
  });

  test('string subpath CJS', () => {
    const require = createRequire(import.meta.url);
    const mod = require(join(distRoot, 'modules/string/index.cjs'));
    expect(mod.string.mask('1234567890')).toContain('7890');
  });
});
