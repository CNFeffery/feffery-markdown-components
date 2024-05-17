// react核心
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// react-markdown核心
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
// antd核心
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import CopyOutlined from '@ant-design/icons/CopyOutlined';
import { Image, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
// 辅助库
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { trim, cloneDeep, isString } from 'lodash';
import { omitDeep } from 'deepdash-es/standalone';
import { flatToTree } from './utils';
import { v4 as uuidv4 } from 'uuid';
// 代码主题
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
// 必要样式文件
import '../utils/katex/dist/katex.min.css';
import 'github-markdown-css';
import './styles.css';

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

const str2locale = new Map([
    ['zh-cn', zhCN],
    ['en-us', enUS]
])

const defaultImageFallback = 'data:image/png;base64,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'

const highlightChildren = (children, keyword, highlightStyle, highlightClassName) => {
    return children.map(
        child => {
            if (isString(child) && child.toLowerCase().includes(keyword.toLowerCase())) {
                let childSplit = child.toLowerCase().split(keyword.toLowerCase());
                if (childSplit.length > 1) {
                    let newChild = [];
                    let currentLength = 0;
                    for (let i = 0; i < childSplit.length - 1; i++) {
                        newChild.push(childSplit[i]);
                        currentLength += childSplit[i].length;
                        // 追加符合原文内容的高亮搜索结果
                        newChild.push(<span key="" style={{ background: 'yellow', ...highlightStyle }} className={highlightClassName} >{child.slice(currentLength, currentLength + keyword.length)}</span>);
                        currentLength += keyword.length;
                    }
                    newChild.push(childSplit[childSplit.length - 1]);
                    return newChild;
                }
            }
            return child;
        }
    )
}

async function parseMarkdownHeadings(e) {
    const rawHTML = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(e)

    return rawHTML
}

/**
 * markdown渲染组件FefferyMarkdown
 */
const FefferyMarkdown = (props) => {
    let {
        id,
        key,
        style,
        className,
        locale,
        markdownStr,
        codeTheme,
        renderHtml,
        linkTarget,
        codeBlockStyle,
        codeStyle,
        showLineNumbers,
        showCopyButton,
        imagePreview,
        imageFallback,
        imageForceAlignCenter,
        imageWidth,
        imageHeight,
        forceTableAlignCenter,
        forceTableHeaderTextAlignCenter,
        forceTableContentTextAlignCenter,
        h1Style,
        h1ClassName,
        h2Style,
        h2ClassName,
        h3Style,
        h3ClassName,
        h4Style,
        h4ClassName,
        h5Style,
        h5ClassName,
        h6Style,
        h6ClassName,
        tableStyle,
        tableClassName,
        theadStyle,
        theadClassName,
        trStyle,
        trClassName,
        thStyle,
        thClassName,
        tdStyle,
        tdClassName,
        aStyle,
        aClassName,
        blockquoteStyle,
        blockquoteClassName,
        inlineCodeStyle,
        inlineCodeClassName,
        hrStyle,
        hrClassName,
        strongStyle,
        strongClassName,
        checkExternalLink,
        externalLinkPrefixWhiteList,
        safeRedirectUrlPrefix,
        markdownBaseClassName,
        titleAsId,
        wrapLongLines,
        codeFallBackLanguage,
        searchKeyword,
        highlightStyle,
        highlightClassName,
        setProps
    } = props;

    // 为id设置缺省随机uuid值
    useEffect(() => {
        if (!id) {
            setProps({ id: `feffery-markdown-${uuidv4()}` })
        }
    }, [markdownStr])

    // 配置相关插件
    const remarkPlugins = [remarkGfm, remarkMath]
    const rehypePlugins = [rehypeKatex]

    // 检查是否允许渲染html代码
    if (renderHtml) {
        rehypePlugins.push(rehypeRaw)
    }

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

    useEffect(() => {
        const updateLinkDict = async () => {
            if (titleAsId) {
                // 从markdownStr中解析所有标题信息（级别、内容）
                let rawParseStrArray = await parseMarkdownHeadings(markdownStr)

                let allTitles = rawParseStrArray
                    .value
                    .split('\n')
                    .filter(s => s.startsWith('<h'))
                    .map(s => s.match(/(\d)>(.+)</))
                    .filter(s => s)
                    .map((item, i) => { return { level: parseInt(item[1]), content: item[2], key: i } })

                // 为每个标题节点添加其所属最近先辈节点key值
                let allTitles_ = cloneDeep(allTitles.map(item => {
                    return { key: item.key, title: item.content, href: `#${item.content}` }
                }))

                allTitles.forEach(
                    (item, i) => {
                        for (let idx = 0; idx < allTitles.length; idx++) {
                            if (i <= idx) {
                                break
                            } else if (item.level > allTitles[idx].level) {
                                allTitles_[i].parent = idx
                            }
                        }
                    }
                )

                setProps({
                    facAnchorLinkDict: omitDeep(flatToTree(allTitles_), ['key', 'parent'])
                })
            }
        }
        updateLinkDict()
    }, [markdownStr])

    return (
        <div id={id}
            key={key}
            style={style}
            /* 对传入的className及markdownBaseClassName进行规整 */
            className={trim([markdownBaseClassName, className].filter(s => s).join(' '))}>
            <ReactMarkdown
                linkTarget={linkTarget}
                remarkPlugins={remarkPlugins}
                rehypePlugins={rehypePlugins}
                components={{
                    code: ({ node, inline, className, children, ...props }) => {
                        const [isCopied, setIsCopied] = useState(false);
                        const match = /language-(\w+)/.exec(className || '')

                        if (!inline && (match || codeFallBackLanguage)) {
                            return (
                                <div style={{ position: 'relative' }}>
                                    {showCopyButton ?
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
                                            text={String(children).replace(/\n$/, '')}
                                        >
                                            <button
                                                type="button"
                                                aria-label="Copy to Clipboard Button"
                                                className={'copy-to-clipboard-button'}
                                            >
                                                {isCopied ? <CheckOutlined style={{ color: 'rgb(91, 199, 38)', fontSize: '16px' }} />
                                                    : <CopyOutlined style={{ color: '#57606a', fontSize: '16px' }} />}
                                            </button>
                                        </CopyToClipboard> : null}
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={currentCodeStyle}
                                        showLineNumbers={showLineNumbers}
                                        language={match ? match[1] : codeFallBackLanguage}
                                        wrapLongLines={wrapLongLines}
                                        PreTag="div"
                                        {...props} />
                                </div>
                            );
                        } else {
                            props.style = {
                                ...props.style,
                                ...inlineCodeStyle
                            }
                            if (inlineCodeClassName) {
                                className = `${className} ${inlineCodeClassName}`
                            }
                            return (
                                <code className={className} {...props}>
                                    {
                                        searchKeyword ?
                                            highlightChildren(children, searchKeyword, highlightStyle, highlightClassName) :
                                            children
                                    }
                                </code>
                            );
                        }
                    },
                    img: ({ node, ...props }) => {
                        return <ConfigProvider locale={str2locale.get(locale)}>
                            <div style={
                                {
                                    textAlign: imageForceAlignCenter ? 'center' : 'unset'
                                }
                            }>
                                <Image {...props}
                                    preview={imagePreview}
                                    fallback={imageFallback || defaultImageFallback}
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                            </div>
                        </ConfigProvider>
                    },
                    table: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...tableStyle
                        }
                        if (forceTableAlignCenter) {
                            props.style = {
                                ...props.style,
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }
                        }
                        if (tableClassName) {
                            props.className = `${props.className} ${tableClassName}`
                        }
                        return <table {...props} />
                    },
                    thead: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...theadStyle
                        }
                        if (theadClassName) {
                            props.className = `${props.className} ${theadClassName}`
                        }

                        return <thead {...props} />
                    },
                    tr: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...trStyle
                        }
                        if (trClassName) {
                            props.className = `${props.className} ${trClassName}`
                        }

                        return <tr {...props} />
                    },
                    th: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...thStyle
                        }
                        if (forceTableHeaderTextAlignCenter) {
                            props.style = {
                                ...props.style,
                                textAlign: 'center'
                            }
                        }
                        if (thClassName) {
                            props.className = `${props.className} ${thClassName}`
                        }

                        if (searchKeyword) {
                            return <th {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <th {...props} />
                    },
                    td: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...tdStyle
                        }
                        if (forceTableContentTextAlignCenter) {
                            props.style = {
                                ...props.style,
                                textAlign: 'center'
                            }
                        }
                        if (tdClassName) {
                            props.className = `${props.className} ${tdClassName}`
                        }

                        if (searchKeyword) {
                            return <td {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <td {...props} />
                    },
                    h1: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h1Style
                        }

                        if (titleAsId) {
                            props.id = props?.children?.join('')
                        }

                        if (h1ClassName) {
                            props.className = `${props.className} ${h1ClassName}`
                        }

                        if (searchKeyword) {
                            return <h1 {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <h1 {...props} />
                    },
                    h2: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h2Style
                        }

                        if (titleAsId) {
                            props.id = props?.children?.join('')
                        }

                        if (h2ClassName) {
                            props.className = `${props.className} ${h2ClassName}`
                        }

                        if (searchKeyword) {
                            return <h2 {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <h2 {...props} />
                    },
                    h3: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h3Style
                        }

                        if (titleAsId) {
                            props.id = props?.children?.join('')
                        }

                        if (h3ClassName) {
                            props.className = `${props.className} ${h3ClassName}`
                        }

                        if (searchKeyword) {
                            return <h3 {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <h3 {...props} />
                    },
                    h4: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h4Style
                        }

                        if (titleAsId) {
                            props.id = props?.children?.join('')
                        }

                        if (h4ClassName) {
                            props.className = `${props.className} ${h4ClassName}`
                        }

                        if (searchKeyword) {
                            return <h4 {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <h4 {...props} />
                    },
                    h5: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h5Style
                        }

                        if (titleAsId) {
                            props.id = props?.children?.join('')
                        }

                        if (h5ClassName) {
                            props.className = `${props.className} ${h5ClassName}`
                        }

                        if (searchKeyword) {
                            return <h5 {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <h5 {...props} />
                    },
                    h6: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h6Style
                        }

                        if (titleAsId) {
                            props.id = props?.children?.join('')
                        }

                        if (h6ClassName) {
                            props.className = `${props.className} ${h6ClassName}`
                        }

                        if (searchKeyword) {
                            return <h6 {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <h6 {...props} />
                    },
                    a: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...aStyle
                        }
                        if (aClassName) {
                            props.className = `${props.className} ${aClassName}`
                        }

                        if (searchKeyword) {
                            return <a {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <a {...props} />
                    },
                    blockquote: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...blockquoteStyle
                        }
                        if (blockquoteClassName) {
                            props.className = `${props.className} ${blockquoteClassName}`
                        }

                        if (searchKeyword) {
                            return <blockquote {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <blockquote {...props} />
                    },
                    hr: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...hrStyle
                        }
                        if (hrClassName) {
                            props.className = `${props.className} ${hrClassName}`
                        }

                        return <hr {...props} />
                    },
                    strong: ({ node, ...props }) => {
                        props.style = {
                            ...props.style,
                            ...strongStyle
                        }
                        if (strongClassName) {
                            props.className = `${props.className} ${strongClassName}`
                        }

                        if (searchKeyword) {
                            return <strong {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <strong {...props} />
                    },
                    p: ({ node, ...props }) => {
                        if (searchKeyword) {
                            return <p {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <p {...props} />
                    },
                    span: ({ ...props }) => {
                        if (searchKeyword) {
                            return <span {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <span {...props} />
                    },
                    li: ({ ...props }) => {
                        if (searchKeyword) {
                            return <li {...props} children={highlightChildren(props.children, searchKeyword, highlightStyle, highlightClassName)} />
                        }
                        return <li {...props} />
                    }
                }}
                transformLinkUri={(href, children, title) => {
                    if (checkExternalLink && safeRedirectUrlPrefix) {
                        // 检查是否非内部链接且前缀不在白名单中
                        if (!href.startsWith('/') && !externalLinkPrefixWhiteList.some(url => href.startsWith(url))) {
                            return `${safeRedirectUrlPrefix}${href}`
                        }
                    }

                    return href;
                }}
            >{markdownStr}</ReactMarkdown>
        </div>
    );
}

FefferyMarkdown.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 根容器css样式
     */
    style: PropTypes.object,

    /**
     * 根容器css类名
     */
    className: PropTypes.string,

    /**
     * 组件文案语种，可选项有`'zh-cn'`、`'en-us'`
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['en-us', 'zh-cn']),

    /**
     * markdown字符串
     */
    markdownStr: PropTypes.string,

    // 设置代码风格主题，默认为'gh-colors'
    /**
     * 针对文档中的代码块，设置所应用的代码主题，可选项有`'a11y-dark'`、`'atom-dark'`、`'coldark-cold'`、`'coldark-dark'`、`'coy'`、
     * `'coy-without-shadows'`、`'darcula'`、`'dracula'`、`'nord'`、`'okaidia'`、`'prism'`、`'solarizedlight'`、`'twilight'`、
     * `'duotone-sea'`、`'duotone-dark'`、`'duotone-light'`、`'duotone-space'`、`'gh-colors'`、`'gruvbox-dark'`、`'material-dark'`、
     * `'night-owl'`、`'one-light'`、`'pojoaque'`、`'solarized-dark-atom'`、`'synthwave84'`、`'z-touch'`
     * 默认值：`'gh-colors'`
     */
    codeTheme: PropTypes.oneOf([
        'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula',
        'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light',
        'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque',
        'solarized-dark-atom', 'synthwave84', 'z-touch'
    ]),

    /**
     * 是否解析渲染`markdownStr`中的html源码
     * 默认值：`false`
     */
    renderHtml: PropTypes.bool,

    /**
     * markdown中链接的跳转方式
     * 默认值：`'_blank'`
     */
    linkTarget: PropTypes.string,

    /**
     * 针对文档中的代码块，设置额外css样式
     */
    codeBlockStyle: PropTypes.object,

    /**
     * 针对文档中的代码内容，设置额外css样式
     */
    codeStyle: PropTypes.object,

    /**
     * 代码块是否显示行号
     * 默认值：`true`
     */
    showLineNumbers: PropTypes.bool,

    /**
     * 代码块是否显示右上角复制按钮
     * 默认值：`true`
     */
    showCopyButton: PropTypes.bool,

    /**
     * 针对文档中的图片，是否添加交互查看功能
     * 默认值：`false`
     */
    imagePreview: PropTypes.bool,

    /**
     * 针对文档中的图片，设置资源加载失败时的占位图资源地址
     */
    imageFallback: PropTypes.string,

    /**
     * 针对文档中的图片，是否强制居中显示
     * 默认值：`false`
     */
    imageForceAlignCenter: PropTypes.bool,

    /**
     * 为文档中的所有图片强制设置统一的宽度
     */
    imageWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 为文档中的所有图片强制设置统一的高度
     */
    imageHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 针对文档中的表格，是否强制居中显示
     * 默认值：`true`
     */
    forceTableAlignCenter: PropTypes.bool,

    /**
     * 针对文档中的表格，是否强制表头单元格内文字居中
     * 默认值：`true`
     */
    forceTableHeaderTextAlignCenter: PropTypes.bool,

    /**
     * 针对文档中的表格，是否强制普通单元格内文字居中
     * 默认值：`true`
     */
    forceTableContentTextAlignCenter: PropTypes.bool,

    /**
     * 针对文档中的一级标题内容，设置额外css样式
     */
    h1Style: PropTypes.object,

    /**
     * 针对文档中的一级标题内容，设置额外css类名
     */
    h1ClassName: PropTypes.string,

    /**
     * 针对文档中的二级标题内容，设置额外css样式
     */
    h2Style: PropTypes.object,

    /**
     * 针对文档中的二级标题内容，设置额外css类名
     */
    h2ClassName: PropTypes.string,

    /**
     * 针对文档中的三级标题内容，设置额外css样式
     */
    h3Style: PropTypes.object,

    /**
     * 针对文档中的三级标题内容，设置额外css类名
     */
    h3ClassName: PropTypes.string,

    /**
     * 针对文档中的四级标题内容，设置额外css样式
     */
    h4Style: PropTypes.object,

    /**
     * 针对文档中的四级标题内容，设置额外css类名
     */
    h4ClassName: PropTypes.string,

    /**
     * 针对文档中的五级标题内容，设置额外css样式
     */
    h5Style: PropTypes.object,

    /**
     * 针对文档中的五级标题内容，设置额外css类名
     */
    h5ClassName: PropTypes.string,

    /**
     * 针对文档中的六级标题内容，设置额外css样式
     */
    h6Style: PropTypes.object,

    /**
     * 针对文档中的六级标题内容，设置额外css类名
     */
    h6ClassName: PropTypes.string,

    /**
     * 针对文档中的表格内容，设置额外css样式
     */
    tableStyle: PropTypes.object,

    /**
     * 针对文档中的表格内容，设置额外css类名
     */
    tableClassName: PropTypes.string,

    /**
     * 针对文档中的表格表头内容，设置额外css样式
     */
    theadStyle: PropTypes.object,

    /**
     * 针对文档中的表格表头内容，设置额外css类名
     */
    theadClassName: PropTypes.string,

    /**
     * 针对文档中的表格数据行内容，设置额外css样式
     */
    trStyle: PropTypes.string,

    /**
     * 针对文档中的表格数据行内容，设置额外css类名
     */
    trClassName: PropTypes.string,

    /**
     * 针对文档中的表格表头单元格内容，设置额外css样式
     */
    thStyle: PropTypes.object,

    /**
     * 针对文档中的表格表头单元格内容，设置额外css类名
     */
    thClassName: PropTypes.string,

    /**
     * 针对文档中的表格数据单元格内容，设置额外css样式
     */
    tdStyle: PropTypes.string,

    /**
     * 针对文档中的表格数据单元格内容，设置额外css类名
     */
    tdClassName: PropTypes.string,

    /**
     * 针对文档中的链接内容，设置额外css样式
     */
    aStyle: PropTypes.object,

    /**
     * 针对文档中的链接内容，设置额外css类名
     */
    aClassName: PropTypes.string,

    /**
     * 针对文档中的引用块内容，设置额外css样式
     */
    blockquoteStyle: PropTypes.object,

    /**
     * 针对文档中的引用块内容，设置额外css类名
     */
    blockquoteClassName: PropTypes.string,

    /**
     * 针对文档中的行内代码内容，设置额外css样式
     */
    inlineCodeStyle: PropTypes.object,

    /**
     * 针对文档中的行内代码内容，设置额外css类名
     */
    inlineCodeClassName: PropTypes.string,

    /**
     * 针对文档中的水平分割线内容，设置额外css样式
     */
    hrStyle: PropTypes.object,

    /**
     * 针对文档中的水平分割线内容，设置额外css类名
     */
    hrClassName: PropTypes.string,

    /**
     * 针对文档中的加粗内容，设置额外css样式
     */
    strongStyle: PropTypes.object,

    /**
     * 针对文档中的加粗内容，设置额外css类名
     */
    strongClassName: PropTypes.string,

    /**
     * 是否针对文档内容中的外部链接进行安全检查，需配合有效的`safeRedirectUrlPrefix`
     * 默认值：`false`
     */
    checkExternalLink: PropTypes.bool,

    /**
     * 当开启外部链接安全检查时，用于设置一系列白名单链接前缀，以这些白名单链接前缀开头的链接将忽略安全检查
     */
    externalLinkPrefixWhiteList: PropTypes.arrayOf(PropTypes.string),

    /**
     * 当开启外部链接安全检查时，用于定义链接点击跳转到的中转接口url前缀，譬如：
     * 针对外部链接`https://www.baidu.com/`，设置`safeRedirectUrlPrefix='/safe-redirect?target='`后，用户点击此外部链接，将跳转至
     * `/safe-redirect?target=https://www.baidu.com/`
     */
    safeRedirectUrlPrefix: PropTypes.string,

    /**
     * 手动覆盖文档容器的css类名，通常在需要完全自定义文档样式时使用
     * 默认值：`'markdown-body'`
     */
    markdownBaseClassName: PropTypes.string,

    /**
     * 针对文档渲染结果中的各标题元素，是否将标题内容作为对应元素的id，以便于配合`AntdAnchor`等组件生成目录
     * 默认值：`false`
     */
    titleAsId: PropTypes.bool,

    /**
     * 监听基于文档标题内容自动推导计算出的目录结构，可直接配合`fac`组件库中的`AntdAnchor`组件使用
     */
    facAnchorLinkDict: PropTypes.any,

    /**
     * 针对超长行内容是否允许自动换行
     * 默认值：`true`
     */
    wrapLongLines: PropTypes.bool,

    /**
     * 当文档中存在源语言描述缺失的代码块时，设置缺省回滚的编程语言类型
     */
    codeFallBackLanguage: PropTypes.string,

    /**
     * 搜索关键词
     */
    searchKeyword: PropTypes.string,

    /**
     * `searchKeyword`对应搜索结果额外css样式
     */
    highlightStyle: PropTypes.object,

    /**
     * `searchKeyword`对应搜索结果额外css类名
     */
    highlightClassName: PropTypes.string,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
FefferyMarkdown.defaultProps = {
    linkTarget: '_blank',
    codeTheme: 'gh-colors',
    showLineNumbers: true,
    locale: 'zh-cn',
    showCopyButton: true,
    imagePreview: false,
    imageForceAlignCenter: false,
    forceTableAlignCenter: false,
    forceTableHeaderTextAlignCenter: true,
    forceTableContentTextAlignCenter: true,
    checkExternalLink: false,
    externalLinkPrefixWhiteList: [],
    markdownBaseClassName: 'markdown-body',
    titleAsId: false,
    wrapLongLines: false
}

export default FefferyMarkdown;