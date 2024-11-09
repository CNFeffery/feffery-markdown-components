# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferySyntaxHighlighter(Component):
    """A FefferySyntaxHighlighter component.
代码语法高亮组件FefferySyntaxHighlighter

Keyword arguments:

- id (string; optional)

- key (string; optional)

- codeString (string; required)

- language (string; required)

- codeTheme (a value equal to: 'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula', 'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light', 'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque', 'solarized-dark-atom', 'synthwave84', 'z-touch'; default 'gh-colors')

- codeBlockStyle (dict; optional)

- codeStyle (dict; optional)

- showLineNumbers (boolean; default True)

- showCopyButton (boolean; default True)

- wrapLongLines (boolean; default False)

- addedLineNumbers (list of numbers; optional)

- removedLineNumbers (list of numbers; optional)

- addedLineStyle (dict; default { backgroundColor: '#e6ffec' })

- removedLineStyle (dict; default { backgroundColor: '#ffebe9' })

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_markdown_components'
    _type = 'FefferySyntaxHighlighter'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, codeString=Component.REQUIRED, language=Component.REQUIRED, codeTheme=Component.UNDEFINED, codeBlockStyle=Component.UNDEFINED, codeStyle=Component.UNDEFINED, showLineNumbers=Component.UNDEFINED, showCopyButton=Component.UNDEFINED, wrapLongLines=Component.UNDEFINED, addedLineNumbers=Component.UNDEFINED, removedLineNumbers=Component.UNDEFINED, addedLineStyle=Component.UNDEFINED, removedLineStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'codeString', 'language', 'codeTheme', 'codeBlockStyle', 'codeStyle', 'showLineNumbers', 'showCopyButton', 'wrapLongLines', 'addedLineNumbers', 'removedLineNumbers', 'addedLineStyle', 'removedLineStyle', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'codeString', 'language', 'codeTheme', 'codeBlockStyle', 'codeStyle', 'showLineNumbers', 'showCopyButton', 'wrapLongLines', 'addedLineNumbers', 'removedLineNumbers', 'addedLineStyle', 'removedLineStyle', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['codeString', 'language']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(FefferySyntaxHighlighter, self).__init__(**args)
