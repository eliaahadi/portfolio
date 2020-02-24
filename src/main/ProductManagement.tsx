import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    section: {
      // height: '500px',
      // flexGrow: 1,

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    descriptionText: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    imageContainer: {
      justifyContent: 'center',
    },
    image: {
      height: '200px',
      width: '200px',
      // padding: theme.spacing(2),
      // textAlign: 'center',
    }
  }),
);

function Projects() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <div className={classes.section}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Projects</Paper>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>​
            <Typography className={classes.root}>
              <Link href="https://elia314.github.io/ea/attachments/Bayer_Product_Validation.pdf">
                Bayer Product Validation
              </Link>
            </Typography>
          </h4>
          <h5 className={classes.paper}>​
            I worked on this product validation with Bayer client and did user stories, peronas, empathy maps, and usability A/B tests.
          </h5>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>​
            <Typography className={classes.root}>
              <Link href="https://elia314.github.io/ea/attachments/Moov_Product_Breakdown.pdf">
                Moov Product Breakdown
              </Link>
            </Typography>
          </h4>
          <h5 className={classes.paper}>​
            I worked on this product breakdown of the Moov wearable that includes user flows, product funnels, market sizing, and lean canvas models.
          </h5>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>​
            <Typography className={classes.root}>
              <Link href="https://elia314.github.io/ea/attachments/MoovHabitForming.png">
                Moov habit forming Minimum Viable Product (MVP) mockup design
              </Link>
            </Typography>
          </h4>
          <h5 className={classes.paper}>​
            I worked on this MVP mockup for ideating on habit forming behaviors for fitness users.
          </h5>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>​
            <Typography className={classes.root}>
              <Link href="https://elia314.github.io/ea/attachments/Cap1_Authentication_Case_Study.pdf">
                Capital One Authentication Case Study
              </Link>
            </Typography>
          </h4>
          <h5 className={classes.paper}>​
            I did a case study of analyzing the authentication problems and proposing solutions.
          </h5>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>​
            <Typography className={classes.root}>
              <Link href="https://elia314.github.io/ea/attachments/Delta_Airlines_Design_Challenge.pdf">
                Delta Airlines Air Travel Design Challenge
              </Link>
            </Typography>
          </h4>
          <h5 className={classes.paper}>​
            I prepared a problem defintion, user profiles, and solutions on air travel design challenges.
          </h5>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>​
            <Typography className={classes.root}>
              <Link href="https://elia314.github.io/ea/attachments/Darby_Smart_App_User_Retention.pdf">
                Darby Smart App User Retention Study
              </Link>
            </Typography>
          </h4>
          <h5 className={classes.paper}>​
            I did a case study to understand user retention for the Darby DIY mobile app.
          </h5>
        </Grid>
      </Grid>
    </div>
  )
}

export default function ProductManagement() {
  return (
    <div>
      <Projects />
    </div>
  )
};
