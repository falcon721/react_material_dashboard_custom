import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    textAlign: 'center',
    margin: theme.spacing(20, 0)
  },
  image: {
    maxWidth: 350
  },
  title: {
    margin: theme.spacing(4, 8, 10, 8)
  },
}));

function CollabListPlaceholder({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.inner}>
        <Typography
            className={classes.title}
            variant="h3"
        >
          Select an influencer card to view the details
        </Typography>
        <img
          alt="Select card"
          className={classes.image}
          src="/images/undraw_work_chat_erdt.svg"
        />
      </div>
    </div>
  );
}

CollabListPlaceholder.propTypes = {
  className: PropTypes.string
};

export default CollabListPlaceholder;
