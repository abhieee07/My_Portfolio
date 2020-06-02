import React from 'react'
import classes from './Contact.module.css'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import Image from '../Assets/image.jpg'


const Contact = () => {
    return (
        <div className={classes.ContactBody}>
            <Grid className={classes.ContactGrid}>
                <Cell col={6}>
                    <h2>Abhijith Shetty</h2>
                    <img className={classes.image} src={Image} alt="avatar" />

                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />
                    <div className={classes.ContactList}>
                        <List>
                            <ListItem >
                                <ListItemContent className={classes.listContent} >
                                    <i className
                                        ="fa fa-phone-square" aria-hidden="true"></i>
                                   9449085956
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className={classes.listContent} >
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                   abhijithshetty1996@gmail.com
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className={classes.listContent} >
                                    <i className="fa fa-skype" aria-hidden="true"></i>
                                   live:abhijithshetty1996
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className={classes.listContent} >
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                     abhijith-shetty-64785b171
                                    </ListItemContent>
                            </ListItem>

                        </List>
                    </div>
                </Cell>

            </Grid>
        </div>
    )
}

export default Contact
