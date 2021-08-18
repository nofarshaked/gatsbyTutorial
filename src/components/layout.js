import * as React from "react";
import { Link } from "gatsby";
import { container, heading, navLinks, navLinksItem, navLinksText } from './layout.module.css'
console.log('container: ', container)

const Layout = ({ pageTitle, pageHead, children }) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinksItem}><Link to="/" className={navLinksText}>Home</Link></li>
                    <li className={navLinksItem}><Link to="/about" className={navLinksText}>About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageHead}</h1>
            {children}
        </main>
    )
}

export default Layout;
