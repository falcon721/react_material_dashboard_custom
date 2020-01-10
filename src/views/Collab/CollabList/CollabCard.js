import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Avatar,
  Button,
  Typography,
  colors,
  Grid,
  Box
} from '@material-ui/core';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import EmojiNatureOutlinedIcon from '@material-ui/icons/EmojiNatureOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 90
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: -55
  },
  avatar: {
    height: 60,
    width: 60,
    marginBottom: theme.spacing(1),
    border: `4px solid ${theme.palette.common.white}`
  },
  actions: {
    justifyContent: 'flex-start'
  },
  containedSuccess: {
    color: theme.palette.common.white,
    backgroundColor: colors.red[600],
    '&:hover': {
      backgroundColor: colors.red[900],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: colors.red[600],
      }
    },
    fontSize: 12,
  },
  containedRefuse: {
    color: theme.palette.common.white,
    backgroundColor: colors.grey[600],
    '&:hover': {
      backgroundColor: colors.grey[900],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: colors.grey[600],
      }
    },
    fontSize: 12,
  },
  title: {
    marginTop: -50,
    marginLeft: 15
  },
  gridcontent: {
    // textAlign: 'center'
    display: 'flex',
    direction: 'row',
    justifyContent: 'flex-start',
  },
  spacing: {
    padding: 15,
    // marginTop: 10
    marginBottom:-10
  },
  spacing1: {
    paddingLeft: 15,
    marginBottom: 15
  },
  label: {
    marginLeft: 15,
    paddingTop: 2
  }
}));

function CollabCard({ className, collab, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardMedia
        className={classes.media}
        image={collab.coverpath}
      />
      <CardContent className={classes.content}>
        <Avatar
          className={classes.avatar}
          src={collab.avatar}
        >
          CM
        </Avatar>
        
      </CardContent>
      <div className={classes.title}>
        <Typography
          gutterBottom
          variant="h4"
        >
          {collab.name}
        </Typography>
        <Typography variant="body2">
          {collab.country}
        </Typography>
      </div>
      <Grid container className={classes.spacing}>
        <Grid item md={5} xs={12} className={classes.gridcontent}>
          <RestaurantOutlinedIcon style={{color: 'grey'}}/>
          <Typography variant="body2" className={classes.label}>
            {collab.food}
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} className={classes.gridcontent}>
        <EmojiNatureOutlinedIcon style={{color: 'grey'}}/>
          <Typography variant="body2" className={classes.label}>
            {collab.beauty}
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} className={classes.gridcontent}>
        <CardGiftcardOutlinedIcon style={{color: 'grey'}}/>
          <Typography variant="body2" className={classes.label}>
            {collab.fashion}
          </Typography>
        </Grid>
      </Grid>
      <Divider style={{margin: (0,10)}}/>
      <Grid container className={classes.spacing}>
        <Grid item lg={3} xs={12} md={12}>
          <Typography
            gutterBottom
            variant="h6"
          >
            {collab.engagement}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Engagement
          </Typography>
        </Grid>
        <Grid item lg={3} xs={12} md={12}>
        <Typography
            gutterBottom
            variant="h6"
          >
            {collab.authenticity}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Authenticity
          </Typography>
        </Grid>
        <Grid item lg={3} xs={12} md={12}>
        <Typography
            gutterBottom
            variant="h6"
          >
            {collab.follow}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Followers
          </Typography>
        </Grid>
        <Grid item lg={3} xs={12} md={12}>
          <Typography
              gutterBottom
              variant="h6"
          >
            {collab.city}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Main audience city
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.spacing1}>
        <Grid item md={3} xs={12} >
          <Button className={classes.containedRefuse} size="small">
            DECLINE
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button className={classes.containedSuccess} size="small">
            ACCEPT
          </Button>
        </Grid>
        <Grid item md={3} xs={12} >
          <Button size="small" style={{fontSize: 12}}>
            VIEW MORE
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

CollabCard.propTypes = {
  className: PropTypes.string
};

export default CollabCard;
