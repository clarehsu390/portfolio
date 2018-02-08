import React from 'react';
import './Homepage.css';
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
            <div className="homepage">
                <header className='page__header'>
                    <h1 className='page__title'>
                    Hello 👋, 
                    <br/>
                    my name is
                    <br/>
                    Clare Hsu.
                    </h1>
                    <span className='page__span'>
                    <img src={require('../selfie.jpg')} className='page__photo'/>
                    </span>
                  
                    </header>
                
                    <section>
                    <h2 className='page__text hide'>
                    Software developer with a linguistics background.
                    <br/>
                    Check out my github, stalk me on LinkedIn, or hit me up!
                    </h2>
                    </section>
                
                
            </div>
        );
     
    }
}