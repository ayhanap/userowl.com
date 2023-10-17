/** @private is the given object a Function? */
export const isFunction = (obj: any): obj is Function => typeof obj === 'function';

export const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

export const shimmerDark = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-700/10 before:to-transparent`;

export function isServer() {
  const hasWindow = typeof window !== 'undefined';
  return !hasWindow;
}

export function isObjectId(id: string): boolean {
  return !!id.match(/^[0-9a-fA-F]{24}$/);
}

export const rgb2hex = (rgb: string) =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)!
    .slice(1)
    .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()}`;

export const getOS = () => {
  if (typeof window === 'undefined') return undefined;
  const { userAgent } = window.navigator;
  const platform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
};

export const isWindowsOS = () => {
  return getOS() === 'Windows';
};

export const isMobile = () => {
  return getOS() === 'iOS' || getOS() === 'Android';
};

export const isIOS = () => {
  return getOS() === 'iOS';
};

export const isLinuxOS = () => {
  return getOS() === 'Linux';
};
export const isMacOS = () => {
  return getOS() === 'Mac OS';
};

export const isIOSWebKit = () => {
  if (typeof window === 'undefined') return undefined;
  const { userAgent } = window.navigator;
  if (/AppleWebKit/.test(userAgent) && isIOS()) {
    return true;
  }
  return false;
};

export const getKeyboardShortcut = (
  windows: string,
  linux: string,
  macos: string,
  mobile: string,
  other: string,
) => {
  const os = getOS();
  switch (os) {
    case 'Windows':
      return windows;
    case 'Linux':
      return linux;
    case 'Mac OS':
      return macos;
    case 'mobile':
      return mobile;
    default:
      return other;
  }
};

function onlyUnique<T>(value: T, index: number, array: T[]) {
  return array.indexOf(value) === index;
}

function padNumberWithZeros(v: number, maxLength: number, putPlusSign?: boolean) {
  // eslint-disable-next-line no-nested-ternary
  return (v < 0 ? '-' : putPlusSign ? '+' : '') + Math.abs(v).toString().padStart(maxLength, '0');
}

export const convertMinutesToPrettyHours = (minutes: number) => {
  const hour = Math.trunc(minutes / 60);
  const minute = minutes - hour * 60;
  const hourPadded = padNumberWithZeros(hour, 2, true);
  const minutePadded = padNumberWithZeros(minute, 2);
  return `${hourPadded}:${minutePadded}`;
};

export function arraysEqual(a: any[], b: any[]) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export const pluralize = (count: number, noun: string, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;

export const pluralizeOnlySuffix = (count: number, noun: string, suffix = 's') =>
  `${noun}${count !== 1 ? suffix : ''}`;

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

export function isImageMimeType(contentType: string) {
  const imageMimeTypes = [
    'image/tiff',
    'image/gif',
    'image/avif',
    'image/jpeg',
    'image/bmp',
    'image/png',
    'image/webp',
  ];
  return imageMimeTypes.includes(contentType);
}

export const imageLoader = ({ src, width, quality }) => {
  return `${src}`;
};

export const widgetSettingsColClasses = 'col-span-6 lg:col-span-5 xl:col-span-6 2xl:col-span-4';

export const grayColors = {
  50: '#F9F9FA',
  100: '#F4F3F5',
  200: '#E8E6EA',
  300: '#D6D3D9',
  400: '#A8A0B1',
  500: '#786C89',
  600: '#5E4B79',
  700: '#4A3768',
  800: '#311C57',
  900: '#1C0849',
};
