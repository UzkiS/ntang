# Device

## 简介

判断设备的信息检查器，用于检查数据是否正

```typescript
import { useDevice } from "ntang";

const device = useDevice();
```

## isAndroid

是否为 Android 设备，是则返回 `true`，不是则返回 `false`

## isWindows

是否为 Windows 设备，是则返回 `true`，不是则返回 `false`

## isMacOS

是否为 MacOS (包括一些 iPad)，是则返回 `true`，不是则返回 `false`

## isLinux

是否为 Linux 设备，是则返回 `true`，不是则返回 `false`

## isPC

是否为 PC 设备 (包括一些 iPad)，是则返回 `true`，不是则返回 `false`
