interface device {
  isAndroid: boolean;
  isWindows: boolean;
  isMacOS: boolean;
  isLinux: boolean;
  isPC: boolean;
}

const UA = navigator.userAgent;

/**
 * 是否为 Android 设备
 */
const isAndroid = UA.includes("Android");

/**
 * 是否为 Windows 设备
 */
const isWindows = UA.includes("Windows");

/**
 * 是否为 MacOS (包括一些 iPad)
 */
const isMacOS = UA.includes("Macintosh");

/**
 * 是否为 Linux 设备
 */
const isLinux = isAndroid == false && UA.includes("Linux");

/**
 * 是否为 PC (包括一些 iPad)
 */
const isPC = isWindows || isMacOS || isLinux;

const device: device = {
  isAndroid,
  isWindows,
  isMacOS,
  isLinux,
  isPC,
};

const useDevice = (): device => {
  return device;
};

export { useDevice };
