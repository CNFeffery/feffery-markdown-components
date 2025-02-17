# AUTO GENERATED FILE - DO NOT EDIT

export ''_fefferymarkdown

"""
    ''_fefferymarkdown(;kwargs...)
    ''_fefferymarkdown(children::Any;kwargs...)
    ''_fefferymarkdown(children_maker::Function;kwargs...)


A FefferyMarkdown component.
markdown渲染组件FefferyMarkdown
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 强制渲染呈现的内容，优先级高于`markdownStr`、`placeholder`
- `id` (String; optional): 组件唯一id
- `aClassName` (String; optional): 针对文档中的链接内容，设置额外css类名
- `aStyle` (Dict; optional): 针对文档中的链接内容，设置额外css样式
- `blockquoteClassName` (String; optional): 针对文档中的引用块内容，设置额外css类名
- `blockquoteStyle` (Dict; optional): 针对文档中的引用块内容，设置额外css样式
- `checkExternalLink` (Bool; optional): 是否针对文档内容中的外部链接进行安全检查，需配合有效的`safeRedirectUrlPrefix`
默认值：`false`
- `className` (String; optional): 根容器css类名
- `codeBlockStyle` (Dict; optional): 针对文档中的代码块，设置额外css样式
- `codeFallBackLanguage` (String; optional): 当文档中存在源语言描述缺失的代码块时，设置缺省回滚的编程语言类型
- `codeStyle` (Dict; optional): 针对文档中的代码内容，设置额外css样式
- `codeTheme` (a value equal to: 'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula', 'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light', 'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque', 'solarized-dark-atom', 'synthwave84', 'z-touch'; optional): 针对文档中的代码块，设置所应用的代码主题，可选项有`'a11y-dark'`、`'atom-dark'`、`'coldark-cold'`、`'coldark-dark'`、`'coy'`、
`'coy-without-shadows'`、`'darcula'`、`'dracula'`、`'nord'`、`'okaidia'`、`'prism'`、`'solarizedlight'`、`'twilight'`、
`'duotone-sea'`、`'duotone-dark'`、`'duotone-light'`、`'duotone-space'`、`'gh-colors'`、`'gruvbox-dark'`、`'material-dark'`、
`'night-owl'`、`'one-light'`、`'pojoaque'`、`'solarized-dark-atom'`、`'synthwave84'`、`'z-touch'`
默认值：`'gh-colors'`
- `externalLinkPrefixWhiteList` (Array of Strings; optional): 当开启外部链接安全检查时，用于设置一系列白名单链接前缀，以这些白名单链接前缀开头的链接将忽略安全检查
- `facAnchorLinkDict` (Bool | Real | String | Dict | Array; optional): 监听基于文档标题内容自动推导计算出的目录结构，可直接配合`fac`组件库中的`AntdAnchor`组件使用
- `forceTableAlignCenter` (Bool; optional): 针对文档中的表格，是否强制居中显示
默认值：`true`
- `forceTableContentTextAlignCenter` (Bool; optional): 针对文档中的表格，是否强制普通单元格内文字居中
默认值：`true`
- `forceTableHeaderTextAlignCenter` (Bool; optional): 针对文档中的表格，是否强制表头单元格内文字居中
默认值：`true`
- `h1ClassName` (String; optional): 针对文档中的一级标题内容，设置额外css类名
- `h1Style` (Dict; optional): 针对文档中的一级标题内容，设置额外css样式
- `h2ClassName` (String; optional): 针对文档中的二级标题内容，设置额外css类名
- `h2Style` (Dict; optional): 针对文档中的二级标题内容，设置额外css样式
- `h3ClassName` (String; optional): 针对文档中的三级标题内容，设置额外css类名
- `h3Style` (Dict; optional): 针对文档中的三级标题内容，设置额外css样式
- `h4ClassName` (String; optional): 针对文档中的四级标题内容，设置额外css类名
- `h4Style` (Dict; optional): 针对文档中的四级标题内容，设置额外css样式
- `h5ClassName` (String; optional): 针对文档中的五级标题内容，设置额外css类名
- `h5Style` (Dict; optional): 针对文档中的五级标题内容，设置额外css样式
- `h6ClassName` (String; optional): 针对文档中的六级标题内容，设置额外css类名
- `h6Style` (Dict; optional): 针对文档中的六级标题内容，设置额外css样式
- `highlightClassName` (String; optional): `searchKeyword`对应搜索结果额外css类名
- `highlightStyle` (Dict; optional): `searchKeyword`对应搜索结果额外css样式
- `hrClassName` (String; optional): 针对文档中的水平分割线内容，设置额外css类名
- `hrStyle` (Dict; optional): 针对文档中的水平分割线内容，设置额外css样式
- `imageFallback` (String; optional): 针对文档中的图片，设置资源加载失败时的占位图资源地址
- `imageForceAlignCenter` (Bool; optional): 针对文档中的图片，是否强制居中显示
默认值：`false`
- `imageHeight` (String | Real; optional): 为文档中的所有图片强制设置统一的高度
- `imagePreview` (Bool; optional): 针对文档中的图片，是否添加交互查看功能
默认值：`false`
- `imageWidth` (String | Real; optional): 为文档中的所有图片强制设置统一的宽度
- `inlineCodeClassName` (String; optional): 针对文档中的行内代码内容，设置额外css类名
- `inlineCodeStyle` (Dict; optional): 针对文档中的行内代码内容，设置额外css样式
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `linkTarget` (String; optional): markdown中链接的跳转方式
默认值：`'_blank'`
- `locale` (a value equal to: 'en-us', 'zh-cn'; optional): 组件文案语种，可选项有`'zh-cn'`、`'en-us'`
默认值：`'zh-cn'`
- `markdownBaseClassName` (String; optional): 手动覆盖文档容器的css类名，通常在需要完全自定义文档样式时使用
默认值：`'markdown-body'`
- `markdownStr` (String; optional): markdown字符串
- `placeholder` (a list of or a singular dash component, string or number; optional): 组件型，设置当`markdownStr`为空时的占位内容
- `renderHtml` (Bool; optional): 是否解析渲染`markdownStr`中的html源码
默认值：`false`
- `safeRedirectUrlPrefix` (String; optional): 当开启外部链接安全检查时，用于定义链接点击跳转到的中转接口url前缀，譬如：
针对外部链接`https://www.baidu.com/`，设置`safeRedirectUrlPrefix='/safe-redirect?target='`后，用户点击此外部链接，将跳转至
`/safe-redirect?target=https://www.baidu.com/`
- `searchKeyword` (String; optional): 搜索关键词
- `showCopyButton` (Bool; optional): 代码块是否显示右上角复制按钮
默认值：`true`
- `showLineNumbers` (Bool; optional): 代码块是否显示行号
默认值：`true`
- `strongClassName` (String; optional): 针对文档中的加粗内容，设置额外css类名
- `strongStyle` (Dict; optional): 针对文档中的加粗内容，设置额外css样式
- `style` (Dict; optional): 根容器css样式
- `tableClassName` (String; optional): 针对文档中的表格内容，设置额外css类名
- `tableStyle` (Dict; optional): 针对文档中的表格内容，设置额外css样式
- `tdClassName` (String; optional): 针对文档中的表格数据单元格内容，设置额外css类名
- `tdStyle` (String; optional): 针对文档中的表格数据单元格内容，设置额外css样式
- `thClassName` (String; optional): 针对文档中的表格表头单元格内容，设置额外css类名
- `thStyle` (Dict; optional): 针对文档中的表格表头单元格内容，设置额外css样式
- `theadClassName` (String; optional): 针对文档中的表格表头内容，设置额外css类名
- `theadStyle` (Dict; optional): 针对文档中的表格表头内容，设置额外css样式
- `titleAsId` (Bool; optional): 针对文档渲染结果中的各标题元素，是否将标题内容作为对应元素的id，以便于配合`AntdAnchor`等组件生成目录
默认值：`false`
- `trClassName` (String; optional): 针对文档中的表格数据行内容，设置额外css类名
- `trStyle` (String; optional): 针对文档中的表格数据行内容，设置额外css样式
- `wrapLongLines` (Bool; optional): 针对超长行内容是否允许自动换行
默认值：`true`
"""
function ''_fefferymarkdown(; kwargs...)
        available_props = Symbol[:children, :id, :aClassName, :aStyle, :blockquoteClassName, :blockquoteStyle, :checkExternalLink, :className, :codeBlockStyle, :codeFallBackLanguage, :codeStyle, :codeTheme, :externalLinkPrefixWhiteList, :facAnchorLinkDict, :forceTableAlignCenter, :forceTableContentTextAlignCenter, :forceTableHeaderTextAlignCenter, :h1ClassName, :h1Style, :h2ClassName, :h2Style, :h3ClassName, :h3Style, :h4ClassName, :h4Style, :h5ClassName, :h5Style, :h6ClassName, :h6Style, :highlightClassName, :highlightStyle, :hrClassName, :hrStyle, :imageFallback, :imageForceAlignCenter, :imageHeight, :imagePreview, :imageWidth, :inlineCodeClassName, :inlineCodeStyle, :key, :linkTarget, :locale, :markdownBaseClassName, :markdownStr, :placeholder, :renderHtml, :safeRedirectUrlPrefix, :searchKeyword, :showCopyButton, :showLineNumbers, :strongClassName, :strongStyle, :style, :tableClassName, :tableStyle, :tdClassName, :tdStyle, :thClassName, :thStyle, :theadClassName, :theadStyle, :titleAsId, :trClassName, :trStyle, :wrapLongLines]
        wild_props = Symbol[]
        return Component("''_fefferymarkdown", "FefferyMarkdown", "feffery_markdown_components", available_props, wild_props; kwargs...)
end

''_fefferymarkdown(children::Any; kwargs...) = ''_fefferymarkdown(;kwargs..., children = children)
''_fefferymarkdown(children_maker::Function; kwargs...) = ''_fefferymarkdown(children_maker(); kwargs...)

