import React from 'react'
import { Cell, Grid } from 'react-mdl'
import classes from './Landing.module.css'
import Image from '../Assets/image.jpg'


const LandingPage = () => {
    return (
        <div className={classes.landing}>
            <Grid className={classes.landingrid}>
                <Cell col={12}>
                    <img className={classes.image} src={Image} alt="avatar" />
                    <div className={classes.banner}>
                        <h1>Abhijith Shetty</h1>
                        <h4>Front End Web Developer</h4>
                        <hr />
                        <p>HTML | CSS | JavaScript | ReactJs | </p>
                        <div className={classes.socialLinks}>
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/abhijith-shetty-64785b171/" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/abhieee07/" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                        </div>
                    </div>
                </Cell>
            </Grid>
        </div >
    )
}

export default LandingPage
