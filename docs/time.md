# Time

## 简介

时间处理相关

```typescript
import { useTime } from "ntang";

const time = useTime();
```

## sleep

让程序暂停一段时间

### 说明

```typescript
time.sleep: (ms: number) => Promise<any>;
```

#### ms

暂停时间（单位：ms）

### 用例

```typescript
await time.sleep(3000);
```
