import "./LandingForm.css"

export function LandingForm() {

    const handleSubmit = () => { return }

    return (
        <div className="landing-form-container">
            <div>errors go here</div>
            <form className="landing-form" onSubmit={handleSubmit}>
                <div>username</div>
                <input type="text" />
                <div>password</div>
                <input type="text" />
                <div>confirmation</div>
                <input type="text" />
            </form>
            <button type="submit">sign up</button>
            <button type="submit">log in</button>
        </div>
    )
}
