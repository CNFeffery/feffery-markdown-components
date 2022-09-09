import dash
from dash import html
import feffery_markdown_components as fmc
from dash.dependencies import Input, Output

app = dash.Dash(__name__)


app.layout = html.Div(
    [
        html.Div(id='toc-anchor-demo'),
        fmc.FefferyMarkdown(
            id='markdown-auto-toc-demo',
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
