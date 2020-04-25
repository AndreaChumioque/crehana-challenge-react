import * as React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Loader from '../assets/loader.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullHeight: {
      height: '100vh',
    },
    loader: {
      width: 80,
    }
  }),
);


const LoaderComponent : React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center" className={classes.fullHeight}>
      <img src={Loader} alt="This loader is provided by loading.io" className={classes.loader}/>
    </Grid>
  );
};

export default LoaderComponent;
