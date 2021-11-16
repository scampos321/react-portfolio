import React from "react";
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Sebastian Campos</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "React", "Database"]}
                />
            </div>
        </div>
    )
}

export default Header
