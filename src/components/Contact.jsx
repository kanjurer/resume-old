import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';

import { default as data } from '../data';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grid: {
    position: 'relative',
    width: '1200px',
    left: '80px',
  },
  rightContent: {
    flexGrow: 1,
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <div className={classes.rightContent}>
        <Typography variant="h2" component="h2" gutterBottom>
          contact
        </Typography>

        <Grid container>
          <Grid item xs={6}>
            <Typography variant="button" display="block" gutterBottom>
              Phone No. <PhoneSharpIcon />
            </Typography>
            <Typography>{data.phoneNo}</Typography>
            <Typography variant="button" display="block" gutterBottom>
              Email Address <EmailSharpIcon />
            </Typography>
            <Typography>{data.email}</Typography>
          </Grid>
          <Grid item xs={matches ? 12 : 6}>
            <Typography variant="button" display="block" gutterBottom>
              Languages
            </Typography>
            {data.languages.map((item) => {
              return <Typography>{item.name}</Typography>;
            })}
          </Grid>
        </Grid>
      </div>
      <br />
      <Divider />
      <br />
      <div className={classes.rightContent}>
        <Typography variant="h2" component="h2" gutterBottom>
          social media
        </Typography>
        <Grid container xs={12}>
          {data.socialMedia.map((item) => {
            return (
              <>
                <Grid item>
                  <Button href={item.url} target="_blank">
                    {item.icon}
                  </Button>
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
      <br />
      <Divider />
      <br />

      <br />
      <Divider />
      <br />
    </>
  );
}
