export const getCrypto = (): Crypto | null => {
  if (typeof globalThis.crypto !== 'undefined') return globalThis.crypto;
  return null;
};
