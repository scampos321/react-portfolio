import React from "react";
import author from "../me.jpg";
const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                    </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>I am a web developer and I am currently learning at the Georgia Tech Coding Boot Camp. I decided to start learning to further expand my knowledge on web developement and improve my career level. The goal is to eventually get into the work field of a web developer and land the ideal job
                </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
