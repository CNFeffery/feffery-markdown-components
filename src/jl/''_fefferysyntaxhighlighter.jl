# AUTO GENERATED FILE - DO NOT EDIT

export ''_fefferysyntaxhighlighter

"""
    ''_fefferysyntaxhighlighter(;kwargs...)

A FefferySyntaxHighlighter component.
代码语法高亮组件FefferySyntaxHighlighter
Keyword arguments:
- `id` (String; optional)
- `addedLineNumbers` (Array of Reals; optional)
- `addedLineStyle` (Dict; optional)
- `codeBlockStyle` (Dict; optional)
- `codeString` (String; required)
- `codeStyle` (Dict; optional)
- `codeTheme` (a value equal to: 'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula', 'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light', 'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque', 'solarized-dark-atom', 'synthwave84', 'z-touch'; optional)
- `key` (String; optional)
- `language` (String; required)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `removedLineNumbers` (Array of Reals; optional)
- `removedLineStyle` (Dict; optional)
- `showCopyButton` (Bool; optional)
- `showLineNumbers` (Bool; optional)
- `wrapLongLines` (Bool; optional)
"""
function ''_fefferysyntaxhighlighter(; kwargs...)
        available_props = Symbol[:id, :addedLineNumbers, :addedLineStyle, :codeBlockStyle, :codeString, :codeStyle, :codeTheme, :key, :language, :loading_state, :removedLineNumbers, :removedLineStyle, :showCopyButton, :showLineNumbers, :wrapLongLines]
        wild_props = Symbol[]
        return Component("''_fefferysyntaxhighlighter", "FefferySyntaxHighlighter", "feffery_markdown_components", available_props, wild_props; kwargs...)
end

