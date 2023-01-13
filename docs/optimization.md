# Optimization

## 简介

用于优化程序（防抖节流等）

```typescript
import { useOptimization } from "ntang";

const optimization = useOptimization();
```

## debounce

防抖

### 说明

```typescript
optimization.debounce: (
    fn: Function,
    delay?: number,
    immediate?: boolean
  ) => (...args: any) => void;
```

#### fn

函数标识符

#### delay

防抖延迟时间

#### immediate

是否立即执行

### 用例

```typescript
const fn = () => {
  console.log("test");
};

const logDebounce = optimization.debounce(fn, 300);

logDebounce();
```

## throttle

节流

### 说明

```typescript
optimization.throttle: (
    fn: Function,
    delay?: number,
    immediate?: boolean
  ) => (...args: any) => void;
```

#### fn

函数标识符

#### delay

节流间隔时间

#### immediate

是否立即执行

### 用例

```typescript
const fn = () => {
  console.log("test");
};

const logThrottle = optimization.throttle(fn, 300);

logThrottle();
```
