import { isBrowser } from '../../utils/env.util';

export const storage = {
  set: <T>(key: string, value: T): void => {
    if (!isBrowser()) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Quota, private mode, or serialization failure — fail silently (SSR-safe contract)
    }
  },

  get: <T>(key: string, defaultValue: T | null = null): T | null => {
    if (!isBrowser()) return defaultValue;
    try {
      const item = localStorage.getItem(key);
      if (item === null) return defaultValue;
      return JSON.parse(item) as T;
    } catch {
      return defaultValue;
    }
  },

  remove: (key: string): void => {
    if (!isBrowser()) return;
    try {
      localStorage.removeItem(key);
    } catch {
      // ignore
    }
  },

  clear: (): void => {
    if (!isBrowser()) return;
    try {
      localStorage.clear();
    } catch {
      // ignore
    }
  },
};

export type StorageModule = typeof storage;
