export function maskify(cc) {
  return cc.length > 4 ? '#'.repeat(cc.length - 4) + cc.slice(-4) : cc;
}
