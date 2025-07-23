
module FefferyMarkdownComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.4.0"

include("jl/''_fefferymarkdown.jl")
include("jl/''_fefferysyntaxhighlighter.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "feffery_markdown_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "feffery_markdown_components.min.js",
    external_url = "https://unpkg.com/feffery_markdown_components@0.4.0/feffery_markdown_components/feffery_markdown_components.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "feffery_markdown_components.min.js.map",
    external_url = "https://unpkg.com/feffery_markdown_components@0.4.0/feffery_markdown_components/feffery_markdown_components.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
