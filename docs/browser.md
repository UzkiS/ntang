# Browser

## 简介

检查器，用于检查数据是否正确

```typescript
import { useBrowser } from "ntang";

const browser = useBrowser();
```

## getParameter

获取 Query String Parameter

### 说明

```typescript
browser.getParameter: (parameter: string) => string | undefined
```
