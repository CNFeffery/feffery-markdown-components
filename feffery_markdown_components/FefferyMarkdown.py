# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyMarkdown(Component):
    """A FefferyMarkdown component.
markdown渲染组件FefferyMarkdown

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    强制渲染呈现的内容，优先级高于`markdownStr`、`placeholder`.

- style (dict; optional):
    根容器css样式.

- className (string; optional):
    根容器css类名.

- locale (a value equal to: 'en-us', 'zh-cn'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`、`'en-us'`  默认值：`'zh-cn'`.

- markdownStr (string; optional):
    markdown字符串.

- placeholder (a list of or a singular dash component, string or number; optional):
    组件型，设置当`markdownStr`为空时的占位内容.

- codeTheme (a value equal to: 'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula', 'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light', 'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque', 'solarized-dark-atom', 'synthwave84', 'z-touch'; default 'gh-colors'):
    针对文档中的代码块，设置所应用的代码主题，可选项有`'a11y-dark'`、`'atom-dark'`、`'coldark-cold'`、`'coldark-dark'`、`'coy'`、
    `'coy-without-shadows'`、`'darcula'`、`'dracula'`、`'nord'`、`'okaidia'`、`'prism'`、`'solarizedlight'`、`'twilight'`、
    `'duotone-sea'`、`'duotone-dark'`、`'duotone-light'`、`'duotone-space'`、`'gh-colors'`、`'gruvbox-dark'`、`'material-dark'`、
    `'night-owl'`、`'one-light'`、`'pojoaque'`、`'solarized-dark-atom'`、`'synthwave84'`、`'z-touch'`
    默认值：`'gh-colors'`.

- renderHtml (boolean; optional):
    是否解析渲染`markdownStr`中的html源码  默认值：`False`.

- linkTarget (string; default '_blank'):
    markdown中链接的跳转方式  默认值：`'_blank'`.

- codeBlockStyle (dict; optional):
    针对文档中的代码块，设置额外css样式.

- codeStyle (dict; optional):
    针对文档中的代码内容，设置额外css样式.

- showLineNumbers (boolean; default True):
    代码块是否显示行号  默认值：`True`.

- showCopyButton (boolean; default True):
    代码块是否显示右上角复制按钮  默认值：`True`.

- imagePreview (boolean; default False):
    针对文档中的图片，是否添加交互查看功能  默认值：`False`.

- imageFallback (string; optional):
    针对文档中的图片，设置资源加载失败时的占位图资源地址.

- imageForceAlignCenter (boolean; default False):
    针对文档中的图片，是否强制居中显示  默认值：`False`.

- imageWidth (string | number; optional):
    为文档中的所有图片强制设置统一的宽度.

- imageHeight (string | number; optional):
    为文档中的所有图片强制设置统一的高度.

- forceTableAlignCenter (boolean; default False):
    针对文档中的表格，是否强制居中显示  默认值：`True`.

- forceTableHeaderTextAlignCenter (boolean; default True):
    针对文档中的表格，是否强制表头单元格内文字居中  默认值：`True`.

- forceTableContentTextAlignCenter (boolean; default True):
    针对文档中的表格，是否强制普通单元格内文字居中  默认值：`True`.

- h1Style (dict; optional):
    针对文档中的一级标题内容，设置额外css样式.

- h1ClassName (string; optional):
    针对文档中的一级标题内容，设置额外css类名.

- h2Style (dict; optional):
    针对文档中的二级标题内容，设置额外css样式.

- h2ClassName (string; optional):
    针对文档中的二级标题内容，设置额外css类名.

- h3Style (dict; optional):
    针对文档中的三级标题内容，设置额外css样式.

- h3ClassName (string; optional):
    针对文档中的三级标题内容，设置额外css类名.

- h4Style (dict; optional):
    针对文档中的四级标题内容，设置额外css样式.

- h4ClassName (string; optional):
    针对文档中的四级标题内容，设置额外css类名.

- h5Style (dict; optional):
    针对文档中的五级标题内容，设置额外css样式.

- h5ClassName (string; optional):
    针对文档中的五级标题内容，设置额外css类名.

- h6Style (dict; optional):
    针对文档中的六级标题内容，设置额外css样式.

- h6ClassName (string; optional):
    针对文档中的六级标题内容，设置额外css类名.

- tableStyle (dict; optional):
    针对文档中的表格内容，设置额外css样式.

- tableClassName (string; optional):
    针对文档中的表格内容，设置额外css类名.

- theadStyle (dict; optional):
    针对文档中的表格表头内容，设置额外css样式.

- theadClassName (string; optional):
    针对文档中的表格表头内容，设置额外css类名.

- trStyle (string; optional):
    针对文档中的表格数据行内容，设置额外css样式.

- trClassName (string; optional):
    针对文档中的表格数据行内容，设置额外css类名.

- thStyle (dict; optional):
    针对文档中的表格表头单元格内容，设置额外css样式.

- thClassName (string; optional):
    针对文档中的表格表头单元格内容，设置额外css类名.

- tdStyle (string; optional):
    针对文档中的表格数据单元格内容，设置额外css样式.

- tdClassName (string; optional):
    针对文档中的表格数据单元格内容，设置额外css类名.

- aStyle (dict; optional):
    针对文档中的链接内容，设置额外css样式.

- aClassName (string; optional):
    针对文档中的链接内容，设置额外css类名.

- blockquoteStyle (dict; optional):
    针对文档中的引用块内容，设置额外css样式.

- blockquoteClassName (string; optional):
    针对文档中的引用块内容，设置额外css类名.

- inlineCodeStyle (dict; optional):
    针对文档中的行内代码内容，设置额外css样式.

- inlineCodeClassName (string; optional):
    针对文档中的行内代码内容，设置额外css类名.

- hrStyle (dict; optional):
    针对文档中的水平分割线内容，设置额外css样式.

- hrClassName (string; optional):
    针对文档中的水平分割线内容，设置额外css类名.

- strongStyle (dict; optional):
    针对文档中的加粗内容，设置额外css样式.

- strongClassName (string; optional):
    针对文档中的加粗内容，设置额外css类名.

- checkExternalLink (boolean; default False):
    是否针对文档内容中的外部链接进行安全检查，需配合有效的`safeRedirectUrlPrefix`  默认值：`False`.

- externalLinkPrefixWhiteList (list of strings; optional):
    当开启外部链接安全检查时，用于设置一系列白名单链接前缀，以这些白名单链接前缀开头的链接将忽略安全检查.

- safeRedirectUrlPrefix (string; optional):
    当开启外部链接安全检查时，用于定义链接点击跳转到的中转接口url前缀，譬如：
    针对外部链接`https://www.baidu.com/`，设置`safeRedirectUrlPrefix='/safe-redirect?target='`后，用户点击此外部链接，将跳转至
    `/safe-redirect?target=https://www.baidu.com/`.

- markdownBaseClassName (string; default 'markdown-body'):
    手动覆盖文档容器的css类名，通常在需要完全自定义文档样式时使用  默认值：`'markdown-body'`.

- titleAsId (boolean; default False):
    针对文档渲染结果中的各标题元素，是否将标题内容作为对应元素的id，以便于配合`AntdAnchor`等组件生成目录
    默认值：`False`.

- facAnchorLinkDict (boolean | number | string | dict | list; optional):
    监听基于文档标题内容自动推导计算出的目录结构，可直接配合`fac`组件库中的`AntdAnchor`组件使用.

- wrapLongLines (boolean; default False):
    针对超长行内容是否允许自动换行  默认值：`True`.

- codeFallBackLanguage (string; optional):
    当文档中存在源语言描述缺失的代码块时，设置缺省回滚的编程语言类型.

- searchKeyword (string; optional):
    搜索关键词.

- highlightStyle (dict; optional):
    `searchKeyword`对应搜索结果额外css样式.

- highlightClassName (string; optional):
    `searchKeyword`对应搜索结果额外css类名.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = ['placeholder']
    _base_nodes = ['placeholder', 'children']
    _namespace = 'feffery_markdown_components'
    _type = 'FefferyMarkdown'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, markdownStr=Component.UNDEFINED, placeholder=Component.UNDEFINED, codeTheme=Component.UNDEFINED, renderHtml=Component.UNDEFINED, linkTarget=Component.UNDEFINED, codeBlockStyle=Component.UNDEFINED, codeStyle=Component.UNDEFINED, showLineNumbers=Component.UNDEFINED, showCopyButton=Component.UNDEFINED, imagePreview=Component.UNDEFINED, imageFallback=Component.UNDEFINED, imageForceAlignCenter=Component.UNDEFINED, imageWidth=Component.UNDEFINED, imageHeight=Component.UNDEFINED, forceTableAlignCenter=Component.UNDEFINED, forceTableHeaderTextAlignCenter=Component.UNDEFINED, forceTableContentTextAlignCenter=Component.UNDEFINED, h1Style=Component.UNDEFINED, h1ClassName=Component.UNDEFINED, h2Style=Component.UNDEFINED, h2ClassName=Component.UNDEFINED, h3Style=Component.UNDEFINED, h3ClassName=Component.UNDEFINED, h4Style=Component.UNDEFINED, h4ClassName=Component.UNDEFINED, h5Style=Component.UNDEFINED, h5ClassName=Component.UNDEFINED, h6Style=Component.UNDEFINED, h6ClassName=Component.UNDEFINED, tableStyle=Component.UNDEFINED, tableClassName=Component.UNDEFINED, theadStyle=Component.UNDEFINED, theadClassName=Component.UNDEFINED, trStyle=Component.UNDEFINED, trClassName=Component.UNDEFINED, thStyle=Component.UNDEFINED, thClassName=Component.UNDEFINED, tdStyle=Component.UNDEFINED, tdClassName=Component.UNDEFINED, aStyle=Component.UNDEFINED, aClassName=Component.UNDEFINED, blockquoteStyle=Component.UNDEFINED, blockquoteClassName=Component.UNDEFINED, inlineCodeStyle=Component.UNDEFINED, inlineCodeClassName=Component.UNDEFINED, hrStyle=Component.UNDEFINED, hrClassName=Component.UNDEFINED, strongStyle=Component.UNDEFINED, strongClassName=Component.UNDEFINED, checkExternalLink=Component.UNDEFINED, externalLinkPrefixWhiteList=Component.UNDEFINED, safeRedirectUrlPrefix=Component.UNDEFINED, markdownBaseClassName=Component.UNDEFINED, titleAsId=Component.UNDEFINED, facAnchorLinkDict=Component.UNDEFINED, wrapLongLines=Component.UNDEFINED, codeFallBackLanguage=Component.UNDEFINED, searchKeyword=Component.UNDEFINED, highlightStyle=Component.UNDEFINED, highlightClassName=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'locale', 'markdownStr', 'placeholder', 'codeTheme', 'renderHtml', 'linkTarget', 'codeBlockStyle', 'codeStyle', 'showLineNumbers', 'showCopyButton', 'imagePreview', 'imageFallback', 'imageForceAlignCenter', 'imageWidth', 'imageHeight', 'forceTableAlignCenter', 'forceTableHeaderTextAlignCenter', 'forceTableContentTextAlignCenter', 'h1Style', 'h1ClassName', 'h2Style', 'h2ClassName', 'h3Style', 'h3ClassName', 'h4Style', 'h4ClassName', 'h5Style', 'h5ClassName', 'h6Style', 'h6ClassName', 'tableStyle', 'tableClassName', 'theadStyle', 'theadClassName', 'trStyle', 'trClassName', 'thStyle', 'thClassName', 'tdStyle', 'tdClassName', 'aStyle', 'aClassName', 'blockquoteStyle', 'blockquoteClassName', 'inlineCodeStyle', 'inlineCodeClassName', 'hrStyle', 'hrClassName', 'strongStyle', 'strongClassName', 'checkExternalLink', 'externalLinkPrefixWhiteList', 'safeRedirectUrlPrefix', 'markdownBaseClassName', 'titleAsId', 'facAnchorLinkDict', 'wrapLongLines', 'codeFallBackLanguage', 'searchKeyword', 'highlightStyle', 'highlightClassName', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'locale', 'markdownStr', 'placeholder', 'codeTheme', 'renderHtml', 'linkTarget', 'codeBlockStyle', 'codeStyle', 'showLineNumbers', 'showCopyButton', 'imagePreview', 'imageFallback', 'imageForceAlignCenter', 'imageWidth', 'imageHeight', 'forceTableAlignCenter', 'forceTableHeaderTextAlignCenter', 'forceTableContentTextAlignCenter', 'h1Style', 'h1ClassName', 'h2Style', 'h2ClassName', 'h3Style', 'h3ClassName', 'h4Style', 'h4ClassName', 'h5Style', 'h5ClassName', 'h6Style', 'h6ClassName', 'tableStyle', 'tableClassName', 'theadStyle', 'theadClassName', 'trStyle', 'trClassName', 'thStyle', 'thClassName', 'tdStyle', 'tdClassName', 'aStyle', 'aClassName', 'blockquoteStyle', 'blockquoteClassName', 'inlineCodeStyle', 'inlineCodeClassName', 'hrStyle', 'hrClassName', 'strongStyle', 'strongClassName', 'checkExternalLink', 'externalLinkPrefixWhiteList', 'safeRedirectUrlPrefix', 'markdownBaseClassName', 'titleAsId', 'facAnchorLinkDict', 'wrapLongLines', 'codeFallBackLanguage', 'searchKeyword', 'highlightStyle', 'highlightClassName', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(FefferyMarkdown, self).__init__(children=children, **args)
