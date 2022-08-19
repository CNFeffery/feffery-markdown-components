# AUTO GENERATED FILE - DO NOT EDIT

export ''_fefferymarkdown

"""
    ''_fefferymarkdown(;kwargs...)

A FefferyMarkdown component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `codeBlockStyle` (Dict; optional)
- `codeStyle` (Dict; optional)
- `codeTheme` (a value equal to: 'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula', 'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light', 'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque', 'solarized-dark-atom', 'synthwave84', 'z-touch'; optional)
- `linkTarget` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `markdownStr` (String; optional)
- `renderHtml` (Bool; optional)
- `showLineNumbers` (Bool; optional)
- `style` (Dict; optional)
"""
function ''_fefferymarkdown(; kwargs...)
        available_props = Symbol[:id, :className, :codeBlockStyle, :codeStyle, :codeTheme, :linkTarget, :loading_state, :markdownStr, :renderHtml, :showLineNumbers, :style]
        wild_props = Symbol[]
        return Component("''_fefferymarkdown", "FefferyMarkdown", "feffery_markdown_components", available_props, wild_props; kwargs...)
end

