import "./TitleToolLeft.css"

import { DeleteRepoButton } from "./DeleteRepoButton/DeleteRepoButton.jsx"
import { UndoCommitButton } from "./UndoCommitButton/UndoCommitButton.jsx"
import { HeatmapDropdownButton } from "./HeatmapDropdownButton/HeatmapDropdownButton.jsx"

import { useState } from "react"

export function TitleToolLeft() {

    const [isSwiped, setIsSwiped] = useState(false)

    return (
        <div className={`left-track ${isSwiped ? "show-swiped" : "show-closed"}`}>
            <DeleteRepoButton />
            <UndoCommitButton />
            <button className="left-swipe-button" onClick={() => setIsSwiped(true)}>
                ⋮
            </button>
            <HeatmapDropdownButton />
        </ div >
    )
}
