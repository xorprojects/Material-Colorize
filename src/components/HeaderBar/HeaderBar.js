// @flow weak

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, {Tab} from 'material-ui/Tabs';
import './HeaderBar.css';

export default class HeaderBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="PICK"/>
          <Tab label="CONVERT"/>
          <Tab label="IMAGE"/>
          <Tab label="SWITCHER"/>
          <Tab label="PALETTE"/>
        </Tabs>

      </AppBar>
    );
  }
}

