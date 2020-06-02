import React from 'react';
// import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from "./Components/main"
import { NavLink } from 'react-router-dom'
import classes from './App.module.css'

function App() {
  const hideModal = () => {
    var selector = document.querySelector(".mdl-layout");
    selector.MaterialLayout.toggleDrawer();
  }
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<NavLink style={{ color: "white", textDecoration: "none" }} to="/">My Portfolio</NavLink>} scroll>
          <Navigation>
            <NavLink to="/AboutMe" activeClassName={classes.active} >AboutMe</NavLink>
            <NavLink to="/Resume" activeClassName={classes.active}>Resume</NavLink>
            <NavLink to="/Projects" activeClassName={classes.active}>Projects</NavLink>
            <NavLink to="/Contact" activeClassName={classes.active}>Contact</NavLink>
          </Navigation>
        </Header>
        <Drawer title={<NavLink style={{ color: "black", textDecoration: "none" }} to="/">My Portfolio</NavLink>}>
          <Navigation>
            <NavLink to="/AboutMe" onClick={hideModal}>AboutMe</NavLink>
            <NavLink to="/Contact" onClick={hideModal}>Contact</NavLink>
            <NavLink to="/Resume" onClick={hideModal}>Resume</NavLink>
            <NavLink to="/Projects" onClick={hideModal}>Projects</NavLink>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div >
  );
}

export default App;
