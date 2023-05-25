export function format(first, middle, last) {
  const hasFirst = Boolean(first);
  const hasMiddle = Boolean(middle);
  const hasLast = Boolean(last);
  return (hasFirst ? first + ' ' : '') + (hasMiddle ? middle + ' ' : '') + (hasLast ? last : '');
}
//# sourceMappingURL=utils.js.map
