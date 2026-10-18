export { Timing } from './timing.part';
export { Composition } from './composition.part';
export { Control } from './control.part';

import { Timing } from './timing.part';
import { Composition } from './composition.part';
import { Control } from './control.part';

export const fn = {
  debounce: Timing.debounce,
  throttle: Timing.throttle,
  sleep: Timing.sleep,
  pipe: Composition.pipe,
  compose: Composition.compose,
  once: Control.once,
  memoize: Control.memoize,
  retry: Control.retry,
};

export type FnModule = typeof fn;