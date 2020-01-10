import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import SearchBar from 'src/components/SearchBar';
import Header from './Header';
import Results from './Results';
import Cards from './CollabCard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(3)
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
  backcolor: {
    backgroundColor: theme.palette.common.white
  }
}));

function CollabList() {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title="Collab"
    >
        <Container maxWidth={false}>
        <Header />
        <Results
        className={classes.results}
        />
        </Container>
    </Page>
  );
}

export default CollabList;
