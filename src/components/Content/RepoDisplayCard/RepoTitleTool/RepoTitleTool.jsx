import "./RepoTitleTool.css"

import { DeleteRepoButton } from "./DeleteRepoButton/DeleteRepoButton.jsx"
import { UndoCommitButton } from "./UndoCommitButton/UndoCommitButton.jsx"
import { Heatmap } from "../Heatmap/Heatmap.jsx"
import { QuickCommitButton } from "./QuickCommitButton/QuickCommitButton.jsx"
import { MultiCommitTool } from "./MultiCommitTool/MultiCommitTool.jsx"

function handleHeatmapDropdown(e) {
    const parentCard = e.currentTarget.closest(".repo-card")

    if (parentCard.classList.contains("open-card")) {
        parentCard.classList.remove("open-card")
        return
    }

    parentCard.classList.add("open-card")
}

export function RepoTitleTool({ id }) {
    return (
        <div className="title-tool">
            <div className="hidden-buttons-left">
                <DeleteRepoButton />
                <UndoCommitButton />
            </div>
            <div className="title-tool-left">
                <div className="swipe-indicator">...</div>
                <button
                    className="heatmap-dropdown-button"
                    onClick={(e) => handleHeatmapDropdown(e)}
                >
                    <Heatmap />
                </button>
            </div>
            <div className="title-tool-center">
                <div className="repo-name">Repo Name: {id}</div>
            </div>
            <div className="title-tool-right">
                <QuickCommitButton />
                <div className="swipe-indicator">...</div>
            </div>
            <MultiCommitTool />
        </div>
    )
}

