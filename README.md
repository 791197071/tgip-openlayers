# 地图平台 Angular 基础模块

分离常用的组件共享使用
tgip(tourism geo infomation platform)

## 已有组件

- tgip-restful 地图平台 API 接口封装
- tgip-business 地图平台 业务组件 接口封装
- tgip-mapbox 地图平台  组件 mapbox实现
- tgip-openlayers 地图平台 组件 ol实现
- tgip-common 地图平台 公共组件接口封装

## 组件开发流程（以 tgip-openlayers 为例）

```bash
ng g c controls/full-extent --project=tgip-openlayers

# 以下是输出信息
CREATE projects/tgip-openlayers/src/lib/controls/full-extent/full-extent.component.css (0 bytes)
CREATE projects/tgip-openlayers/src/lib/controls/full-extent/full-extent.component.html (30 bytes)
CREATE projects/tgip-openlayers/src/lib/controls/full-extent/full-extent.component.spec.ts (657 bytes)
CREATE projects/tgip-openlayers/src/lib/controls/full-extent/full-extent.component.ts (292 bytes)
UPDATE projects/tgip-openlayers/src/lib/tgip-openlayers.module.ts (495 bytes)
```

## 修改必要配置

1. 打开 tgip-openlayers.module.ts

   ```ts
   import { FullExtentComponent } from './controls/full-extent/full-extent.component';

   // 然后加入 到 declarations 和 exports

   @NgModule({
   declarations: [
       ...,
       ...,
       FullExtentComponent],
   imports: [
   ],
   exports: [
       ...,
       ...,
       FullExtentComponent]
   })
   export class TgipOpenlayersModule { }
   ```

1. 打开 public_api.ts

   ```ts
   ...
   export * from './lib/controls/full-extent/full-extent.component';
   ```

## 给组件添加依赖项

需要先 `npm install xxx`，然后从**根目录下**的 `package.json` 中拷贝对应的依赖项`"xxx": "x.y.z",`到
`peerDependencies` 中。

## 给组件添加功能

功能代码省略

## 构建

```sh
ng build tgip-openlayers

# 以下是输出信息
Building Angular Package
Building entry point 'tgip-openlayers'
Compiling TypeScript sources through ngc
Bundling to FESM2015
Bundling to FESM5
Bundling to UMD
Minifying UMD bundle
Copying declaration files
Writing package metadata
Removing scripts section in package.json as it's considered a potential security vulnerability.
Built tgip-openlayers
Built Angular Package!
 - from: /Users/xxx/projects/tgip-openlayers
 - to:   /Users/xxx/dist/tgip-openlayers
```

## 在本工程里测试组件

本工程测试组件时可以一直监听并构建组件，在命令行里输入：

```sh
ng build tgip-openlayers --watch
```

打开 `app.module.ts` 引入整个模块

```ts
import { TgipOpenlayersModule } from "tgip-openlayers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...,
    TgipOpenlayersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

打开 `app.component.html` 添加如下代码即可

```html
<tgip-ol-full-extent></tgip-ol-full-extent>
```

运行查看

```sh
ng serve
```

## 提交 svn npm 库

1. 在 dist 目录里复制 tgip-openlayers **目录里的所有内容**，  
1. 接着到 svn npm 目录下新建 `tgip-openlayers/tags/x.y.z` 目录，`x.y.z` 为版本号，对应 package.json 里的版本号，将上面复制的内容粘贴到`x.y.z`目录中，  
1. 最后提交代码到 svn。


## 在其他项目中使用

1. 先要安装svn插件：  

    ```sh
    npm install --save-dev npm-svn
    ```

1. 打开`package.json`，添加 本组件对应的svn地址  

    ```json
    // @前是组件名称，@符号之后的是版本号
    "svnDependencies": {
        "tgip-openlayers@0.0.1": "https://dev.handsmap.com:2086/svn/npm/tgip-openlayers/"
    },
    ```

1. 安装

    ```sh
    npm install

    # 以下是输出信息
    Checking tgip-openlayers rev=HEAD from https://dev.handsmap.com:2086/svn/npm/tgip-openlayers/tags//0.0.1

    Installed tgip-openlayers@0.0.1|HEAD node_modules/tgip-openlayers/

    Finished installing svn dependencies
    ```

    **注意：**

    如果出现如下错误需要手动删除目录`node_modules/npm-svn/.cache`  

    ```sh
    # 以下是输出信息
    Checking tgip-openlayers rev=HEAD from https://dev.handsmap.com:2086/svn/npm/tgip-openlayers/tags//0.0.1
    Failed to install tgip-openlayers

    Encountered errors installing svn dependencies:
    * tgip-openlayers (svn: E000002: '/Users/xxx/node_modules/tgip-openlayers' does not exist)
    ```

    删除：  

    ```sh
    rm -rf node_modules/npm-svn/.cache
    ```

### 注意事项

**注意：**
不要拷贝代码文件，必须用 ng g xxx 来生成相关 component service 等

### 在本工程里调用组件

```js
import {AAAA} from xxxx
// 其他调用代码
```

### 测试组件

分别运行端到端测试以及单元测试

```sh
ng e2e xxxx
ng test xxxx
```

### 打包

```sh
cd dist/xxx
# 第一次使用时添加此行，以后不用添加
npm adduser --registry http://0.0.0.0:4873

npm publish --registry http://0.0.0.0:4873

### 安装
npm install xxx --registry http://0.0.0.0:4873
```

## 工程

**注意：** 以下命令是针对整个工程，并非针对组件库（library）

```sh
// 编译
ng build
// 运行
ng serve
// 端到端测试
ng e2e
// 单元测试
ng test
```

************

## 热更新配置

```sh
npm i -g hmr-cli
hmr init
#更新 environment.prod.ts environment.ts
```

## 类库使用

在其他项目中使用自己开发的类库

### 安装

```sh
npm install svn+https://xxxxxxx/tags/0.0.1 --save
```

### 导入

app.module.ts 中添加

```js
import { xxxxModule } from "xxxx";
...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DelonModule.forRoot(),
    xxxxx,
  ],
```


## TGIP Client（旅游地理信息平台JS Client 组件库）

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
