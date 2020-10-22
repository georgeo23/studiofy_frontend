import React from "react";
import CoverPost from "./CoverPost";

class Covers extends React.Component {
  render() {
      
    return (
      <>
        <h1 className="compH1">All Covers</h1>
        <div className="gridContainer">
        {this.props.coverData.map((post, idx) =>
            this.props.username == post.username ? (
              <div key={idx} className="myCoverItem">
                <CoverPost
                  title={post.cover_title}
                  song={post.cover_song}
                  artist={post.cover_artist}
                  username={post.username}
                  genre={post.cover_genre}
                  url={post.audio_url}
                />
              </div>
            ) : (
            <div key={idx} className="coverItem">
              <CoverPost
                title={post.cover_title}
                song={post.cover_song}
                artist={post.cover_artist}
                username={post.username}
                genre={post.cover_genre}
                url={post.audio_url}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Covers;
