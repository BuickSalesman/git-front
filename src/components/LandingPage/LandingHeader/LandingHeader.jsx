import "./LandingHeader.css"

export function LandingHeader() {
    return (
        <div className="header">
            <nav>
                <div id="title-container">
                    <span>Git It Together</span>
                </div>
                <div id="login-container">
                    <a href="">Sign Up</a>
                    <div>|</div>
                    <a href="">Login</a>
                </div>
            </nav>
        </div>
    )
}
