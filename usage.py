import dash
from dash import html
import feffery_markdown_components as fmc
from dash.dependencies import Input, Output

app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

app.layout = html.Div(
    [
        fmc.FefferySyntaxHighlighter(
            wrapLongLines=False,
            codeString="""
import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

class Expire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: props.children }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                component: null
            });
        }, this.props.time || this.props.seconds * 1000);
    }
    render() {
        return this.state.component;
    }
}

export default uniquePropHOC(["time", "seconds"])(Expire);

""",
            language='javascript',
            codeBlockStyle={
                'maxHeight': '300px'
            },
        ),

        fmc.FefferyMarkdown(
            codeBlockStyle={
                'maxHeight': '300px'
            },
            markdownStr="""
```python
import dash
from dash import html
import feffery_markdown_components as fmc

app = dash.Dash(__name__)

raw_markdown = '''
### 1 标题

在文字写书写不同数量的`#`可以完成不同的标题，如下：

# 一级标题

## 二级标题

### 三级标题

### 2 无序列表

无序列表的使用，在符号`-`后加空格使用。如下：

- 无序列表 1
- 无序列表 2
- 无序列表 3

如果要控制列表的层级，则需要在符号`-`前使用空格。如下：

- 无序列表 1
- 无序列表 2
- 无序列表 2.1
- 无序列表 2.2

### 3 有序列表

有序列表的使用，在数字及符号`.`后加空格后输入内容，如下：

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3
'''

app.layout = html.Div(
[
fmc.FefferyMarrkdown(
markdownStr=raw_markdown
)
]
)

if __name__ == '__main__':
app.run()
```
"""
        ),

        fmc.FefferyMarkdown(
            codeStyle={
                'fontSize': '20px'
            },
            markdownStr='''
```python
import dash
from dash import html
import feffery_markdown_components as fmc
```
'''
        ),

        fmc.FefferyMarkdown(
            markdownStr=r'''
　　这是行LaTeX公式示例：$E=mc^2$

　　这是块LaTeX公式示例：

$$

\lim_{x \to \infty} \frac{1}{n(n+1)}

$$

'''
        ),
        html.Div(id='toc-anchor-demo'),
        fmc.FefferyMarkdown(
            # id='markdown-auto-toc-demo',
            titleAsId=True,
            renderHtml=True,
            markdownStr='''

# 1 标题测试
## 1.1 标题测试

a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>

### 1.1.1 标题测试

a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>

### 1.1.2 标题测试

a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>

## 1.2 标题测试

a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>

# 2 标题测试
## 2.1 标题测试

a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>

### 2.1.1 标题测试

a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>

### 2.1.2 标题测试

a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>

## 2.2 标题测试

a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>

'''
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)


@app.callback(
    Output('toc-anchor-demo', 'children'),
    Input('markdown-auto-toc-demo', 'facAnchorLinkDict')
)
def demo(facAnchorLinkDict):

    print(facAnchorLinkDict)


if __name__ == '__main__':
    app.run(debug=True)
