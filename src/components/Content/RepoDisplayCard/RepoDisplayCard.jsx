import "./RepoDisplayCard.css"

import { RepoTitleTool } from "./RepoTitleTool/RepoTitleTool.jsx"
import { RepoDropdownDisplay } from "./RepoDropdownDisplay/RepoDropdownDisplay.jsx"

export function RepoDisplayCard() {
    return (
        <div className="repo-card">
            <RepoTitleTool />
            <RepoDropdownDisplay />
        </div>
    )
}
