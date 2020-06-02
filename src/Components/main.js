import React from 'react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import LandingPage from './LandingPage'
import Resume from './Resume'
import Projects from './Projects'
import { Route, Switch } from 'react-router-dom'

const main = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Projects" component={Projects} />
        </Switch>
    )
}
export default main







