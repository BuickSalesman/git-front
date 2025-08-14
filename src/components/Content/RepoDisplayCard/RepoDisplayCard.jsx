import "./RepoDisplayCard.css"

import { RepoTitleTool } from "./RepoTitleTool/RepoTitleTool.jsx"
import { RepoDropdownDisplay } from "./RepoDropdownDisplay/RepoDropdownDisplay.jsx"

export function RepoDisplayCard({ id }) {
    return (
        <div className="repo-card">
            <RepoTitleTool id={id} />
            <RepoDropdownDisplay />
        </div>
    )
}
