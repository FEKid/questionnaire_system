# 任务五十：微型调查问卷平台

> 来自百度前端学院大作业 [http://ife.baidu.com/2016/task/detail?taskId=50](http://ife.baidu.com/2016/task/detail?taskId=50)

## 安装依赖
```
npm install
```

### 编译并启动热更新服务
```
npm run serve
```

### 编译打包到生产版本
```
npm run build
```

### 测试
```
npm run test
```

### 代码审核
```
npm run lint
```

## 任务目的
* 基于阶段三的各个组件，学习模块化、前端工程等内容，综合运用HTML，CSS，JavaScript完成一个小型完整网站的实现

## 任务描述

* [参考设计图](http://7xrp04.com1.z0.glb.clouddn.com/task_4_50_1.png)
![](./task_4_50_1.png?raw=true)
* 实现一个简易版的问卷管理系统，有如下功能：

## 问卷管理列表
* 有一个头部可以显示logo，不需要实现登录等操作
* 问卷管理列表页面默认为首页
* 有一个表格用于展示所有已创建的问卷
* 列表中包括列有：问卷名称，问卷状态（未发布，发布中，已结束），和操作区域（编辑、删除、查看数据）
* 问卷状态为未发布时，可以做的操作为编辑、删除、查看问卷
* 问卷状态为发布中和已结束时，可以做的操作为查看数据、查看问卷
* 表格最左侧有批量选择（多选）的checkbox，多选后，可以进行批量删除功能，checkbox样式用默认即可，不需要按照设计图的样式
* 当一个问卷都没有的时候，表格不展现，页面显示大大的新建问卷按钮

## 问卷新建及编辑
* 点击问卷管理列表中的新建按钮后，进入到问卷新建页面
* 点击问卷列表中某个问卷行的编辑按钮后，进入到问卷的编辑页面
* 新建页面和编辑页面基本相同
* 问卷有一个标题字段，点击后可以进入编辑状态
* 可以针对问卷中的问题进行增删改操作，每个问卷最少一个问题，最多十个问题
* 问题类型包括：单选题、多选题、单行文本题
* 可以对所有问题进行位置改变（上移、下移），复用，删除的操作
* 最上面的问题没有上移操作，最下面的问题没有下移操作
* 点击复用时，在被复用的问题紧接着的下方新增一个和被复用完全一样的问题（包括选项）
* 对于单选题和多选题，可以对问题的选项进行增、删、改、排序操作
* 文本题可以设定是必填还是非必填的问题
* 有一个问卷调查填写截止时间，使用一个日历组件来进行时间的选择，日期选择不能早于当前日期
* 保存问卷可以进行问卷的保存
* 发布问卷可以使得问卷状态变为发布中的状态
* 当点击发布时，如果截止日期早于当前日期，则需要提示修改截止日期

## 删除问卷
* 在问卷管理列表中点击某个问卷的删除按钮后，弹出一个浮出层，让用户二次确认是否删除该问卷，如果用户点击是，则删除掉该问卷

## 查看问卷
* 在问卷管理列表中点击查看问卷的按钮后，在新窗口中打开该问卷的页面，该页面是可供用户进行问卷填写的页面，在问卷未发布状态和已结束状态时，问卷提交是无效的。
* 该页面在移动端需要进行良好的兼容支持

## 查看数据
* 在问卷管理列表中点击查看数据按钮后，进入到一个数据报告页面，用图表形式呈现各个单选题和多选题的选择情况
* 如设计稿中呈现，每一个问题在右侧用某种图表来呈现答题情况，自行选择合适的图表，设计稿中仅为示意，图表样式不需要和设计稿一致。推荐单选题使用饼状图，多选题使用条形图
* 文本题用一个百分比图展现有效回答占比即可
* 返回按钮点击后返回列表页面
* 在项目中尝试模块化的方法及工具
* 在项目中尝试CSS预处理工具
* 在项目中尝试项目构建、打包工具

## 任务注意事项
* 上面描述中的示意图仅为需求描述参考，不作为实现的设计参考
* 上面的需求描述中存在与真实产品合理性的差异，本任务以技术学习为主，忽略产品设计上的问题
* 请注意代码风格的整齐、优雅
* 代码中含有必要的注释
* 可以合理使用第三方框架、类库
* 所有数据可以采用前端模拟，也可以真实创造一个服务端的环境及代码
* 不要求有真实的保存、问卷填写等操作，均可采用随机、自制数据模拟来mock数据

## 任务协作建议
* 团队内进行头脑风暴，共同讨论和设计游戏新要素
* 如果是各自工作，可以按以下方式：
* 团队集中讨论，明确题目要求，保证队伍各自对题目要求认知一致
* 各自完成任务实践
* 交叉互相Review其他人的代码，建议每个人至少看一个同组队友的代码
* 相互讨论，最后合成一份组内最佳代码进行提交
* 如果是分工工作（推荐），可以按以下模块切分
* 列表页面
* 新建及编辑页面
* 问卷填写页面
* 查看数据报告页面
