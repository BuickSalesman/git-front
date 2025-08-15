import "./TitleToolLeft.css"

import { DeleteRepoButton } from "./DeleteRepoButton/DeleteRepoButton.jsx"
import { UndoCommitButton } from "./UndoCommitButton/UndoCommitButton.jsx"
import { HeatmapDropdownButton } from "./HeatmapDropdownButton/HeatmapDropdownButton.jsx"

import { useState } from "react"

export function TitleToolLeft() {

    const [isSwiped, setIsSwiped] = useState(false)

    return (
        <div className="title-tool-left">
            <div className={`left-track ${isSwiped ? "show-swiped" : "show-closed"}`}>
                <div className="hidden-buttons-left">
                    <DeleteRepoButton />
                    <UndoCommitButton />
                </div>
                <button className="left-swipe-button" onClick={() => setIsSwiped(prev => !prev)}>
                    ⋮
                </button>
                <HeatmapDropdownButton />
            </ div >
        </div>
    )
}
