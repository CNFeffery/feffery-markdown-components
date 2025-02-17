# AUTO GENERATED FILE - DO NOT EDIT

export ''_fefferysyntaxhighlighter

"""
    ''_fefferysyntaxhighlighter(;kwargs...)

A FefferySyntaxHighlighter component.
代码语法高亮组件FefferySyntaxHighlighter
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `addedLineNumbers` (Array of Reals; optional): 配置需要渲染为差异比较新增行的代码行下标列表
默认值：`[]`
- `addedLineStyle` (Dict; optional): 差异比较新增行css样式
- `codeBlockStyle` (Dict; optional): 代码块容器css样式
- `codeString` (String; required): 代码内容字符串
- `codeStyle` (Dict; optional): 代码内容css样式
- `codeTheme` (a value equal to: 'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula', 'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light', 'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque', 'solarized-dark-atom', 'synthwave84', 'z-touch'; optional): 代码高亮主题，可选项有`'a11y-dark'`、`'atom-dark'`、`'coldark-cold'`、`'coldark-dark'`、`'coy'`、
`'coy-without-shadows'`、`'darcula'`、`'dracula'`、`'nord'`、`'okaidia'`、`'prism'`、`'solarizedlight'`、
`'twilight'`、`'duotone-sea'`、`'duotone-dark'`、`'duotone-light'`、`'duotone-space'`、`'gh-colors'`、
`'gruvbox-dark'`、`'material-dark'`、`'night-owl'`、`'one-light'`、`'pojoaque'`、`'solarized-dark-atom'`、
`'synthwave84'`、`'z-touch'`
默认值：`'gh-colors'`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `language` (String; required): 必填，代码语言
- `removedLineNumbers` (Array of Reals; optional): 配置需要渲染为差异比较移除行的代码行下标列表
默认值：`[]`
- `removedLineStyle` (Dict; optional): 差异比较移除行css样式
- `showCopyButton` (Bool; optional): 代码块是否在右上角显示复制按钮
默认值：`true`
- `showLineNumbers` (Bool; optional): 代码块是否显示行号
默认值：`true`
- `wrapLongLines` (Bool; optional): 是否允许超长代码行自动换行
默认值：`false`
"""
function ''_fefferysyntaxhighlighter(; kwargs...)
        available_props = Symbol[:id, :addedLineNumbers, :addedLineStyle, :codeBlockStyle, :codeString, :codeStyle, :codeTheme, :key, :language, :removedLineNumbers, :removedLineStyle, :showCopyButton, :showLineNumbers, :wrapLongLines]
        wild_props = Symbol[]
        return Component("''_fefferysyntaxhighlighter", "FefferySyntaxHighlighter", "feffery_markdown_components", available_props, wild_props; kwargs...)
end

