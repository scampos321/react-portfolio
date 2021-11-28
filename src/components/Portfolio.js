import React from 'react'
import planner from '../images/workday.PNG'
import lostChef from '../images/lost-chef.png'
import noteTaker from '../images/note-taker.png'
import passwordGen from '../images/passwordgen-image.png'
import {PopupboxManager, PopupboxContainer} from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {
    const openPopupboxPlanner = () => {

    const content = (
        <>
        <img className="portfolio-image-popupbox" src={planner} alt="Planner"/>
            <p></p>
            <b>Deployed: </b> <a className="hyper-link" onClick={() => window.open("https://scampos321.github.io/day-planner/")}>https://scampos321.github.io/day-planner/</a>
        </>
    )
        PopupboxManager.open({ content })
    }
    const popupboxConfigPlanner = {
        titleBar: {
            enable: true,
            text: "Day Planner Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxChef = () => {
        
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={lostChef} alt="Lost Chef"/>
                <p></p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jeffcela/The_Lost_Chef")}>https://github.com/jeffcela/The_Lost_Chef</a>
            </>
        )
            PopupboxManager.open({ content })
        }
        const popupboxConfigChef = {
            titleBar: {
                enable: true,
                text: "Lost Chef App"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }

        const openPopupboxNote = () => {
        
            const content = (
                <>
                <img className="portfolio-image-popupbox" src={noteTaker} alt="Note Taker"/>
                    <p></p>
                    <b>Deployed: </b><a className="hyper-link" onClick={() => window.open("https://stark-brook-30614.herokuapp.com/")}>https://stark-brook-30614.herokuapp.com/</a>
                    <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/scampos321/note-taker")}>https://github.com/scampos321/note-taker</a>
                </>
            )
                PopupboxManager.open({ content })
            }
            const popupboxConfigNote = {
                titleBar: {
                    enable: true,
                    text: "Note Taker App"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }

            
        const openPopupboxPass = () => {
        
            const content = (
                <>
                <img className="portfolio-image-popupbox" src={passwordGen} alt="Note Taker"/>
                    <p></p>
                    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jeffcela/The_Lost_Chef")}>https://github.com/jeffcela/The_Lost_Chef</a>
                    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jeffcela/The_Lost_Chef")}>https://github.com/jeffcela/The_Lost_Chef</a>
                </>
            )
                PopupboxManager.open({ content })
            }
            const popupboxConfigPass = {
                titleBar: {
                    enable: true,
                    text: "Password Generator App"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">

                <div className="portfolio-image-box" onClick={openPopupboxPlanner}>
                <img className="portfolio-image" src={planner}  alt="...Planner"/>
                <div className="overflow"></div>
                </div>
                {/* - */}

                <div className="portfolio-image-box" onClick={openPopupboxChef}>
                    <img className="portfolio-image" src={lostChef}  alt="...lostChef"/>
                <div className="overflow"></div>
               </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxNote}>
                    <img className="portfolio-image" src={noteTaker}  alt="...Notetaker"/>
                <div className="overflow"></div>
                </div>
               
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxPass}>
                    <img className="portfolio-image" src={passwordGen}  alt="...Password"/>
                <div className="overflow"></div>
                </div>
                
                </div>
            </div>

            <PopupboxContainer {...popupboxConfigNote} />
            <PopupboxContainer {...popupboxConfigPass} />
            <PopupboxContainer {...popupboxConfigChef} />
            <PopupboxContainer {...popupboxConfigPlanner} />
        </div>
    )
}

export default Portfolio
