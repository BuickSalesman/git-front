import { LandingHeader } from "./LandingHeader/LandingHeader.jsx"
import { LandingContent } from "./LandingContent/LandingContent.jsx"

import "./LandingPage.css"

export function LandingPage() {

    return (
        <div id="landing-page">
            <LandingHeader />
            <LandingContent />
        </div>
    )
}
