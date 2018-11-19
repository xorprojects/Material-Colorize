// @flow

import React, {useState} from 'react';
import {withStyles} from "@material-ui/core";
import style from "./style";
import Tab from './Tab';
import {BrowserRouter as Router, Route} from "react-router-dom";

type TabsPropType = {
  title: string,
  tabIndex: 0,
  classes: typeof style
}

function Tabs(props: TabsPropType) {
  const {
    children: reactChildren,
    classes
  } = props;
  const children = React.Children.toArray(reactChildren);
  return (
    <Router>
      <div className={classes.tabsDiv}>
        <div className={classes.tabs}>
          {
            children.map(child => <Tab key={child.props.tabLabel} child={child}/>)
          }
          <div className={`${classes.tabSideBorder} grow`}/>
        </div>
        <div className="overflowAuto">
          {
            children.map((child) =>
              <Route exact path={child.props.path} key={child.props.tabLabel} children={({match}) =>
                <div className={match ? classes.bodyDiv : 'hideOverflow'}>
                <div className={`${child.props.showOverflow ? '' : 'full-height hideOverflow'}`}
                     style={match ? {} : {height: 0}}>
                  {child}
                </div>
                </div>
              }/>
            )
          }
        </div>
      </div>
    </Router>
  );
}

export default withStyles(style)(Tabs);
