import React from 'react'
import { Grid, Cell } from 'react-mdl'
import classes from "./Aboutme.module.css"
import Myimage from "../Assets/image.jpg"
const AboutMe = () => {
    return (
        <div className={classes.full}>
            <Grid className={classes.aboutGrid} >
                <Cell col={3}>
                    <img className={classes.imageCol} src={Myimage} alt="avatar" />
                </Cell>
                <Cell col={9} >
                    <h1 style={{ textAlign: 'center' }}>About Me</h1>
                    <hr className={classes.hrtag} />

                    <p>Hello.I am Abhijith and I am from Mangalore ,I have done my B.E in electronics and communication.After graduating
                    I started my carrier as a quality analyst.After 1.5 years of being a quality analyst i levelled up my carrier and
                    decided to switch to front end to enhance my knowledge in the same.
                    If a technology is hard to learn, you will probably find it difficult to start. That, as it happens, it’s human nature.
                    We avoid things that are hard to learn.React is easy to learn, not just because there are a great number of easy-to-understand
                    tutorials available on the internet but mainly because it’s a very simple library.React lets you build rich user-interfaces easily.
                    And thats one of the reason i decided to switch to react.I started with basic Html/css ,javascript and then moved on with react .
                    I learnt a lot of things in react and even implemented the same on some of my projects as a beginner     </p>
                </Cell>
            </Grid>

        </div>
    )
}

export default AboutMe





    // // Hello. Im James, a full stack web and mobile developer based in Manila, Philippines. I love to build things from the scratch. 
    // I started my career as a junior front end developer as an on the job trainee. After graduating, I continue my career as a front
    //  end developer for 2 years. After 2 years of being a front end developer I levelled up my career and decided to learn backend.
    //   As of now, I worked as a full stack web developer. Aside from coding, I love to play basketball and go outside with my family o
    //   r friends.