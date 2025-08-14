import "./RepoTitleTool.css"

import { DeleteRepoButton } from "./DeleteRepoButton/DeleteRepoButton.jsx"
import { UndoCommitButton } from "./UndoCommitButton/UndoCommitButton.jsx"
import { Heatmap } from "../Heatmap/Heatmap.jsx"
import { QuickCommitButton } from "./QuickCommitButton/QuickCommitButton.jsx"
import { MultiCommitTool } from "./MultiCommitTool/MultiCommitTool.jsx"

export function RepoTitleTool() {
    return (
        <div className="title-tool">
            <div className="hidden-buttons-left">
                <DeleteRepoButton />
                <UndoCommitButton />
            </div>
            <div className="title-tool-left">
                <div className="swipe-indicator">...</div>
                <button className="heatmap-dropdown-button">
                    <Heatmap />
                </button>
            </div>
            <div className="title-tool-center">
                <div className="repo-name">Repo Name</div>
            </div>
            <div className="title-tool-right">
                <QuickCommitButton />
                <div className="swipe-indicator">...</div>
            </div>
            <MultiCommitTool />
        </div>
    )
}

