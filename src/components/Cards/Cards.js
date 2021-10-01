import React from 'react'
import CountUp from 'react-countup'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import cx from 'classnames';
import styles from './Cards.module.css'
 const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=> {
    if(!confirmed)
    {
        return 'Loading..';
    }
    
    return (
        <div className={styles.container}>
             <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Cards,styles.infected)}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom></Typography>
                         <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator=","/></Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variant="body2">Number of Infected People from Covid-19</Typography>
                     </CardContent>
                </Grid> 
                <Grid item component={Card} className={cx(styles.Cards,styles.recovered)}>
                     <CardContent className='recovered'>
                         <Typography color="textSecondary" gutterBottom></Typography>
                         <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator=","/></Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variant="body2">Number of Recoveries from Covid-19</Typography>
                     </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.Cards,styles.death)}>
                     <CardContent className='deaths'>
                         <Typography color="textSecondary" gutterBottom></Typography>
                         <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=","/></Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variant="body2">Number of Deaths from Covid-19</Typography>
                     </CardContent>
                </Grid>
             </Grid>
        </div>
    )
}
export default Cards;