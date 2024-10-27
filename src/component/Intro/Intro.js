import React from 'react';
import './intro.css';
import myy from '../../asset/myy.jpg';

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
            <img src={myy} alt='profile'className='myy' />

                <p className="hello">Hello</p>
                <br/>
                <span className="introText">I am <span className='introName'>Betelhem</span><br />Software engineer & Graphic Designer</span>
                <p className='introPara'>I am a 5th-year Software Engineering student at Addis Ababa University (AAiT Campus) with a certificate
                    <br /> in graphic design from Berhanena Selam Printing Technology College. I specialize in front-end <br /> development and graphic design,
                    with expertise in tools like Adobe Illustrator, Photoshop, and InDesign.  </p> 
            </div>
        </section>
    );
}

export default Intro;