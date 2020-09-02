(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{650:function(t,e,a){"use strict";a.r(e);var r=a(69),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装和升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和升级"}},[t._v("#")]),t._v(" 安装和升级")]),t._v(" "),a("p",[t._v("在使用 matman 来构建项目之前，需要先安装 Node 和 "),a("a",{attrs:{href:"https://www.npmjs.com/package/matman-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("matman-cli"),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"_1-安装-node-js-并验证版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-node-js-并验证版本"}},[t._v("#")]),t._v(" 1. 安装 Node.js 并验证版本")]),t._v(" "),a("h3",{attrs:{id:"_1-1-node-js-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-node-js-安装"}},[t._v("#")]),t._v(" 1.1 Node.js 安装")]),t._v(" "),a("p",[t._v("matman 是基于 Node.js 来实现的，因此需要在本机安装 "),a("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),a("OutboundLink")],1),t._v("，可以选择：")]),t._v(" "),a("ul",[a("li",[t._v("进入 "),a("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/"),a("OutboundLink")],1),t._v(" 官网，选择 LTS 版本的 Node 安装")]),t._v(" "),a("li",[t._v("采用 "),a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("NVM"),a("OutboundLink")],1),t._v(" 进行多版本管理")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-版本验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-版本验证"}},[t._v("#")]),t._v(" 1.2 版本验证")]),t._v(" "),a("p",[t._v("完成安装后，执行下面命令，查看当前 Node 版本：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ node -v\n")])])]),a("ul",[a("li",[t._v("如果能正常输出 Node 的版本号，表示 Node 已安装成功（ Windows 系统可能需要重新打开 cmd）")]),t._v(" "),a("li",[t._v("值得注意的是，一定要确保 Node.js 版本在 "),a("code",[t._v("10.18.1")]),t._v(" 及以上，否则将无法运行")])]),t._v(" "),a("h2",{attrs:{id:"_2-安装-matman-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-matman-cli"}},[t._v("#")]),t._v(" 2. 安装 matman-cli")]),t._v(" "),a("h3",{attrs:{id:"_2-1-初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-初始化项目"}},[t._v("#")]),t._v(" 2.1 初始化项目")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/matman-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("matman-cli"),a("OutboundLink")],1),t._v(" 提供了一些命令行，用于初始化项目和构建等。")]),t._v(" "),a("blockquote",[a("p",[t._v("需要注意的是 matman 虽然提供了 Nightmare 与 puppeteer 两种能力、写法也支持链式调用与异步操作，但是推荐使用 puppeteer + 异步操作，所以 cli 工具只会为你生成 puppeteer + 异步的版本。")])]),t._v(" "),a("p",[t._v("执行下面的命令初始化你的 matman 项目：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果安装缓慢请大家配置镜像")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推荐大家使用 npx 进行初始化，保证运行 cli 的最新版本")]),t._v("\n$ npx matman-cli init\n")])])]),a("h3",{attrs:{id:"_2-2-命令参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-命令参考"}},[t._v("#")]),t._v(" 2.2 命令参考")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--version、--help")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("查看版本")]),t._v("、"),a("code",[t._v("显示帮助信息")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("build")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-d 或者 --dev")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("编译爬虫脚本")]),t._v("，-d 与 --dev 生成调试版本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("init")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-t 或者 --type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("初始化项目")]),t._v("，-t 与--type 指定生成所用的模板")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-puppeteer-安装问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-puppeteer-安装问题"}},[t._v("#")]),t._v(" 3. puppeteer 安装问题")]),t._v(" "),a("h3",{attrs:{id:"需求场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求场景"}},[t._v("#")]),t._v(" 需求场景")]),t._v(" "),a("p",[t._v("由于种种原因，安装 puppeteer 可能会非常的慢。在没有梯子的情况下采用淘宝镜像安装是最快的方式。")]),t._v(" "),a("h3",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("ol",[a("li",[t._v("在用户目录下新建 "),a("code",[t._v(".npmrc")])]),t._v(" "),a("li",[t._v("在其中设置 "),a("code",[t._v("PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);