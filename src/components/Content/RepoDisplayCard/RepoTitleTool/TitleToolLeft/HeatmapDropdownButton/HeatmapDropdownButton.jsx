import "./HeatmapDropdownButton.css"

import { Heatmap } from "../../../Heatmap/Heatmap.jsx"

function handleHeatmapDropdown(e) {
    const parentCard = e.currentTarget.closest(".repo-card")

    if (parentCard.classList.contains("open-card")) {
        parentCard.classList.remove("open-card")
        return
    }

    parentCard.classList.add("open-card")
}

export function HeatmapDropdownButton() {
    return (
        <button
            className="heatmap-dropdown-button"
            onClick={(e) => handleHeatmapDropdown(e)}
        >
            <Heatmap />
        </button>
    )
}
