import dash
from dash import html
import feffery_antd_components as fac
import feffery_markdown_components as fmc
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(id='anchor-container'),
        html.Div(
            [
                fmc.FefferyMarkdown(
                    id='markdown',
                    markdownStr=open(
                        r'C:\Users\pengz\临时工作空间\20220907-fmc新特性配合AntdAnchor自动生成文档目录示例\demo.md', encoding='utf-8').read(),
                    titleAsId=True,
                    renderHtml=True
                )
            ],
            style={
                'width': '900px',
                'margin': '0 auto'
            }
        ),
        fac.AntdBackTop(duration=0.3)
    ],
    style={
        'padding': '25px'
    }
)


@app.callback(
    Output('anchor-container', 'children'),
    Input('markdown', 'facAnchorLinkDict')
)
def generate_anchor(facAnchorLinkDict):

    if facAnchorLinkDict:
        return fac.AntdAnchor(
            linkDict=facAnchorLinkDict
        )


if __name__ == '__main__':
    app.run(debug=True)
