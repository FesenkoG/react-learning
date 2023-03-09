import React from "react"
import ReactDOM from "react-dom"

function MainContent() {
    return (
        <div>
            <h1>I am a bold h1 text</h1>
            <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>c All rights reserved lool</small>
        </footer>
    )
}

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./React-icon.png" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    ) 
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))