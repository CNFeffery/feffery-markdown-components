if True:
    import sys

    sys.path.append('..')
    import time
    import dash
    from dash import html, dcc
    import feffery_markdown_components as fmc
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(
    __name__,
)

app.layout = html.Div(
    [
        html.Button('update', id='update'),
        dcc.Loading(fmc.FefferyMarkdown(id='markdown')),
    ],
    style=style(padding=50),
)


@app.callback(
    Output('markdown', 'markdownStr'),
    Input('update', 'n_clicks'),
)
def update_markdown(n_clicks):
    time.sleep(2)
    return 'n_clicks: {}'.format(n_clicks)


if __name__ == '__main__':
    app.run(debug=True)
