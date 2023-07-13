export function pad(n: number, width: number, z?: string): string {
  z = z || '0';
  const ns = n + '';
  return ns.length >= width ? ns : new Array(width - ns.length + 1).join(z) + n;
}
