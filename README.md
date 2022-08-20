<p align="center">
	<img src="./fmc-logo.svg" height=250></img>
</p>
<h1 align="center">feffery-markdown-components</h1>
<div align="center">
[![GitHub](https://img.shields.io/github/license/plotly/dash.svg?color=dark-green)](https://github.com/plotly/dash/blob/master/LICENSE)
[![PyPI](https://img.shields.io/pypi/v/feffery-markdown-components.svg?color=dark-green)](https://pypi.org/project/feffery-markdown-components/)
[![Downloads](https://pepy.tech/badge/feffery-markdown-components)](https://pepy.tech/project/feffery-markdown-components)
[![Downloads](https://pepy.tech/badge/feffery-markdown-components/month)](https://pepy.tech/project/feffery-markdown-components)
[![Downloads](https://pepy.tech/badge/feffery-markdown-components/week)](https://pepy.tech/project/feffery-markdown-components)

</div>

`feffery-components`计划子项目，`Plotly Dash`第三方组件库，基于`react-markdown`，将原始**markdown**文本直接渲染为美观的网页内容 🥳，最新版本：`0.1.0`

## 1 最新版本安装方式

```bash
pip install feffery-markdown-components -U
```

## 2 最新开发版本安装方式

```bash
pip install git+https://github.com/CNFeffery/feffery-markdown-components.git
```

国内镜像加速安装方式：

```bash
pip install git+https://github.91chi.fun/https://github.com/CNFeffery/feffery-markdown-components.git
```

## 3 静态资源 CDN 加速方法

```Python
# 非debug模式下对Dash()传入参数serve_locally=False会强制浏览器端从unpkg cdn加载各个依赖的
# xxx.min.js等静态资源，从而避免占用服务器带宽，适合中小型站点加速访问
app = dash.Dash(serve_locally=False)
```

## 4 在线文档

<a href='http://fmc.feffery.tech/' target='_blank'>文档地址</a>