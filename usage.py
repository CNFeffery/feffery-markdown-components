import feffery_markdown_components as fmc
import dash
from dash import html

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fmc.FefferyMarkdown(
            renderHtml=True,
            # showCopyButton=False,
            imagePreview=True,
            # imageForceAlignCenter=True,
            # imageWidth='50%',
            forceTableAlignCenter=True,
            forceTableHeaderTextAlignCenter=True,
            forceTableContentTextAlignCenter=True,
            codeBlockStyle={
                'maxHeight': 200,
                'border': 'none'
            },
            codeStyle={
                'fontSize': '15px'
            },
            markdownStr=r'''

> 测试<br>
> 测试<br>

当你需要序列化的对象中涉及到`dataclass`自定义数据结构时，可以配合`orjson.OPT_PASSTHROUGH_DATACLASS`，再通过对`default`参数传入自定义处理函数，来实现更为自由的数据转换逻辑，譬如下面简单的例子中，我们可以利用此特性进行原始数据的脱敏操作：


| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ `remark-gfm` |


- 基于markdown语法渲染图片

![image](http://fmc.feffery.tech/assets/imgs/fmc-lgo.svg)

<p align="center"><img src="http://fmc.feffery.tech/assets/imgs/fmc-logo.svg" /></ p>

---

<details><summary>Open example</summary>

这是折叠内容测试巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉

</details>

这是行内数学公式测试$c = \pm\sqrt{a^2 + b^2}$

块公式测试：

$$

x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}

\\

\begin{bmatrix}
1&2&\cdots&4\\\
7&6&\cdots&5\\\
\vdots&\vdots&\ddots&\vdots\\\
8&9&\cdots&0
\end{bmatrix}

$$

## 代码示例

```py
html.Div(
    [
        fac.AntdBackTop(
            containerId='back-top-container-demo',
            duration=1
        ),
        fac.AntdTitle(
            '向下滑动一段距离',
            level=4
        )
    ] + [
        html.Div(
            [
                i if i % 2 == 0 else html.Br() for i in range(200)
            ]
        )
    ],
    id='back-top-container-demo',
    style={
        'maxHeight': '500px',
        'overflowY': 'auto',
        'position': 'relative',
        'backgroundColor': 'rgba(240, 240, 240, 0.2)',
        'padding': '20px'
    }
)
```

## 1 最新版本安装方式

```bash
pip install feffery-antd-components==0.0.1rc6
```

## 2 最新开发版本安装方式

```bash
pip install git+https://github.com/CNFeffery/feffery-antd-components.git
```

国内镜像加速安装方式：

```bash
pip install git+https://hub.fastgit.org/CNFeffery/feffery-antd-components.git
```

或：

```bash
pip install git+https://github.com.cnpmjs.org/CNFeffery/feffery-antd-components.git
```

## 3 应用部署CDN加速使用方式

```Python
# 实例化Dash对象时，设置参数serve_locally=False会强制浏览器端从unpkg加载各个依赖的
# xxx.min.js静态资源，从而避免消耗服务器带宽，适合中小型站点加速用户访问
app = dash.Dash(serve_locally=False)
```

## 4 已实现部件目录

- [x] 日期选择框：`AntdDatePicker`
- [x] 日期范围选择框：`AntdDateRangePicker`
- [x] 分割线：`AntdDivider`
- [x] 按钮：`AntdButton`
- [x] 下拉选择：`AntdSelect`
- [x] 树形控件：`AntdTree`
- [x] 表格控件：`AntdTable`
- [x] 锚点：`AntdAnchor`
- [x] 穿梭框：`AntdTransfer`
- [x] 滑杆输入：`AntdSlider`
- [x] 步骤条：`AntdSteps`
- [x] 导航菜单：`AntdMenu`
- [x] 折叠面板：`AntdCollapse`
- [x] 栅格系统
  - `AntdRow`
  - `AntdCol`
- [x] 布局
  - `AntdLayout`
  - `AntdHeader`
  - `AntdContent`
  - `AntdFooter`
  - `AntdSider`
- [x] 对话框：`AntdModal`
- [x] 警告提示：`AntdAlert`
- [x] 通知提醒框：`AntdNotification`
- [x] 全局提示：`AntdMessage`
- [x] 标签：`AntdTag`
- [x] 结果：`AntdResult`
- [x] 输入框：`AntdInput`
- [x] 文字提示：`AntdTooltip`
- [x] 选择框：`AntdCheckbox`
- [x] 组合选择框：`AntdCheckboxGroup`
- [x] 加载动画：`AntdSpin`
- [x] 开关：`AntdSwitch`
- [x] 排版
  - `AntdTypography`
  - `AntdParagraph`
  - `AntdTitle`
  - `AntdText`
  - `AntdLink`
- [x] 标签页
  - `AntdTabs`
  - `AntdTabPane`
- [x] 分页：`AntdPagination`
- [x] 骨架屏：`AntdSkeleton`
- [x] 树选择：`AntdTreeSelect`
- [x] 抽屉：`AntdDrawer`
- [x] 气泡卡片：`AntdPopover`
- [x] 空状态：`AntdEmpty`
- [x] 级联选择：`AntdCascader`
- [x] 单选框：`AntdRadio`
- [x] 上传：`AntdUpload`
- [x] 气泡确认框：`AntdPopconfirm`
- [x] 回到顶部：`AntdBackTop`

## 5 在线交互式说明文档

<a href='http://fac.feffery.tech/' target='_blank'>文档地址</a>（待同步至最新pypi版本）

## 6 TODO计划

- [ ] 表单：`AntdForm`
- [ ] 卡片：`AntdCard`
- [ ] 头像：`AntdAvatar`
- [ ] 徽标数：`AntdBadge`
- [ ] 描述列表：`AntdDescriptions`
- [ ] 评分：`AntdRate`
- [ ] 日历：`AntdCalendar`
- [ ] 走马灯：`AntdCarousel`
- [ ] 评论：`AntdComment`
- [ ] 统计数值：`AntdStatistic`
- [ ] 时间轴：`AntdTimeline`
- [ ] 进度条：`AntdProgress`
- [ ] 回到顶部：`AntdBackTop`
- [ ] 图片：`AntdImage`
'''
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto',
        'background': 'white',
        'boxShadow': '0px 0px 12px rgba(0, 0, 0, .12)',
        'padding': '25px'
    }
)


if __name__ == '__main__':
    app.run_server(debug=True)
