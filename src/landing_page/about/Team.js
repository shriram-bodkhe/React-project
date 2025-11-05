import React from 'react';
import Hero from './Hero';

function Team() {
    return (
        <div className='container'>
          <Hero />
            <div className='row p-5 mt-5 border-top'>
                <h1 className='text-center '>
                    People
                </h1>
            </div>
            <div className='row text-muted' style={{lineHeight:"1.8",fontSize:"1.2em"}}>
                <div className='col-6 mt-5 p-5 text-center mt-2'>
                    <img src='/media/shriram.jpg' style={{borderRadius:"500px",width:"50%"}}/>
                    <h4 className='mt-5'>Shriram Bodkhe</h4>
                    <h6>Full Stack Developer</h6>
                </div>
                <div className='col-6 p-5'>
                    <p>My name is Shriram, and I have a strong interest in full stack web development using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. I have a good understanding of how each component works together to build dynamic and responsive web applications. On the frontend, I use React.js
                        to design interactive user interfaces, while on the backend, I work with Node.js and Express.js to create RESTful APIs and handle server-side logic.
                    </p>
        
                    <p>
                        I also use MongoDB as a NoSQL database to efficiently store and manage data. Through various projects, I’ve gained practical experience in connecting the frontend and backend, handling authentication, and deploying applications. My goal is to keep learning advanced concepts and become a skilled full stack developer capable of building scalable and user-friendly web solutions.
                    </p>
                    <br/>
                    <p>Connect on <a href='https://www.linkedin.com/in/shriram-bodkhe-6b05a9296/' style={{textDecoration:"none"}}>Linked-In</a>&nbsp;&nbsp;&nbsp;
                    <a href='https://leetcode.com/u/shrirambodkhe/' style={{textDecoration:"none"}}>Leetcode</a>
                    &nbsp;&nbsp;
                    And
                    &nbsp;&nbsp;
                    <a href='https://www.instagram.com/shri_bodkhe_96k/' style={{textDecoration:"none"}}>Instagram</a>
                    <br/>
                    <h5 style={{display:"inline"}}>Contact :</h5>&nbsp;shrirambodkhe555@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team;