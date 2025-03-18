import dash
from dash import html
import feffery_markdown_components as fmc

app = dash.Dash(__name__, compress=True, eager_loading=True)

app.layout = html.Div(
    [
        html.Div(
            fmc.FefferyMarkdown(
                imagePreview=True,
                imageForceAlignCenter=True,
                imageWidth=100,
                imageHeight=100,
                markdownStr="""clickExecuteJsString (string; optional):""",
                renderHtml=True,
                searchKeyword='ing',
                highlightStyle={
                    'color': 'red',
                    'background': '#597ef7',
                },
                highlightClassName='search-highlight',
            ),
            style={'maxHeight': 800, 'overflowY': 'auto'},
        )
    ],
    style={'padding': '50px 200px'},
)


if __name__ == '__main__':
    app.run(debug=True)
