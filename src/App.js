import React from 'react';
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ColorsList from './components/ColorsList/ColorsList'
import ConvertColors from './components/ConvertColor/ConvertColor'

class App extends React.Component {
  state = {
    value: 0,
    scrim: false
  };

  convertColors = null;

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  toggleScrim = () => {
    console.log('This is a test');
    this.setState(prevState => {
      console.log('Toggle scrim');
      console.log(prevState);
      return {scrim: !prevState.scrim}
    });
  };

  closePicker = () => {
    if (this.convertColors) {
      this.convertColors.handleClick();
      console.log(this.convertColors)
    }
  }

  render() {
    return (
      <div>
        {this.state.scrim ? <div style={{height: '100vh', width: '100vw', position: 'fixed', top: '0', left: '0'}} onClick={this.closePicker()}/> : null}
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
        <SwipeableViews
          axis={'' === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <ColorsList/>
          <ConvertColors toggleScrim={this.toggleScrim} ref={(comp) => { this.convertColors = comp; }}/>
          <div><p>IMAGE</p></div>
          <div><p>SWITCHER</p></div>
          <div><p>PALETTE</p></div>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
