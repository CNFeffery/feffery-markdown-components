# AUTO GENERATED FILE - DO NOT EDIT

export ''_fefferymarkdown

"""
    ''_fefferymarkdown(;kwargs...)

A FefferyMarkdown component.

Keyword arguments:
- `id` (String; optional)
- `aClassName` (String; optional)
- `aStyle` (Dict; optional)
- `blockquoteClassName` (String; optional)
- `blockquoteStyle` (Dict; optional)
- `checkExternalLink` (Bool; optional)
- `className` (String; optional)
- `codeBlockStyle` (Dict; optional)
- `codeStyle` (Dict; optional)
- `codeTheme` (a value equal to: 'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula', 'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light', 'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque', 'solarized-dark-atom', 'synthwave84', 'z-touch'; optional)
- `externalLinkPrefixWhiteList` (Array of Strings; optional)
- `forceTableAlignCenter` (Bool; optional)
- `forceTableContentTextAlignCenter` (Bool; optional)
- `forceTableHeaderTextAlignCenter` (Bool; optional)
- `h1ClassName` (String; optional)
- `h1Style` (Dict; optional)
- `h2ClassName` (String; optional)
- `h2Style` (Dict; optional)
- `h3ClassName` (String; optional)
- `h3Style` (Dict; optional)
- `h4ClassName` (String; optional)
- `h4Style` (Dict; optional)
- `h5ClassName` (String; optional)
- `h5Style` (Dict; optional)
- `h6ClassName` (String; optional)
- `h6Style` (Dict; optional)
- `hrClassName` (String; optional)
- `hrStyle` (Dict; optional)
- `imageFallback` (String; optional)
- `imageForceAlignCenter` (Bool; optional)
- `imageHeight` (String | Real; optional)
- `imagePreview` (Bool; optional)
- `imageWidth` (String | Real; optional)
- `inlineCodeClassName` (String; optional)
- `inlineCodeStyle` (Dict; optional)
- `linkTarget` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'en-us', 'zh-cn'; optional)
- `markdownBaseClassName` (String; optional)
- `markdownStr` (String; optional)
- `renderHtml` (Bool; optional)
- `safeRedirectUrlPrefix` (String; optional)
- `showCopyButton` (Bool; optional)
- `showLineNumbers` (Bool; optional)
- `strongClassName` (String; optional)
- `strongStyle` (Dict; optional)
- `style` (Dict; optional)
- `tableClassName` (String; optional)
- `tableStyle` (Dict; optional)
- `tdClassName` (String; optional)
- `tdStyle` (String; optional)
- `thClassName` (String; optional)
- `thStyle` (Dict; optional)
- `theadClassName` (String; optional)
- `theadStyle` (Dict; optional)
- `titleAsId` (Bool; optional)
- `trClassName` (String; optional)
- `trStyle` (String; optional)
"""
function ''_fefferymarkdown(; kwargs...)
        available_props = Symbol[:id, :aClassName, :aStyle, :blockquoteClassName, :blockquoteStyle, :checkExternalLink, :className, :codeBlockStyle, :codeStyle, :codeTheme, :externalLinkPrefixWhiteList, :forceTableAlignCenter, :forceTableContentTextAlignCenter, :forceTableHeaderTextAlignCenter, :h1ClassName, :h1Style, :h2ClassName, :h2Style, :h3ClassName, :h3Style, :h4ClassName, :h4Style, :h5ClassName, :h5Style, :h6ClassName, :h6Style, :hrClassName, :hrStyle, :imageFallback, :imageForceAlignCenter, :imageHeight, :imagePreview, :imageWidth, :inlineCodeClassName, :inlineCodeStyle, :linkTarget, :loading_state, :locale, :markdownBaseClassName, :markdownStr, :renderHtml, :safeRedirectUrlPrefix, :showCopyButton, :showLineNumbers, :strongClassName, :strongStyle, :style, :tableClassName, :tableStyle, :tdClassName, :tdStyle, :thClassName, :thStyle, :theadClassName, :theadStyle, :titleAsId, :trClassName, :trStyle]
        wild_props = Symbol[]
        return Component("''_fefferymarkdown", "FefferyMarkdown", "feffery_markdown_components", available_props, wild_props; kwargs...)
end

