import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toobar from "@material-ui/core/Toolbar";
import { CssBaseline, makeStyles, Typography, useScrollTrigger } from '@material-ui/core';

function ElevationScroll(props) {
   const { children } = props;

   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
   });

   return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
   });
};

const useStyles = makeStyles(theme => ({
   toolbarMargin: {
      ...theme.mixins.toolbar
   }
}));

export default function Header(props) {
   const classes = useStyles();

   return (
      <>
      {/* <CssBaseline /> */}
         <ElevationScroll>
            <AppBar position="fixed">
               <Toobar>
                  <Typography variant="h3" color="secondary">
                     Daratchanan
                  </Typography>
               </Toobar>
            </AppBar>
         </ElevationScroll>
         <div className={classes.toolbarMargin} />
      </>
   )
};
