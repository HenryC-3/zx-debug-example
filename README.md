## 前言

zx 的 debug 方式取决了 zx 的安装方式

## 作为依赖安装的 zx

-   [测试文件](debug-1.js)

1. 引入 `zx/globals` 后
2. 使用 VSCode 的默认 Node `launch.json` 进行 Debug.

```js
import "zx/globals";
```

## 全局安装的 zx

-   [测试文件](debug-2.js)

1. 新建 `launch.json`，使用 `runtimeExecutable` 指定执行当前脚本的 runtime，详见 [launch.json](.vscode/launch.json)。
2. 使用该 `launch.json` debug
