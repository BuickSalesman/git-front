import "./RepoDropdownDisplay.css"

import { Heatmap } from "../Heatmap/Heatmap.jsx"

export function RepoDropdownDisplay() {
    return (
        <div className="repo-dropdown-wrapper">
            <div className="repo-dropdown-display">
                <div className="heatmap-container">
                    <Heatmap />
                </div>
            </div>
        </div>
    )
}
