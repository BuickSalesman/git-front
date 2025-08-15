import "./TitleToolRight.css"

import { QuickCommitButton } from "./QuickCommitButton/QuickCommitButton.jsx"
import { MultiCommitTool } from "./MultiCommitTool/MultiCommitTool.jsx"

export function TitleToolRight() {
    return (
        <div className="title-tool-right">
            <QuickCommitButton />
            <div className="swipe-indicator">⋮</div>
            <MultiCommitTool />
        </div>
    )
}
