import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import CollabList from './CollabList';
import CollabListDetails from './CollabListDetails';
import CollabListPlaceholder from './CollabListPlaceholder';
import { Container, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    cursor: 'pointer',
    display: 'flex',
    overflow: 'hidden',
    '@media (max-width: 863px)': {
      '& $collabList, & $collabDetails': {
        flexBasis: '100%',
        width: '100%',
        maxWidth: 'none',
        flexShrink: '0',
        transform: 'translateX(0)'
      }
    }
  },
  openCollab: {
    '@media (max-width: 863px)': {
      '& $collabList, & $collabDetails': {
        transform: 'translateX(-100%)'
      }
    }
  },
  collabList: {
    width: 300,
    flexBasis: 300,
    flexShrink: 0,
    '@media (min-width: 864px)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  collabDetails: {
    flexGrow: 1
  },
  collabPlaceholder: {
    flexGrow: 1,
  },
  backcolor: {
    backgroundColor: theme.palette.common.white
  }
}));

function Collab() {
  const classes = useStyles();
  const params = useParams();
  const [collabs, setCollabs] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchCollabs = () => {
      axios.get('/api/collab/collabs').then((response) => {
        if (mounted) {
          setCollabs(response.data.collabs);
        }
      });
    };

    fetchCollabs();

    return () => {
      mounted = false;
    };
  }, []);

  let selectedCollab;

  if (params.id) {
    selectedCollab = collabs.find(
      (c) => c.id === params.id
    );
  }

  return (
    <Page
      className={clsx({
        [classes.root]: true,
        [classes.openConversion]: selectedCollab
      })}
      title="Collab"
    >
       <Grid
        container
        spacing={4}
      >
        <Grid
          item
          md={9}
          xs={12}
        >
        <CollabList
          className={classes.collabList}
          collabs={collabs}
        />
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          className={classes.backcolor}
          >
          {selectedCollab ? (
            <CollabListDetails
              className={classes.collabDetails}
              collab={selectedCollab}
            />
          ) : (
            <CollabListPlaceholder className={classes.collabPlaceholder} />
          )}
        </Grid>
      </Grid>
    </Page>
  );
}

export default Collab;
