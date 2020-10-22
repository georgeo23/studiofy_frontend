import React from "react";
import CoverPost from "./CoverPost";

class DashBoard extends React.Component {
  render() {
    if (this.props.coverData != undefined) {
      
      if (this.props.coverData[0] != undefined) {
        console.log(this.props.coverData[0].audio_url);
      }
    }
    return (
      <>
        <h1 className="compH1">Welcome to Studiofy - {this.props.username}'s Profile</h1>
        <h2>Listen to the newest covers</h2>
        <div className="gridContainer">
          <div className="coverItem">
            {this.props.coverData != undefined &&
            this.props.coverData[this.props.coverData.length -1] != undefined ? (
              <CoverPost
                title={this.props.coverData[this.props.coverData.length -1].cover_title}
                song={this.props.coverData[this.props.coverData.length -1].cover_song}
                artist={this.props.coverData[this.props.coverData.length -1].cover_artist}
                username={this.props.coverData[this.props.coverData.length -1].username}
                genre={this.props.coverData[this.props.coverData.length -1].cover_genre}
                url={this.props.coverData[this.props.coverData.length -1].audio_url}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="coverItem">
            {this.props.coverData != undefined &&
            this.props.coverData[this.props.coverData.length -2] != undefined ? (
              <CoverPost
                title={this.props.coverData[this.props.coverData.length -2].cover_title}
                song={this.props.coverData[this.props.coverData.length -2].cover_song}
                artist={this.props.coverData[this.props.coverData.length -2].cover_artist}
                username={this.props.coverData[this.props.coverData.length -2].username}
                genre={this.props.coverData[this.props.coverData.length -2].cover_genre}
                url={this.props.coverData[this.props.coverData.length -2].audio_url}
              />
            ) : (
              console.log("loading...")
            )}
          </div>
          <div className="coverItem">
            {this.props.coverData != undefined &&
            this.props.coverData[this.props.coverData.length -3] != undefined ? (
              <CoverPost
                title={this.props.coverData[this.props.coverData.length -3].cover_title}
                song={this.props.coverData[this.props.coverData.length -3].cover_song}
                artist={this.props.coverData[this.props.coverData.length -3].cover_artist}
                username={this.props.coverData[this.props.coverData.length -3].username}
                genre={this.props.coverData[this.props.coverData.length -3].cover_genre}
                url={this.props.coverData[this.props.coverData.length -3].audio_url}
              />
            ) : (
              console.log("loading...")
            )}
          </div>
          <div className="coverItem">
            {this.props.coverData != undefined &&
            this.props.coverData[this.props.coverData.length -4] != undefined ? (
              <CoverPost
                title={this.props.coverData[this.props.coverData.length -4].cover_title}
                song={this.props.coverData[this.props.coverData.length -4].cover_song}
                artist={this.props.coverData[this.props.coverData.length -4].cover_artist}
                username={this.props.coverData[this.props.coverData.length -4].username}
                genre={this.props.coverData[this.props.coverData.length -4].cover_genre}
                url={this.props.coverData[this.props.coverData.length -4].audio_url}
              />
            ) : (
              <p>Make a cover...</p>
            )}
          </div>
          <div className="coverItem">
            {this.props.coverData != undefined &&
            this.props.coverData[this.props.coverData.length -5] != undefined ? (
              <CoverPost
                title={this.props.coverData[this.props.coverData.length -5].cover_title}
                song={this.props.coverData[this.props.coverData.length -5].cover_song}
                artist={this.props.coverData[this.props.coverData.length -5].cover_artist}
                username={this.props.coverData[this.props.coverData.length -5].username}
                genre={this.props.coverData[this.props.coverData.length -5].cover_genre}
                url={this.props.coverData[this.props.coverData.length -5].audio_url}
              />
            ) : (
              <p>What are you waiting for...</p>
            )}
          </div>
          <div className="coverItem">
            {this.props.coverData != undefined &&
            this.props.coverData[this.props.coverData.length -6] != undefined ? (
              <CoverPost
                title={this.props.coverData[this.props.coverData.length -6].cover_title}
                song={this.props.coverData[this.props.coverData.length -6].cover_song}
                artist={this.props.coverData[this.props.coverData.length -6].cover_artist}
                username={this.props.coverData[this.props.coverData.length -6].username}
                genre={this.props.coverData[this.props.coverData.length -6].cover_genre}
                url={this.props.coverData[this.props.coverData.length -6].audio_url}
              />
            ) : (
              <p>Fill this spot...</p>
            )}
          </div>
          <div className="coverItem">
            {this.props.coverData != undefined &&
            this.props.coverData[this.props.coverData.length -7] != undefined ? (
              <CoverPost
                title={this.props.coverData[this.props.coverData.length -7].cover_title}
                song={this.props.coverData[this.props.coverData.length -7].cover_song}
                artist={this.props.coverData[this.props.coverData.length -7].cover_artist}
                username={this.props.coverData[this.props.coverData.length -7].username}
                genre={this.props.coverData[this.props.coverData.length -7].cover_genre}
                url={this.props.coverData[this.props.coverData.length -7].audio_url}
              />
            ) : (
              <p>Produce something...</p>
            )}
          </div>
          <div className="coverItem">
            {this.props.coverData != undefined &&
            this.props.coverData[this.props.coverData.length -8] != undefined ? (
              <CoverPost
                title={this.props.coverData[this.props.coverData.length -8].cover_title}
                song={this.props.coverData[this.props.coverData.length -8].cover_song}
                artist={this.props.coverData[this.props.coverData.length -8].cover_artist}
                username={this.props.coverData[this.props.coverData.length -8].username}
                genre={this.props.coverData[this.props.coverData.length -8].cover_genre}
                url={this.props.coverData[this.props.coverData.length -8].audio_url}
              />
            ) : (
              <p>This spot could be yours...</p>
            )}
          </div>
          <div className="coverItem">
            {this.props.coverData != undefined &&
            this.props.coverData[this.props.coverData.length -9] != undefined ? (
              <CoverPost
                title={this.props.coverData[this.props.coverData.length -9].cover_title}
                song={this.props.coverData[this.props.coverData.length -9].cover_song}
                artist={this.props.coverData[this.props.coverData.length -9].cover_artist}
                username={this.props.coverData[this.props.coverData.length -9].username}
                genre={this.props.coverData[this.props.coverData.length -9].cover_genre}
                url={this.props.coverData[this.props.coverData.length -9].audio_url}
              />
            ) : (
              <p>There's a spot for you...</p>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default DashBoard;
