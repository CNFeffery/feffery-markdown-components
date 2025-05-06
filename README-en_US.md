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

English | [简体中文](./README.md)

A sub-project of the `feffery-components` plan, this `Plotly Dash` third-party component library, based on `react-markdown`, renders original ****markdown**** text directly into beautiful web content 🥳, latest stable version: `0.3.1` (2025-02-05)

## Dash Version Compatibility

| fmc version | Compatible Dash version |
| :-----: | :----------: |
| >=0.4.0 |   >=3.0.0    |
| <0.4.0  |    <3.0.0    |

## 1 Installation Method for Latest Version

```bash
pip install feffery-markdown-components -U
```

## 2 Installation Method for Latest Pre-release Version

> [!NOTE]
> Latest pre-release version (2025-04-26): `0.4.0rc2`

```bash
pip install feffery-markdown-components --pre -U
```

## 3 Static Resource CDN Acceleration Method

```Python
# In non-debug mode, passing serve_locally=False to Dash() forces the browser to load
# dependent xxx.min.js and other static resources from unpkg cdn, avoiding server bandwidth usage
# and suitable for small to medium-sized sites to accelerate access
app = dash.Dash(serve_locally=False)
```

## 4 Online Documentation

<a href='http://fmc.feffery.tech/' target='_blank'>Documentation Link</a>