// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color'
import {convert as convertColor} from '../../shared/convert';
import './ConvertColor.css';

export default class ColorsList extends React.Component {
  state = {
    displayColorPicker: false,
    color: '#FFFFFF',
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
    this.props.toggleScrim();
  };

  handleChange = (color) => {
    this.setState({ color: color.hex });
  };

  convert = () => {
    convertColor(this.state.color)
      .then(res => console.log(res))
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="swatch" onClick={ this.handleClick }>
          <div className="color" style={{backgroundColor: this.state.color}}/>
        </div>
        { this.state.displayColorPicker ? <div className="popover">
          <ChromePicker disableAlpha color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }
        <div>
          <button onClick={this.convert}>Convert</button>
        </div>
      </div>
    );
  }
}

ColorsList.propTypes = {
  toggleScrim: PropTypes.func.isRequired
};
