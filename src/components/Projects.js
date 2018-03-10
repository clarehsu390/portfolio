import React from 'react';
import './Projects.css';
export default class Projects extends React.Component {
    handleHover(e) {
        e.target.classList.add('show');
    }
    render() {
        return (
            <div className="projects">
                <h2>Projects</h2>
                <section className="project-section">
                    <div className="project" onMouseOver={() => this.handleHover.bind(this)}>
                        <h3>Your Aesthetic</h3>
                        <img className="project-images" src={require("../full-stack.png")}/>
                        <div className="overlay">
                            </div>
                    </div>

                <div className="project">
                    <h3>Word Frenzy</h3>
                    <img className="project-images" src={require("../frenzy.png")}/>
                </div>

                <div className="project">
                    <h3>Clustering Visualization</h3>
                    <img className="project-images" src={require("../flex.png")}/>
                    </div>
                    </section>
            </div>
        );
    }
}