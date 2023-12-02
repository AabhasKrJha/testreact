import { Link, Outlet } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex">
            <Link to="/blog">Blogs</Link> 
            <Link to="/documentary">Documentaries</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/participate">Participate</Link>
            <Link to="/forum">Forum</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

function HeroSection() {
    return (
        <div className="hero flex-col">
            <span className="flex-col bold">
            <center>
                Life of a Mavrick
                <span className="since flex-col">Since Nov 19, 2017</span> 
            </center>
            </span>
            <center className="arrow bold">&#8595;</center>
        </div>
    )
}

export default function Header() {
    return(
        <>
            <Outlet/>
            <main>
                <header className="flex">
                <Link to="/" className="logo bold">LoaM</Link>
                <Navbar/>
                </header>
                <HeroSection/>
            </main>
        </>
    )
}