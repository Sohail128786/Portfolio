import React from "react";
// import logo form "."
export default function Footer() {
    return (
        <>
            <div className="footer">

                <div className="footer-title">
                    <span>
                    <img src="" alt="logo"/>
                    </span>
                 
                    <ul className="Footbar">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/coverletter">Certificate</a>
                        </li>
                        <li>
                            <a href="/contectme">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="made">
                <p>Made By<i className="fa heart">&#xf004;</i>Sohail Khan</p>
            </div>
        </>
    );
}