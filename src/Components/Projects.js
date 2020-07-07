import React, { Component } from 'react'
import classes from './Projects.module.css'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, Button, CardActions } from 'react-mdl'
import image from '../Assets/weather_og.png'
import corona from '../Assets/corona.jpg'
import BurgerImg from '../Assets/the-burger-builder.jpg'

export class Projects extends Component {
    state = {
        activeTab: 0
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className={classes.projectsgrid}>
                    {/* project 1 */}
                    <Card shadow={5} className={classes.cardStyle}>
                        <CardTitle style={{
                            color: '#fff', height: '186px',
                            background: `url(${BurgerImg}) center / cover`,
                        }}> Burger-Builder App </CardTitle>

                        <CardText>
                            This was one of my first projects in react ,where in i've learnt and implemented a lot of things.I've used React 16/jsx pages, React Router, React-Thunk,
                            Redux for state management, Axios, Pure JavaScript, CSS3, HTML5, FireBase for Database and Hosting.This is a very simple application
                            where in you could build your own burger and Proceed to checkout.It also has an authentication page,where in you will have to create
                            your account first and then proceed purchasing.I've used firebase for backend for storing my state values and also for authentication.You Will be Even able to see all your past orders in my orders section.
                        </CardText>
                        <CardActions border style={{ display: "flex", justifyContent: "center" }}>
                            <Button href="https://github.com/abhieee07/Burger-App" target="_blank" colored>GitHub</Button>
                            <Button href="https://laughing-cray-6c5b8a.netlify.app/" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* project 2 */}
                    <Card shadow={5} className={classes.cardStyle}>
                        <CardTitle style={{
                            color: '#fffafa', height: '186px',
                            background: `url(${corona}) center / cover`,
                        }}> Corona Tracker </CardTitle>

                        <CardText >
                            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                            You can be infected by breathing in the virus if you are within close proximity of someone
                            who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.In this project
                            I've built  a real time  coronovirus tracker where you would be getting the  count of Active,recovered
                            ,and total deaths all over the world. Live statistics and coronavirus news tracking the number of confirmed cases,
                            recovered patients, tests, and death toll due to the COVID-19.
                    </CardText>
                        <CardActions border style={{ display: "flex", justifyContent: "center" }}>
                            <Button href="https://github.com/abhieee07/React-coronaTracker" target="-blank" colored>GitHub</Button>
                            <Button href="https://optimistic-sinoussi-28f3b8.netlify.app" target="-blank" colored >Live Demo</Button>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* project 3 */}
                    <Card shadow={5} className={classes.cardStyle}>
                        <CardTitle style={{
                            color: '#fff', height: '186px',
                            background: `url(${image}) center / cover`,
                        }}> Weather App  </CardTitle>

                        <CardText style={{ height: "225px" }}>
                            This is simple weather app built with react,which gives you the current temperature of the city entered.I have used
                            openWeather API to fetch real time data.You just have to Enter your prefered city and  click on enter and you will be
                            getting the current weather data.The aim of this project was to make it resonsive,so that it looks good even on mobile
                            devices.
                        </CardText>
                        <CardActions border style={{ display: "flex", justifyContent: "center" }}>
                            <Button href="https://github.com/abhieee07/Weather-report-app" target="/blank" colored>GitHub</Button>
                            <Button href="https://eager-mcclintock-6ebdd0.netlify.app" target="/blank" colored>Live Demo</Button>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>
                </div>
            )

            // Javascript Project
        } else if (this.state.activeTab === 1) {
            return (
                <div className={classes.projectsgrid}>
                    {/* project 1 */}
                    <Card shadow={5} className={classes.cardStyle}>
                        <CardTitle style={{
                            color: '#fff', height: '186px',
                            background: 'url(https://www.softfluent.fr/wp-content/uploads/2019/10/javascript.png) center / cover'
                        }}>Budget-Controll App </CardTitle>

                        <CardText >
                            It keeps track of your budget, your expenses, bills, utilities, and other such things. These are useful
                            for keeping track of where your money goes so that you lose less of it. They are especially helpful for folks who
                            manage multiple accounts at once and pay a lot of their bills online.With the help this app,you could store or record all
                            of your expense and income and review this at the end of the month and by doing so you could keep the track of all your
                            expenditures.You also get the percentage of amount spent on each particulary expenditure shown which is calculated from your
                            total income.I have used vanila javascript throught the project.
                    </CardText>
                        <CardActions border style={{ display: "flex", justifyContent: "center" }}>
                            <Button href="https://github.com/abhieee07/Budget-Controll-App" target="_blank" colored>GitHub</Button>
                            <Button href="https://dazzling-brattain-d84625.netlify.app/" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* project 2 */}
                    <Card shadow={5} className={classes.cardStyle}>
                        <CardTitle style={{
                            color: '#fff', height: '176px',
                            background: 'url(https://www.softfluent.fr/wp-content/uploads/2019/10/javascript.png) center / cover'
                        }}> Pig Game </CardTitle>

                        <CardText style={{ height: "260px" }} >
                            This was one of my first projects as a beginner,this is a very simple dice  game built with vanila javascript.The game goes as follows,
                            Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold".
                            If the player rolls a 1, they score nothing and it becomes the next player's turn.If the player rolls any
                            other number, it is added to their turn total and the player's turn continues.If a player chooses to
                            "hold", their turn total is added to their score, and it becomes the next player's turn.
                            The first player to score 100 or more points wins.
                </CardText>
                        <CardActions border style={{ display: "flex", justifyContent: "center" }}>
                            <Button href="https://github.com/abhieee07/Pig-game" target="/blank" colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div >
                <Tabs className={classes.category} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab >React</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>

                <Grid >
                    <Cell col={12}>
                        <div className={classes.content}> {this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects
