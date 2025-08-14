import "./Content.css"

import { RepoDisplayCard } from "./RepoDisplayCard/RepoDisplayCard.jsx"

export function Content() {
    return (
        <div className="content">
            <RepoDisplayCard id="0" />
            <RepoDisplayCard id="1" />
            <RepoDisplayCard id="2" />
            <RepoDisplayCard id="3" />
            <RepoDisplayCard id="4" />
            <RepoDisplayCard id="5" />
            <RepoDisplayCard id="6" />
            <RepoDisplayCard id="7" />
            <RepoDisplayCard id="8" />
            <RepoDisplayCard id="9" />
        </div>
    )
}
