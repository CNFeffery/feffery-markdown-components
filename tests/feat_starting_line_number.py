if True:
    import sys

    sys.path.append('..')
    import dash
    from dash import html
    import feffery_markdown_components as fmc
    from feffery_dash_utils.style_utils import style

app = dash.Dash(
    __name__,
)

app.layout = html.Div(
    [
        fmc.FefferySyntaxHighlighter(
            language='cpp',
            startingLineNumber=234,
            codeString=r"""
    // printf("Cval: (%d, %d) netCC %g invalid before %g invalid meta %g \n",
    //         netid, otherNetId, netCC.mean(), cVal->mean(), ccValue);
    
    const double small = 1e-6;
    if (netCC.mean() < -small && ccValue < 0.0){
    }
""",
        )
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
