import React from 'react';
import './About';
export default class About extends React.Component {
    render() {
        return (
            <div className="about">
            <section className="about__section">
                <h2>About Me</h2>
                <img id="about-image" src={require("../IMG_3054.JPG")}/>>
                <article>
                    Clare is a software developer with a linguistics degree. She discovered her passion for coding when she was introduced to computational linguistics. Wanting to pursue a technical career, she has now completed projects and continues to develop her technical repoitoire. 
                </article>
                <div className="about___likes">
                    
                </div>
                </section>
            </div>
        );
      
    }
}