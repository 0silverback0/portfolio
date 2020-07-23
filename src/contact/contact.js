import React from 'react'



const style = {
    textAlign: 'center',
    margin: '20px',
    border: 'solid 1px blue',
    padding: '10px'
}

const links = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'blue'
}
const Contact= () => {
    return (
        <div style={style}>
            <p>I fell in love with coding when trying to find a side job.
                I found an article that said building an app could be a great
                way to make some money on the side, but I had no idea how much
                I would have to learn to make a dime from it. I began to learn
                and enjoyed what I was doing but I knew it would be a long time
                before I could build an app, so I became very inconsitent. I then
                discovered FreeCodeCamp and found that I could build a simple web 
                page rather quickly, I've been hooked since! I've taken courses on Udemy
                and many other online resources. My most recent accomplishment which I am most
                proud of is completing Udacity's Front End Developer Nanodegree program.
            </p>
            <p>One thing about me is that I love challenges(within reason).
                I love to push myself, and the feeling of attempting something
                most people would avoid is a thrill, and I get a rush when I can
                complete something that was particularly difficult
            </p>
            
            <a style={links} href="https://www.linkedin.com/in/marcellgibbs/">Linkedin</a>
            <a style={links} href="https://github.com/0silverback0">Github</a>
            <a style={links} href="mailto:fourmarz@yahoo.com?subject=I found your portfolio">Email for Resume</a>
        </div>
    )
}

export default Contact