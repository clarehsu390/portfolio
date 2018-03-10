import React from 'react';
import './About.css';
import ReactDOM from 'react-dom';
export default class About extends React.Component {
    render() {
        return (
            <div id="about"className="about">
            <section className="about__section">
            <div className="about__title">
                <h2 id="about-title">About Me</h2>
                <div className="about__article">
                <span>
                <img id="about-image" src={require("../IMG_3054.JPG")}/>
                </span>
                <article className="about__description">
                    Clare is a software developer with a linguistics degree. She discovered her passion for coding when she realized it was like learning another language. Being able to communicate with technology creates endless possibilities. Wanting to pursue a technical career, she has now built web applications and continues to develop her technical repoitoire. Her passion currently lies in full stack development, creating visually appealing interfaces and working out complex problems on the server-side.  
                </article>
                </div>
            </div>
                <div className="about___likes">
                    
                </div>
                </section>
            </div>
        );
      
    }
}