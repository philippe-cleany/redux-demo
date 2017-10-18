import React, { Component } from 'react';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';

class Artist extends Component {

  createArtist() {
    return (
      this.props.artist.map((data) => {
          return (
            <div key={data.id} className="ui segment">
              <p style={{color: 'black'}}>{data.name} - {data.title}</p>
            </div>
          )
      })
    )
  }

  render() {
    return(
      <div class="ui container">
          {this.createArtist()}
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    artist: state.artist
  }
}

export default connect(mapStateToProps)(Artist);
