import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from "react-copy-to-clipboard";
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import CopyOutlined from '@ant-design/icons/CopyOutlined';
import { Image, ConfigProvider } from 'antd';
import 'antd/es/image/style/css';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import { trim, cloneDeep } from 'lodash';
import { omitDeep } from 'deepdash-es/standalone';
import { flatToTree } from './utils';
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

import 'katex/dist/katex.min.css';
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

async function parseMarkdownHeadings(e) {
    const rawHTML = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(e)

    return rawHTML
}

// 定义markdown渲染组件FefferyMarkdown，api参数参考https://github.com/remarkjs/react-markdown
const FefferyMarkdown = (props) => {
    // 取得必要属性或参数
    let {
        id,
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
        setProps
    } = props;

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

    useEffect(async () => {
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
    }, [markdownStr])

    return (
        <div id={id}
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

                        if (!inline && match) {
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
                                        language={match[1]}
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
                                    {children}
                                </code>
                            );
                        }
                    },
                    img: ({ ...props }) => {
                        return <ConfigProvider locale={str2locale.get(locale)}>
                            <div style={
                                {
                                    textAlign: imageForceAlignCenter ? 'center' : 'unset'
                                }
                            }>
                                <Image {...props}
                                    preview={imagePreview}
                                    fallback={imageFallback}
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                            </div>
                        </ConfigProvider>
                    },
                    table: ({ ...props }) => {
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
                    thead: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...theadStyle
                        }
                        if (theadClassName) {
                            props.className = `${props.className} ${theadClassName}`
                        }

                        return <thead {...props} />
                    },
                    tr: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...trStyle
                        }
                        if (trClassName) {
                            props.className = `${props.className} ${trClassName}`
                        }

                        return <tr {...props} />
                    },
                    th: ({ ...props }) => {
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
                        return <th {...props} />
                    },
                    td: ({ ...props }) => {
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
                        return <td {...props} />
                    },
                    h1: ({ ...props }) => {

                        props.style = {
                            ...props.style,
                            ...h1Style
                        }

                        if (titleAsId) {
                            props.id = props.children.join('')
                        }

                        if (h1ClassName) {
                            props.className = `${props.className} ${h1ClassName}`
                        }

                        return <h1 {...props} />
                    },
                    h2: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h2Style
                        }

                        if (titleAsId) {
                            props.id = props.children.join('')
                        }

                        if (h2ClassName) {
                            props.className = `${props.className} ${h2ClassName}`
                        }

                        return <h2 {...props} />
                    },
                    h3: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h3Style
                        }

                        if (titleAsId) {
                            props.id = props.children.join('')
                        }

                        if (h3ClassName) {
                            props.className = `${props.className} ${h3ClassName}`
                        }

                        return <h3 {...props} />
                    },
                    h4: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h4Style
                        }

                        if (titleAsId) {
                            props.id = props.children.join('')
                        }

                        if (h4ClassName) {
                            props.className = `${props.className} ${h4ClassName}`
                        }

                        return <h4 {...props} />
                    },
                    h5: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h5Style
                        }

                        if (titleAsId) {
                            props.id = props.children.join('')
                        }

                        if (h5ClassName) {
                            props.className = `${props.className} ${h5ClassName}`
                        }

                        return <h5 {...props} />
                    },
                    h6: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...h6Style
                        }

                        if (titleAsId) {
                            props.id = props.children.join('')
                        }

                        if (h6ClassName) {
                            props.className = `${props.className} ${h6ClassName}`
                        }

                        return <h6 {...props} />
                    },
                    a: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...aStyle
                        }
                        if (aClassName) {
                            props.className = `${props.className} ${aClassName}`
                        }

                        return <a {...props} />
                    },
                    blockquote: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...blockquoteStyle
                        }
                        if (blockquoteClassName) {
                            props.className = `${props.className} ${blockquoteClassName}`
                        }

                        return <blockquote {...props} />
                    },
                    hr: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...hrStyle
                        }
                        if (hrClassName) {
                            props.className = `${props.className} ${hrClassName}`
                        }

                        return <hr {...props} />
                    },
                    strong: ({ ...props }) => {
                        props.style = {
                            ...props.style,
                            ...strongStyle
                        }
                        if (strongClassName) {
                            props.className = `${props.className} ${strongClassName}`
                        }

                        return <strong {...props} />
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
            >
                {markdownStr}
            </ReactMarkdown>
        </div>
    );
}

