# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferySyntaxHighlighter(Component):
    """A FefferySyntaxHighlighter component.
代码语法高亮组件FefferySyntaxHighlighter

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- codeString (string; required):
    代码内容字符串.

- language (string; required):
    必填，代码语言.

- codeTheme (a value equal to: 'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula', 'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light', 'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque', 'solarized-dark-atom', 'synthwave84', 'z-touch'; default 'gh-colors'):
    代码高亮主题，可选项有`'a11y-dark'`、`'atom-dark'`、`'coldark-cold'`、`'coldark-dark'`、`'coy'`、
    `'coy-without-shadows'`、`'darcula'`、`'dracula'`、`'nord'`、`'okaidia'`、`'prism'`、`'solarizedlight'`、
    `'twilight'`、`'duotone-sea'`、`'duotone-dark'`、`'duotone-light'`、`'duotone-space'`、`'gh-colors'`、
    `'gruvbox-dark'`、`'material-dark'`、`'night-owl'`、`'one-light'`、`'pojoaque'`、`'solarized-dark-atom'`、
    `'synthwave84'`、`'z-touch'`  默认值：`'gh-colors'`.

- codeBlockStyle (dict; optional):
    代码块容器css样式.

- codeStyle (dict; optional):
    代码内容css样式.

- showLineNumbers (boolean; default True):
    代码块是否显示行号  默认值：`True`.

- showCopyButton (boolean; default True):
    代码块是否在右上角显示复制按钮  默认值：`True`.

- wrapLongLines (boolean; default False):
    是否允许超长代码行自动换行  默认值：`False`.

- addedLineNumbers (list of numbers; optional):
    配置需要渲染为差异比较新增行的代码行下标列表  默认值：`[]`.

- removedLineNumbers (list of numbers; optional):
    配置需要渲染为差异比较移除行的代码行下标列表  默认值：`[]`.

- addedLineStyle (dict; default { backgroundColor: '#e6ffec' }):
    差异比较新增行css样式.

- removedLineStyle (dict; default { backgroundColor: '#ffebe9' }):
    差异比较移除行css样式.

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
