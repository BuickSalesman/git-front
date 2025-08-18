import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Content } from './components/Content/Content.jsx'

import { LandingPage } from "./components/LandingPage/LandingPage.jsx"

import './App.css'

function App() {

    let isAuth = false

    if (!isAuth) {
        return (
            <div>
                <LandingPage />
            </div>
        )
    }

    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default App
