import "./TitleToolRight.css"

import { QuickCommitButton } from "./QuickCommitButton/QuickCommitButton.jsx"
import { MultiCommitTool } from "./MultiCommitTool/MultiCommitTool.jsx"

import { useState } from "react"

export function TitleToolRight() {

    const [isSwiped, setIsSwiped] = useState(false)

    return (
        <div className="title-tool-right">
            <div className={`right-track ${isSwiped ? "show-swiped" : "show-closed"}`}>
                <div className="right-grid-1">
                    <QuickCommitButton />
                    <button className="right-swipe-button" onClick={() => setIsSwiped(prev => !prev)}>
                        ⋮
                    </button>
                </div>
                <div className="right-grid-2">
                    <div className="hidden-tool-right">
                        <MultiCommitTool />
                    </div>
                </div>
            </div>
        </div>
    )
}
