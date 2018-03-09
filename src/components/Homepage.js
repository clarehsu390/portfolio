import React from 'react';
import './Homepage.css';
import ProjectIndex from './Projects';
import About from './About';
export default class Homepage extends React.Component {
    componentDidMount() {
        this.displayLater();
    }

    displayLater() {
        setTimeout(() => {
            let header = document.querySelector('.page__text');
            header.classList.remove('hide');
        }, 2000);
    }
    render() {
        return (
            <div>
            <div className="homepage">
                <header className='page__header'>
                    <h1 className='page__title'>
                    HELLO, 
                    <br/>
                    MY NAME IS
                    <br/>
                    <span className='name'>CLARE HSU.</span>
                    </h1>
                    <span className='page__sub'>
                    <img src={require('../selfie.jpg')} className='page__photo'/>
                    </span>
                    </header>
                
                    <section>
                    <h2 className='page__text hide'>
                    Software developer with a linguistics background.
                    <br/>
                    Check out my <a href="https://github.com/clarehsu390/"><i id="github" className="fab fa-github"></i></a>, connect with me on <a href="https://www.linkedin.com/in/clare-hsu-aa3866132/"><i id="linkedin" className="fab fa-linkedin"></i></a>, 
                    or stalk my resume.
                    </h2>
                    </section>
                </div>
                
                <ProjectIndex/>
                <About/>
                </div>
        );
     
    }
}