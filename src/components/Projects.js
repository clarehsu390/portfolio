import React from 'react';
import './Projects.css';
export default class Projects extends React.Component {
    constructor() {
        super();
        this.handleHover = this.handleHover.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
    }
    handleHover(e) {
        let overlay = e.target.nextSibling;
        overlay.classList.add('show');
    }
    handleHoverOut(e) {
        let overlay = document.getElementsByClassName('show');
        Array.from(overlay).forEach(el => {
            el.classList.remove('show');
        });
    }
    render() {
        return (
            <div id="projects" className="projects">
                <h2>Projects</h2>
                <section className="project-section">
                    <div className="project" onMouseOut={this.handleHoverOut}  >
                        <h3>Your Aesthetic</h3>
                        <img className="project-img" onMouseOver={this.handleHover} className="project-images" src={require("../full-stack.png")}/>
                        <div className="overlay">
                            <a href="https://github.com/clarehsu390/YourAesthetic"><i id="github" className="fab fa-github"></i></a>
                        </div>
                    </div>

                <div className="project">
                    <h3>Word Frenzy</h3>
                    <img onMouseOver={this.handleHover} onMouseOut={this.handleHoverOut} className="project-images" src={require("../frenzy.png")}/>
                    <div className="overlay">
                        <a href="https://github.com/clarehsu390/Frenzy"><i id="github" className="fab fa-github"></i></a>
                            </div>
                </div>

                <div className="project">
                    <h3>Clustering Visualization</h3>
                    <img onMouseOver={this.handleHover} onMouseOut={this.handleHoverOut} className="project-images" src={require("../flex.png")}/>
                    <div className="overlay">
                        <a href="https://github.com/clarehsu390/Clustering-Visualization"><i id="github" className="fab fa-github"></i></a>
                            </div>
                    </div>
                    </section>
            </div>
        );
    }
}