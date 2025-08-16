import "./RepoTitleTool.css"

import { TitleToolLeft } from "./TitleToolLeft/TitleToolLeft.jsx"
import { TitleToolRight } from "./TitleToolRight/TitleToolRight.jsx"
import { TitleToolSVG } from "./TitleToolSVG/TitleToolSVG.jsx"


export function RepoTitleTool({ id }) {
    return (
        <div className="title-tool">
            <TitleToolSVG />
            <TitleToolLeft />
            <div className="title-tool-center">
                <div className="repo-name">Repo Name: {id}</div>
            </div>
            <TitleToolRight />
        </div>
    )
}

