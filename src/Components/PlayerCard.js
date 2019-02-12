import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

export default class PlayerCard extends Component {


  render() {

    return (
      < Card onClick={() => this.props.clickHandler(this.props.player)} >
        < Card.Content >
            < Card.Header >{this.props.player.name}</ Card.Header >
            <Image src={this.props.player.img} />
            < Card.Description >Points: {this.props.player.points}</ Card.Description >
            < Card.Description >FG Percentage: {this.props.player.FG_percentage}</ Card.Description >
            < Card.Description >3Pt Percentage: {this.props.player.three_point_percentage}</ Card.Description >
            < Card.Description >FT Percentage: {this.props.player.FT_percentage}</ Card.Description >
        </ Card.Content >
      </ Card >
    )
  }
}
