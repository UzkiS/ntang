# Identifier

## 简介

用于验证身份、获取特定标识符等

```typescript
import { useIdentifier } from "ntang";

identifier = useIdentifier();
```

## getFingerprint

获取用户浏览器指纹（指纹与浏览器版本强相关，更新浏览器会导致指纹变动，不要用于强唯一性的场景）

### 说明

```typescript
identifier.getFingerprint: (raw: boolean, httpCompatible: boolean) => Promise<string>;
```

#### raw

使用未经 md5 加密的指纹字符串，默认为`false`

#### httpCompatible

兼容 HTTP，关闭仅支持 HTTPS 的特征的使用，但降低了指纹的唯一性（当前不开启该选项时，http 与 https 下指纹将不一致）

### 用例

```typescript
const fp = await identifier.getFingerprint();
```