// 定义参数或属性
FefferyMarkdown.propTypes = {
    // id
    id: PropTypes.string,

    // 父容器css样式
    style: PropTypes.object,

    // 父容器css类名
    className: PropTypes.string,

    // 配置相关文案国际化，可选的有'en-us'、'zh-cn'，默认为'zh-cn'
    locale: PropTypes.oneOf(['en-us', 'zh-cn']),

    // 设置要渲染的原始markdown内容
    markdownStr: PropTypes.string,

    // 设置代码风格主题，默认为'gh-colors'
    codeTheme: PropTypes.oneOf([
        'a11y-dark', 'atom-dark', 'coldark-cold', 'coldark-dark', 'coy', 'coy-without-shadows', 'darcula', 'dracula',
        'nord', 'okaidia', 'prism', 'solarizedlight', 'twilight', 'duotone-sea', 'duotone-dark', 'duotone-light',
        'duotone-space', 'gh-colors', 'gruvbox-dark', 'material-dark', 'night-owl', 'one-light', 'pojoaque',
        'solarized-dark-atom', 'synthwave84', 'z-touch'
    ]),

    // 设置是否渲染markdown中的html源码，默认为false
    renderHtml: PropTypes.bool,

    // 设置markdown中链接的跳转方式，默认为'_blank'
    linkTarget: PropTypes.string,

    // 额外设置代码块容器css样式
    codeBlockStyle: PropTypes.object,

    // 额外设置代码内容css样式
    codeStyle: PropTypes.object,

    // 设置代码块是否显示行号，默认为true
    showLineNumbers: PropTypes.bool,

    // 设置代码块是否显示右上角复制按钮，默认为true
    showCopyButton: PropTypes.bool,

    // 设置图片是否添加交互查看功能，默认为false
    imagePreview: PropTypes.bool,

    // 设置图片加载失败后回滚显示的占位图片地址，默认为fmc内置占位图
    imageFallback: PropTypes.string,

    // 设置是否强制居中所有图片内容，默认为false
    imageForceAlignCenter: PropTypes.bool,

    // 为所有图片内容强制设置统一的宽度
    imageWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 为所有图片内容强制设置统一的高度
    imageHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 设置是否强制所有表格居中，默认为true
    forceTableAlignCenter: PropTypes.bool,

    // 设置是否强制所有表格标题单元格文字居中，默认为true
    forceTableHeaderTextAlignCenter: PropTypes.bool,

    // 设置是否强制所有表格内容单元格文字居中，默认为true
    forceTableContentTextAlignCenter: PropTypes.bool,

    // 用于设置各个元素角色的css样式及类名
    // 一级标题css样式
    h1Style: PropTypes.object,

    // 一级标题css类名
    h1ClassName: PropTypes.string,

    // 二级标题css样式
    h2Style: PropTypes.object,

    // 二级标题css类名
    h2ClassName: PropTypes.string,

    // 三级标题css样式
    h3Style: PropTypes.object,

    // 三级标题css类名
    h3ClassName: PropTypes.string,

    // 四级标题css样式
    h4Style: PropTypes.object,

    // 四级标题css类名
    h4ClassName: PropTypes.string,

    // 五级标题css样式
    h5Style: PropTypes.object,

    // 五级标题css类名
    h5ClassName: PropTypes.string,

    // 六级标题css样式
    h6Style: PropTypes.object,

    // 六级标题css类名
    h6ClassName: PropTypes.string,

    // 表格css样式
    tableStyle: PropTypes.object,

    // 表格css类名
    tableClassName: PropTypes.string,

    // 表头css样式
    theadStyle: PropTypes.object,

    // 表头css类名
    theadClassName: PropTypes.string,

    // 数据行css样式
    trStyle: PropTypes.string,

    // 数据行css类名
    trClassName: PropTypes.string,

    // 表头单元格css样式
    thStyle: PropTypes.object,

    // 表头单元格css类名
    thClassName: PropTypes.string,

    // 数据单元格css样式
    tdStyle: PropTypes.string,

    // 数据单元格css类名
    tdClassName: PropTypes.string,

    // 链接css样式
    aStyle: PropTypes.object,

    // 链接css类名
    aClassName: PropTypes.string,

    // 引用块css样式
    blockquoteStyle: PropTypes.object,

    // 引用块css类名
    blockquoteClassName: PropTypes.string,

    // 行内代码css样式
    inlineCodeStyle: PropTypes.object,

    // 行内代码css类名
    inlineCodeClassName: PropTypes.string,

    // 水平分割线css样式
    hrStyle: PropTypes.object,

    // 水平分割线css类名
    hrClassName: PropTypes.string,

    // 加粗内容css样式
    strongStyle: PropTypes.object,

    // 加粗内容css类名
    strongClassName: PropTypes.string,

    // 设置是否对markdown内容中的外部链接进行检查，默认为false
    // 当checkExternalLink=true且safeRedirectUrlPrefix有定义时才会开启链接安全跳转功能
    checkExternalLink: PropTypes.bool,

    // 用于在外部链接检查的基础上进行白名单补充，当markdown内容中的非内部链接以
    // 此白名单中的某一个为前缀时，亦允许直接跳转
    externalLinkPrefixWhiteList: PropTypes.arrayOf(PropTypes.string),

    // 设置针对非内部链接且非白名单外部链接进行跳转时，应当进行中转安全跳转的接口url前缀
    // 譬如针对外部链接https://www.baidu.com/，使用自行开发的中转跳转接口/safe-redirect?target=https://www.baidu.com/
    // 那么此处的中转安全跳转接口url前缀即为"/safe-redirect?target="
    safeRedirectUrlPrefix: PropTypes.string,

    // 手动设置markdown内容容器的css类名，通常用于完全自主定义markdown样式时使用
    // 默认为'markdown-body'
    markdownBaseClassName: PropTypes.string,

    // 设置是否针对标题生成网页元素时，将标题内容作为对应元素的id
    // 从而便于配合AntdAnchor等组件生成目录，默认为false
    titleAsId: PropTypes.bool,

    // 通过markdownStr标题内容自动推导出的适用于fac.AntdAnchor的linkDict结构
    facAnchorLinkDict: PropTypes.any,

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
    imageFallback: 'data:image/png;base64,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'
}

export default FefferyMarkdown;