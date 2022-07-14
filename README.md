# ntang

柠的 JavaScript 工具箱

[文档](https://ntang.ito.fun).

### 发布流程

##### 打包

```
pnpm run build
```

##### 发布 npm 版本

```
pnpm version prerelease // package.json 中的版本号1.0.0变为 1.0.1-0 一般是指修复版本
pnpm version prepatch // package.json 中的版本号1.0.1-1变为 1.0.2-0 一般是指需求版本
pnpm version preminor // package.json 中的版本号1.0.2-0变为 1.1.0-0 一般是指功能版本
pnpm version premajor // package.json 中的版本号1.1.0-0变为 2.0.0-0 一般是指改版

git push

pnpm publish
```
