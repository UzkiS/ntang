# StringFilter

## 简介

字符串操作

```typescript
import { useStringFilter } from "ntang";

const stringFilter = useStringFilter();
```

## leaveNum

保留字符串中的数字

### 说明

```typescript
stringFilter.leaveNum: (content: string) => string;
```

#### content

待操作字符串

### 用例

```typescript
watchEffect(() => {
  phone.value = stringFilter.leaveNum(phone.value);
});
```
