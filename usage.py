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
            codeString='''
import dash
from dash import html
import feffery_markdown_components as fmc
from dash.dependencies import Input, Output

app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)
''',
            language='python',
            addedLineNumbers=[2, 3, 4],
            removedLineNumbers=[5, 6, 7],
            codeTheme='one-light'
        )
    ],
    style={
        'width': '1200px',
        'margin': '0 auto'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
