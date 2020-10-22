import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import MicIcon from "@material-ui/icons/Mic";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ReactPlayer from "react-player";
import { ReactMic } from "react-mic";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "../styles/Record.css";

class Record extends React.Component {
  state = {
    showYT: true,
    audioFile: null,
    youtubeURL: "",
    audioBlob: null,
    BlobURL: null,
    isRecording: false,
    isBlocked: false,
    hideURL: true,
    returnedURL: "",
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onFileChange = (e) => {
    this.setState({ audioFile: e.target.files[0] });
  };
  sendClip = async (e) => {
    const files = this.state.audioFile;
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "geofut");

    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/dathbcjpu/video/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    this.setState({ returnedURL: file.url });
    this.setState({ hideURL: false });
    navigator.clipboard.writeText(this.state.returnedURL);
  };
  toggleYT = () => {
    this.setState({ showYT: !this.state.showYT });
  };
  removeYT = () => {
    this.setState({ youtubeURL: "" });
  };
  removeClip = () => {
    this.setState({ audioBlob: null });
    this.setState({ blobURL: null });
  };

  startRecording = () => {
    this.setState({ record: true });
  };

  stopRecording = () => {
    this.setState({ record: false });
  };
  onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    this.setState({ audioBlob: recordedBlob });
    this.setState({ blobURL: recordedBlob.blobURL });
  };
  setURL = (e) => {
    console.log(e.target.value);
    this.setState({ youtubeURL: e.target.value });
  };
  render() {
    return (
      <div className="recordDiv">
        <h1 className="compH1">Record a clip</h1>
        <div className="instructions">
          <p>Add a YouTube backing track to help you stay in time (optional)</p>
          <p>
            Prepare to record! Once ready click the Record button to begin and
            the Stop to end recording
          </p>
          <p>
            Listen to your clip back! Delete your clip and start again if you
            are unhappy with it
          </p>
          <p>
            Once you are happy, click the 3 dots on the audio clip and then
            click Download
          </p>
          <p>Click Choose File and select the audio file you just saved, and then click Upload</p>
          <p>
            When successful, you are given the link to your audio! It's now time
            to head to the Submit page to personalise your cover
          </p>
        </div>
        <form onSubmit={this.saveCover}>
          <div>
            <FormControlLabel
              value="start"
              control={<Checkbox color="secondary" />}
              label="Add Youtube Backing Track"
              labelPlacement="start"
              onChange={this.toggleYT}
            />

            <div className="youtubeDiv" hidden={this.state.showYT}>
              <Input
                value={this.state.youtubeURL}
                className="Input"
                name="youtubeURL"
                placeholder="Youtube URL"
                onChange={this.setURL}
                inputProps={{ "aria-label": "description" }}
              />
              <Button
                onClick={this.removeYT}
                variant="contained"
                startIcon={<YouTubeIcon />}
              >
                Clear
              </Button>
              <ReactPlayer
                className="reactPlayer"
                url={this.state.youtubeURL}
                controls
              />
            </div>
          </div>
          <div>
            <ReactMic
              record={this.state.record}
              visualSetting="frequencyBars"
              className="sound-wave"
              onStop={this.onStop}
              onData={this.onData}
              strokeColor="#babf30"
              backgroundColor="#291d1d"
              mimeType="audio/mp3"
            />
            <div id="audio">
              {this.state.blobURL == null ? (
                ""
              ) : (
                <audio src={this.state.blobURL} controls></audio>
              )}
            </div>
            <Button
              id="start"
              onClick={this.startRecording}
              variant="contained"
              color="primary"
              startIcon={<MicIcon />}
            >
              Record
            </Button>
            <Button
              onClick={this.stopRecording}
              id="stop"
              variant="contained"
              startIcon={<StopRoundedIcon />}
            >
              Stop
            </Button>
            <Button
              id="delete"
              onClick={this.removeClip}
              variant="contained"
              color="secondary"
              startIcon={<DeleteForeverIcon />}
            >
              Delete
            </Button>
          </div>
          <br />
          <div>
            <input type="file" name="audioFile" onChange={this.onFileChange} />
            <Button
              variant="contained"
              color="default"
              onClick={this.sendClip}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </div>
          <div hidden={this.state.hideURL}>
            <h2>{this.state.returnedURL}</h2>
            <p>Link copied to clipboard!</p>
            <a href="/home/submit">Submit my cover</a>
          </div>
        </form>
      </div>
    );
  }
}
export default Record;
