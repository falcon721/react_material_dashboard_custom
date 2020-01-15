import React, { useState, useRef, useEffect } from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Grid,
  Menu,
  MenuItem,
  ListItemText,
  Typography,
  colors
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import axios from 'src/utils/axios';
import Paginate from 'src/components/Paginate';
import ProjectCard from 'src/components/ProjectCard';
import Cards from './CollabCard';
import SearchBar from 'src/components/SearchBar';
import { readBuilderProgram, ExitStatus, getCombinedModifierFlags } from 'typescript';

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  actions: {
    display: 'flex',
    alignItems: 'center'
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    '&:hover': {
      borderRadius: 5,
      borderStyle: 'solid',
      borderWidth: 2,
      color: colors.red[600],
      
    }
  }
}));

function Results({ className, ...rest }) {
  const classes = useStyles();
  const sortRef = useRef(null);
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most popular');
  const [mode, setMode] = useState('grid');
  const [collabs, setCollabs] = useState([]);
  const [searchresult, setSearchresult] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSortOpen = () => {
    setOpenSort(true);
  };

  const handleSortClose = () => {
    setOpenSort(false);
  };

  const handleSortSelect = (value) => {
    setSelectedSort(value);
    setOpenSort(false);
  };

  const handleModeChange = (event, value) => {
    setMode(value);
  };

  const handleSearch = () => {
    
    let mounted = true;
    
    axios.get('/api/collabs').then((response) => {
      if (mounted) {
        alert(searchValue);
        response.data.collabprofile.map((item) => {
          if(item.name === searchValue){
            setSearchresult(item);
            
          }
          else{
            //alert(searchValue);
          }
        });
        
        setCollabs(searchresult);
      }
      mounted = false;
    });
  };

  const handleChange = () => {
    
    let mounted = true;
    
    axios.get('/api/collabs').then((response) => {
      if (mounted) {
        alert(searchValue);
        response.data.collabprofile.map((item) => {
          if(item.name === searchValue){
            setSearchresult(item);
            
          }
          else{
            //alert(searchValue);
          }
        });
        
        setCollabs(searchresult);
      }
      mounted = false;
    });
  };
  // useEffect(() => {
  //   let mounted = true;

  //   const handleSearch = (event) => {
  //     axios.get('/api/collabs').then((response) => {
  //       if (mounted) {
  //         response.data.collabprofile.map((item) => {
  //           if(item.name === searchValue){
  //             setSearchresult(item);
  //           }
  //         })
  //         setCollabs(searchresult);
  //       }
  //     });
  //   };

  //   handleSearch();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  useEffect(() => {
    let mounted = true;

    const fetchCollabs = () => {
      axios.get('/api/collabs').then((response) => {
        if (mounted) {
          setCollabs(response.data.collabprofile);
        }
      });
    };

    fetchCollabs();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <SearchBar
        onSearch={handleSearch}
        onSearchValue={setSearchValue}
        onChange={handleChange}
      />
      <Grid
        container
        spacing={4}
        style={{marginTop: 20}}
      >
        {collabs.map((collab) => (
          <Grid
            item
            className={classes.card}
            key={collab.id}
            md={mode === 'grid' ? 4 : 12}
            sm={mode === 'grid' ? 6 : 12}
            xs={12}
          >
            <Cards collab={collab} />
          </Grid>
        ))}
      </Grid>
      {/* <div className={classes.paginate}>
        <Paginate pageCount={3} />
      </div> */}
      {/* <Menu
        anchorEl={sortRef.current}
        className={classes.menu}
        onClose={handleSortClose}
        open={openSort}
        elevation={1}
      >
        {['Most recent', 'Popular', 'Price high', 'Price low', 'On sale'].map(
          (option) => (
            <MenuItem
              className={classes.menuItem}
              key={option}
              onClick={() => handleSortSelect(option)}
            >
              <ListItemText primary={option} />
            </MenuItem>
          )
        )}
      </Menu> */}
    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string
};

export default Results;
