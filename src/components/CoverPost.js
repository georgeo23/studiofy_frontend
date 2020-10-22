import React from "react";

class CoverPost extends React.Component {
  render() {
    return (
      <>
        <h3>
          {this.props.title} by {this.props.username}
        </h3>
        <h4>
          A cover of {this.props.artist}'s {this.props.song}
        </h4>
        <h5>{this.props.genre}</h5>
        <audio src={this.props.url} controls></audio>
      </>
    );
  }
}
export default CoverPost