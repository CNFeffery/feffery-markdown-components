import feffery_markdown_components as fmc
import dash
from dash import html

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fmc.FefferyMarkdown(
            markdownBaseClassName='theme-pie',
            checkExternalLink=True,
            safeRedirectUrlPrefix='/safe-redirect?',
            externalLinkPrefixWhiteList=['http://fac.feffery.tech'],
            renderHtml=True,
            # showCopyButton=False,
            imagePreview=True,
            # imageForceAlignCenter=True,
            # imageWidth='50%',
            forceTableAlignCenter=True,
            forceTableHeaderTextAlignCenter=True,
            forceTableContentTextAlignCenter=True,
            codeBlockStyle={
                'maxHeight': 200,
                'border': 'none'
            },
            codeStyle={
                'fontSize': '15px'
            },
            markdownStr=r'''
## 表格

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| 1 | 2  |  3 |  4  |
| 5 | 6  |  7 |  8  |
| 9 | 10  |  11 |  12  |

## 待办事项

* [ ] to do
* [x] done

`Dash`与`fmc`的安装非常简单，这里建议大家养成好习惯，使用**虚拟环境**来构建我们开发`Dash`应用所使用到的环境，以使用`conda`作为环境管理软件为例，执行下列控制台命令我们来创建一个`Python`版本为`3.8`，名称为`dash-dev-demo`的环境，其中临时使用到国内上海交大的`conda`镜像源：

```bash
conda create -n dash-dev-demo python=3.8 -c https://mirrors.sjtug.sjtu.edu.cn/anaconda/pkgs/main -y
```

使用`conda activate dash-dev-demo`激活我们刚刚创建的环境之后，再执行以下命令，就可以完成`Dash`+`fmc`+`fac`环境的搭建啦 😀（[`fac`](http://fac.feffery.tech/)是由我开发维护的另一个功能十分丰富的`Dash`通用网页组件库）：

```bash
pip install dash feffery-antd-components feffery-markdown-components
```

# 一级标题测试巴拉巴拉巴拉

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

- 列表1
  - 列表1-1
  - 列表1-2

## 自动识别链接

www.example.com, https://example.com, and contact@example.com.

## 删除线

~one~ or ~~two~~ tildes.

'''
        )
    ],
    style={
        'width': '1000px',
        'margin': '0 auto',
        'background': 'white',
        'boxShadow': '0px 0px 12px rgba(0, 0, 0, .12)',
        'padding': '25px'
    }
)


if __name__ == '__main__':
    app.run_server(debug=True)
