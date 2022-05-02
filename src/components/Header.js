import React, { useState, useEffect } from "react";
//import menuLinksData from "./data/menu_links.json";

const Header = () => {
    const [menuLinksData, setMenuLinksData] = useState([]);

    const loadMenuLinksData = async () => {
        // Query API Gateway
        const response = await fetch("https://kee1b9u4r0.execute-api.us-east-1.amazonaws.com/Production/menus");
        let json = await response.json();

        // Assign response data to our state variable
        setMenuLinksData(json.Items);
    };

    useEffect(() => {
       // Load menu links from the API Gateway
        loadMenuLinksData();
    }, [menuLinksData.href]);

    return (
        <header id="intro">
            <article className="fullheight">
                <div className="hgroup">
                    <h1>Landon Hotel</h1>
                    <h2>West London</h2>
                    <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
                </div>
            </article>

            <nav id="nav">
                <div className="navbar">
                    <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                    <ul>
                        {
                            menuLinksData.map((link, index) =>
                                <li key={`menu-${index}`}><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;