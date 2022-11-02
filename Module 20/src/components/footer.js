import React from "react";

function Footer() {
    return (
        <footer className="container">
            <div className="socials">
                <h3>Contact</h3>             
                <a href="https://github.com/Tiffany-Obrien" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>

                <a href="mailto: tiffanyobrienmsu@gmail.com">
                    <i className="bi bi-envelope-fill" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>
               
                <p>tiffanyobrienmsu@gmail.com</p>
            </div>

            
        </footer>
    )
}

export default Footer;