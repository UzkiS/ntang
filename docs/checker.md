# Checker

## 简介

检查器，用于检查数据是否正确

```typescript
import { useChecker } from "ntang";

checker = useChecker();
```

## isPhone

检查字符串是否是手机号（不带区号），是则返回 `true`，不是则返回 `false`

### 说明

```typescript
checker.isPhone: (content: string) => boolean;

// 验证规则：!/^1[3456789]\d{9}$/.test(phone)
```
