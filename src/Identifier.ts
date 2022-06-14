interface identifier {
  getFingerprint: () => Promise<string>;
}

const getFingerprint = async (
  raw: boolean = false,
  httpCompatible: boolean = false
): Promise<string> => {
  let navigatorInfo =
    String(navigator.cookieEnabled) +
    String(navigator.hardwareConcurrency) +
    navigator.vendor +
    String(navigator.maxTouchPoints);
  navigator.languages.map((item) => {
    navigatorInfo += item;
  });
  if (!httpCompatible) {
    //@ts-ignore
    navigatorInfo += navigator.deviceMemory;
  }
  let userAgentInfo = "";
  if (!httpCompatible) {
    if ("userAgentData" in navigator) {
      try {
        let buffer = "";
        const userAgentData =
          //@ts-ignore
          await navigator.userAgentData.getHighEntropyValues([
            "architecture",
            "bitness",
            "model",
            "platformVersion",
            "fullVersionList",
          ]);
        buffer += userAgentData.architecture + userAgentData.bitness;
        userAgentData.fullVersionList.map(
          (item: { brand: string; version: string }) => {
            buffer += item.brand + item.version;
          }
        );
        buffer += userAgentData.mobile;
        buffer += userAgentData.platform + userAgentData.platformVersion;
        userAgentInfo = buffer;
      } catch (error) {
        userAgentInfo = navigator.userAgent;
      }
    } else {
      userAgentInfo = navigator.userAgent;
    }
  } else {
    userAgentInfo = navigator.userAgent;
  }

  let screenInfo =
    screen.height + screen.width + screen.colorDepth + screen.pixelDepth;
  let dateInfo = new Date().getTimezoneOffset();

  let fingerprint = navigatorInfo + userAgentInfo + screenInfo + dateInfo;

  if (raw == false) {
    fingerprint = fingerprint;
  }
  return fingerprint;
};

const identifier: identifier = { getFingerprint };

const useIdentifier = () => {
  return identifier;
};

export { useIdentifier };
