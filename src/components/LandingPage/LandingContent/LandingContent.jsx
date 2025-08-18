import { Heatmap } from "../../Content/RepoDisplayCard/Heatmap/Heatmap.jsx"
import "../../Content/RepoDisplayCard/Heatmap/Heatmap.css"
import "./LandingContent.css"
import { LandingForm } from "./LandingForm/LandingForm.jsx"

export function LandingContent() {
    return (
        <div id="landing-page-content">
            <div id="landing-graph">
                <div>this is a little placeholder</div>
                <Heatmap />
            </div>
            <div id="landing-form-container">
                <LandingForm />
            </div>
        </div>
    )
}
