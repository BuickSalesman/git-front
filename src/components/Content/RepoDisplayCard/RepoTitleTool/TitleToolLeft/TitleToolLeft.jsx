import "./TitleToolLeft.css"

import { DeleteRepoButton } from "./DeleteRepoButton/DeleteRepoButton.jsx"
import { UndoCommitButton } from "./UndoCommitButton/UndoCommitButton.jsx"
import { HeatmapDropdownButton } from "./HeatmapDropdownButton/HeatmapDropdownButton.jsx"

export function TitleToolLeft() {
    return (
        <div className="title-tool-left">
            <DeleteRepoButton />
            <UndoCommitButton />
            <div className="swipe-indicator">...</div>
            <HeatmapDropdownButton />
        </div>
    )
}
