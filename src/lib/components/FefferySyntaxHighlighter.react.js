// react核心
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// react-syntax-highlighter核心
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    a11yDark,
    atomDark,
    coldarkCold,
    coldarkDark,
    coy,
    coyWithoutShadows,
    darcula,
    dracula,
    nord,
    okaidia,
    prism,
    solarizedlight,
    twilight,
    duotoneSea,
    duotoneDark,
    duotoneLight,
    duotoneSpace,
    ghcolors,
    gruvboxDark,
    materialDark,
    nightOwl,
    oneLight,
    pojoaque,
    solarizedDarkAtom,
    synthwave84,
    zTouch
} from 'react-syntax-highlighter/dist/esm/styles/prism';
// antd核心
import {
    CheckOutlined,
    CopyOutlined
} from '@ant-design/icons';
// 辅助库
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLoading } from './utils';

const str2theme = new Map([
    ['a11y-dark', a11yDark],
    ['atom-dark', atomDark],
    ['coldark-cold', coldarkCold],
    ['coldark-dark', coldarkDark],
    ['coy', coy],
    ['coy-without-shadows', coyWithoutShadows],
    ['darcula', darcula],
    ['dracula', dracula],
    ['nord', nord],
    ['okaidia', okaidia],
    ['prism', prism],
    ['solarizedlight', solarizedlight],
    ['twilight', twilight],
    ['duotone-sea', duotoneSea],
    ['duotone-dark', duotoneDark],
    ['duotone-light', duotoneLight],
    ['duotone-space', duotoneSpace],
    ['gh-colors', ghcolors],
    ['gruvbox-dark', gruvboxDark],
    ['material-dark', materialDark],
    ['night-owl', nightOwl],
    ['one-light', oneLight],
    ['pojoaque', pojoaque],
    ['solarized-dark-atom', solarizedDarkAtom],
    ['synthwave84', synthwave84],
    ['z-touch', zTouch]
])

/**
 * 代码语法高亮组件FefferySyntaxHighlighter
 */
const FefferySyntaxHighlighter = ({
    id,
    codeString,
    language,
    codeTheme = 'gh-colors',
    codeBlockStyle,
    codeStyle,
    showLineNumbers = true,
    showCopyButton = true,
    wrapLongLines = false,
    addedLineNumbers = [],
    removedLineNumbers = [],
    addedLineStyle = { backgroundColor: '#e6ffec' },
    removedLineStyle = { backgroundColor: '#ffebe9' },
    setProps
}) => {

    const [isCopied, setIsCopied] = useState(false);

    codeTheme = codeTheme || 'gh-colors'
    let currentCodeStyle = str2theme.get(codeTheme)
    if (codeTheme === 'gh-colors') {
        currentCodeStyle = {
            ...currentCodeStyle,
            'pre[class*="language-"]': {
                ...currentCodeStyle['pre[class*="language-"]'],
                'background': '#f6f8fa'
            }
        }
    }

    currentCodeStyle = {
        ...currentCodeStyle,
        'pre[class*="language-"]': {
            ...currentCodeStyle['pre[class*="language-"]'],
            'borderRadius': '5px',
            ...codeBlockStyle
        },
        'code[class*="language-"]': {
            ...currentCodeStyle['code[class*="language-"]'],
            'fontSize': '14px',
            ...codeStyle
        }
    }

    return (
        <div id={id}
            style={{ position: 'relative' }}
            className={'syntax-highlighter-body'}
            data-dash-is-loading={useLoading()}>
            {
                showCopyButton ?
                    <CopyToClipboard
                        onCopy={() => {
                            setIsCopied(true);
                            setTimeout(() => setIsCopied(false), 1500);
                        }}
                        style={
                            {
                                position: 'absolute',
                                right: '9px',
                                top: '7px',
                                padding: '4px 4px 3px 4px',
                                margin: 0,
                                background: 'transparent',
                                border: '1px solid rgba(27,31,36,0.15)',
                                cursor: 'pointer',
                                zIndex: 999,
                                borderRadius: '5px',
                                lineHeight: '16px',
                            }
                        }
                        text={codeString}
                    >
                        <button
                            type="button"
                            aria-label="Copy to Clipboard Button"
                            className={'copy-to-clipboard-button'}
                        >
                            {isCopied ? <CheckOutlined style={{ color: 'rgb(91, 199, 38)', fontSize: '16px' }} />
                                : <CopyOutlined style={{ color: '#57606a', fontSize: '16px' }} />}
                        </button>
                    </CopyToClipboard> :
                    null
            }
            <SyntaxHighlighter
                style={currentCodeStyle}
                showLineNumbers={showLineNumbers}
                wrapLongLines={wrapLongLines}
                language={language}
                wrapLines={true}
                lineProps={
                    (lineNumber) => {
                        let style = { display: 'block' }
                        if (addedLineNumbers.includes(lineNumber)) {
                            return {
                                style: {
                                    ...style,
                                    ...addedLineStyle
                                }
                            };
                        } else if (removedLineNumbers.includes(lineNumber)) {
                            return {
                                style: {
                                    ...style,
                                    ...removedLineStyle
                                }
                            }
                        }
                        return { style };
                    }
                }
                PreTag="div" >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
}

FefferySyntaxHighlighter.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 代码内容字符串
     */
    codeString: PropTypes.string.isRequired,

    /**
     * 必填，代码语言
     */
    language: PropTypes.string.isRequired,

    /**
     * 代码高亮主题，可选项有`'a11y-dark'`、`'atom-dark'`、`'coldark-cold'`、`'coldark-dark'`、`'coy'`、
     * `'coy-without-shadows'`、`'darcula'`、`'dracula'`、`'nord'`、`'okaidia'`、`'prism'`、`'solarizedlight'`、
     * `'twilight'`、`'duotone-sea'`、`'duotone-dark'`、`'duotone-light'`、`'duotone-space'`、`'gh-colors'`、
     * `'gruvbox-dark'`、`'material-dark'`、`'night-owl'`、`'one-light'`、`'pojoaque'`、`'solarized-dark-atom'`、
     * `'synthwave84'`、`'z-touch'`
     * 默认值：`'gh-colors'`
     */
    codeTheme: PropTypes.oneOf([
        'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula',
        'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light',
        'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque',
        'solarized-dark-atom', 'synthwave84', 'z-touch'
    ]),

    /**
     * 代码块容器css样式
     */
    codeBlockStyle: PropTypes.object,

    /**
     * 代码内容css样式
     */
    codeStyle: PropTypes.object,

    /**
     * 代码块是否显示行号
     * 默认值：`true`
     */
    showLineNumbers: PropTypes.bool,

    /**
     * 代码块是否在右上角显示复制按钮
     * 默认值：`true`
     */
    showCopyButton: PropTypes.bool,

    /**
     * 是否允许超长代码行自动换行
     * 默认值：`false`
     */
    wrapLongLines: PropTypes.bool,

    /**
     * 配置需要渲染为差异比较新增行的代码行下标列表
     * 默认值：`[]`
     */
    addedLineNumbers: PropTypes.arrayOf(PropTypes.number),

    /**
     * 配置需要渲染为差异比较移除行的代码行下标列表
     * 默认值：`[]`
     */
    removedLineNumbers: PropTypes.arrayOf(PropTypes.number),

    /**
     * 差异比较新增行css样式
     */
    addedLineStyle: PropTypes.object,

    /**
     * 差异比较移除行css样式
     */
    removedLineStyle: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default FefferySyntaxHighlighter;