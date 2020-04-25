import * as React from 'react';
import * as moment from 'moment';
import { useHistory } from 'react-router-dom';
import { Marked } from '@ts-stack/markdown';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Avatar, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import { GetJobDetailQuery } from '../../generated/graphql';

interface Props {
  data: GetJobDetailQuery;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      height: 35,
      width: 35,
      marginRight: theme.spacing(2),
    },
    link: {
      textDecoration: 'none',
    },
    title: {
      marginBottom: theme.spacing(1),
      color: '#ff727d'
    },
    caption: {
      margin: `${theme.spacing(2)}px 0`
    },
    button: {
      borderRadius: theme.spacing(1),
      marginTop: theme.spacing(2),
      color: '#60e7f3'
    },
  }),
);

const JobDetail: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  if (!data.job) {
    return <div>No tenemos información por el momento.</div>;
  }

  return (
    !data.job
      ? (
        <div>No tenemos información por el momento.</div>
      ) : (
        <React.Fragment>
          <Button
            className={classes.button}
            startIcon={<ArrowBackIcon />}
            onClick={() => history.goBack()}
          >
            Volver
          </Button>
          <h1 className={classes.title}>
            {data.job.title}
          </h1>
          <Typography variant="caption" display="block" gutterBottom className={classes.caption}>
            Publicado el {moment.default(data.job.postedAt).format('LL')}
          </Typography>
          <Grid container direction="row" alignItems="center">
            {data.job.company!.logoUrl
              ? (
                <Avatar alt={data.job.company!.name} src={data.job.company!.logoUrl} className={classes.small} />
              ) : (
                <Avatar alt={data.job.company!.name} className={classes.small}>{data.job.company!.name.charAt(0).toUpperCase()}</Avatar>
              )}
            <span>{data.job.company?.name}</span>
          </Grid>
          <Grid item xs={12} sm={10} md={8} id="descriptionContainer">
            <div dangerouslySetInnerHTML={{ __html: Marked.parse(data.job.description!) }} />
          </Grid>
        </React.Fragment>
      )
  );
};

export default JobDetail;