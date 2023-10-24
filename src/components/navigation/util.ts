// eslint-disable-next-line arrow-body-style

import NavItem from './navItem';

// eslint-disable-next-line max-len
export const isArrayEquals = (array1: string[], array2: string[]) =>
  array1.length === array2.length && array1.every((element, index) => element === array2[index]);

export const isSegmentsMatchFromRoot = (segments: string[], href: string) => {
  const hrefSplit = href.split('/').filter(Boolean);
  return isArrayEquals(hrefSplit, segments.slice(0, hrefSplit.length));
};

export const isSegmentsMatch = (segments: string[], href: string) => {
  const hrefSplit = href.split('/').filter(Boolean);
  return isArrayEquals(hrefSplit, segments);
};

// eslint-disable-next-line arrow-body-style
export const isCurrentFN = (item: NavItem, segments: string[], isNavGroup?: boolean) => {
  return isNavGroup || item.selectedOnChild
    ? isSegmentsMatchFromRoot(segments, item.href)
    : isSegmentsMatch(segments, item.href);
};
