# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyMarkdown(Component):
    """A FefferyMarkdown component.


Keyword arguments:

- id (string; optional)

- aClassName (string; optional)

- aStyle (dict; optional)

- blockquoteClassName (string; optional)

- blockquoteStyle (dict; optional)

- checkExternalLink (boolean; default False)

- className (string; optional)

- codeBlockStyle (dict; optional)

- codeFallBackLanguage (string; optional)

- codeStyle (dict; optional)

- codeTheme (a value equal to: 'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula', 'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light', 'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque', 'solarized-dark-atom', 'synthwave84', 'z-touch'; default 'gh-colors')

- externalLinkPrefixWhiteList (list of strings; optional)

- facAnchorLinkDict (boolean | number | string | dict | list; optional)

- forceTableAlignCenter (boolean; default False)

- forceTableContentTextAlignCenter (boolean; default True)

- forceTableHeaderTextAlignCenter (boolean; default True)

- h1ClassName (string; optional)

- h1Style (dict; optional)

- h2ClassName (string; optional)

- h2Style (dict; optional)

- h3ClassName (string; optional)

- h3Style (dict; optional)

- h4ClassName (string; optional)

- h4Style (dict; optional)

- h5ClassName (string; optional)

- h5Style (dict; optional)

- h6ClassName (string; optional)

- h6Style (dict; optional)

- hrClassName (string; optional)

- hrStyle (dict; optional)

- imageFallback (string; default 'data:image/png;base64,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')

- imageForceAlignCenter (boolean; default False)

- imageHeight (string | number; optional)

- imagePreview (boolean; default False)

- imageWidth (string | number; optional)

- inlineCodeClassName (string; optional)

- inlineCodeStyle (dict; optional)

- key (string; optional)

- linkTarget (string; default '_blank')

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'en-us', 'zh-cn'; default 'zh-cn')

- markdownBaseClassName (string; default 'markdown-body')

- markdownStr (string; optional)

- renderHtml (boolean; optional)

- safeRedirectUrlPrefix (string; optional)

- showCopyButton (boolean; default True)

- showLineNumbers (boolean; default True)

- strongClassName (string; optional)

- strongStyle (dict; optional)

- style (dict; optional)

- tableClassName (string; optional)

- tableStyle (dict; optional)

- tdClassName (string; optional)

- tdStyle (string; optional)

- thClassName (string; optional)

- thStyle (dict; optional)

- theadClassName (string; optional)

- theadStyle (dict; optional)

- titleAsId (boolean; default False)

- trClassName (string; optional)

- trStyle (string; optional)

- wrapLongLines (boolean; default False)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_markdown_components'
    _type = 'FefferyMarkdown'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, markdownStr=Component.UNDEFINED, codeTheme=Component.UNDEFINED, renderHtml=Component.UNDEFINED, linkTarget=Component.UNDEFINED, codeBlockStyle=Component.UNDEFINED, codeStyle=Component.UNDEFINED, showLineNumbers=Component.UNDEFINED, showCopyButton=Component.UNDEFINED, imagePreview=Component.UNDEFINED, imageFallback=Component.UNDEFINED, imageForceAlignCenter=Component.UNDEFINED, imageWidth=Component.UNDEFINED, imageHeight=Component.UNDEFINED, forceTableAlignCenter=Component.UNDEFINED, forceTableHeaderTextAlignCenter=Component.UNDEFINED, forceTableContentTextAlignCenter=Component.UNDEFINED, h1Style=Component.UNDEFINED, h1ClassName=Component.UNDEFINED, h2Style=Component.UNDEFINED, h2ClassName=Component.UNDEFINED, h3Style=Component.UNDEFINED, h3ClassName=Component.UNDEFINED, h4Style=Component.UNDEFINED, h4ClassName=Component.UNDEFINED, h5Style=Component.UNDEFINED, h5ClassName=Component.UNDEFINED, h6Style=Component.UNDEFINED, h6ClassName=Component.UNDEFINED, tableStyle=Component.UNDEFINED, tableClassName=Component.UNDEFINED, theadStyle=Component.UNDEFINED, theadClassName=Component.UNDEFINED, trStyle=Component.UNDEFINED, trClassName=Component.UNDEFINED, thStyle=Component.UNDEFINED, thClassName=Component.UNDEFINED, tdStyle=Component.UNDEFINED, tdClassName=Component.UNDEFINED, aStyle=Component.UNDEFINED, aClassName=Component.UNDEFINED, blockquoteStyle=Component.UNDEFINED, blockquoteClassName=Component.UNDEFINED, inlineCodeStyle=Component.UNDEFINED, inlineCodeClassName=Component.UNDEFINED, hrStyle=Component.UNDEFINED, hrClassName=Component.UNDEFINED, strongStyle=Component.UNDEFINED, strongClassName=Component.UNDEFINED, checkExternalLink=Component.UNDEFINED, externalLinkPrefixWhiteList=Component.UNDEFINED, safeRedirectUrlPrefix=Component.UNDEFINED, markdownBaseClassName=Component.UNDEFINED, titleAsId=Component.UNDEFINED, facAnchorLinkDict=Component.UNDEFINED, wrapLongLines=Component.UNDEFINED, codeFallBackLanguage=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aClassName', 'aStyle', 'blockquoteClassName', 'blockquoteStyle', 'checkExternalLink', 'className', 'codeBlockStyle', 'codeFallBackLanguage', 'codeStyle', 'codeTheme', 'externalLinkPrefixWhiteList', 'facAnchorLinkDict', 'forceTableAlignCenter', 'forceTableContentTextAlignCenter', 'forceTableHeaderTextAlignCenter', 'h1ClassName', 'h1Style', 'h2ClassName', 'h2Style', 'h3ClassName', 'h3Style', 'h4ClassName', 'h4Style', 'h5ClassName', 'h5Style', 'h6ClassName', 'h6Style', 'hrClassName', 'hrStyle', 'imageFallback', 'imageForceAlignCenter', 'imageHeight', 'imagePreview', 'imageWidth', 'inlineCodeClassName', 'inlineCodeStyle', 'key', 'linkTarget', 'loading_state', 'locale', 'markdownBaseClassName', 'markdownStr', 'renderHtml', 'safeRedirectUrlPrefix', 'showCopyButton', 'showLineNumbers', 'strongClassName', 'strongStyle', 'style', 'tableClassName', 'tableStyle', 'tdClassName', 'tdStyle', 'thClassName', 'thStyle', 'theadClassName', 'theadStyle', 'titleAsId', 'trClassName', 'trStyle', 'wrapLongLines']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'aClassName', 'aStyle', 'blockquoteClassName', 'blockquoteStyle', 'checkExternalLink', 'className', 'codeBlockStyle', 'codeFallBackLanguage', 'codeStyle', 'codeTheme', 'externalLinkPrefixWhiteList', 'facAnchorLinkDict', 'forceTableAlignCenter', 'forceTableContentTextAlignCenter', 'forceTableHeaderTextAlignCenter', 'h1ClassName', 'h1Style', 'h2ClassName', 'h2Style', 'h3ClassName', 'h3Style', 'h4ClassName', 'h4Style', 'h5ClassName', 'h5Style', 'h6ClassName', 'h6Style', 'hrClassName', 'hrStyle', 'imageFallback', 'imageForceAlignCenter', 'imageHeight', 'imagePreview', 'imageWidth', 'inlineCodeClassName', 'inlineCodeStyle', 'key', 'linkTarget', 'loading_state', 'locale', 'markdownBaseClassName', 'markdownStr', 'renderHtml', 'safeRedirectUrlPrefix', 'showCopyButton', 'showLineNumbers', 'strongClassName', 'strongStyle', 'style', 'tableClassName', 'tableStyle', 'tdClassName', 'tdStyle', 'thClassName', 'thStyle', 'theadClassName', 'theadStyle', 'titleAsId', 'trClassName', 'trStyle', 'wrapLongLines']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(FefferyMarkdown, self).__init__(**args)
