if True:
    import sys

    sys.path.append('..')
    import dash
    from dash import html
    import feffery_markdown_components as fmc
    from feffery_dash_utils.style_utils import style

app = dash.Dash(
    __name__,
    external_scripts=[
        'https://registry.npmmirror.com/mermaid/latest/files/dist/mermaid.min.js',
    ],
)

app.layout = html.Div(
    [
        fmc.FefferyMarkdown(
            mermaidOptions=True,
            # mermaidOptions={'theme': 'base'}, # 设置主题
            markdownStr="""

这是[地址1](/page1)

""",
            linkTarget='_self',
            linkTransformFunc='(href) => `/docs${href}`',
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
