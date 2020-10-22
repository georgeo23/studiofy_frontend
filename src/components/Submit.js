import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SaveIcon from "@material-ui/icons/Save";

class Submit extends React.Component {
  state = {
    artistName: "",
    songName: "",
    coverName: "",
    coverURL: "",
    genreName: "",
    genres: [
      "Rock",
      "Indie",
      "Electronic",
      "Pop",
      "Punk Rock",
      "Blues",
      "Jazz",
      "Hip-Hop",
      "Heavy Metal",
      "Funk Rock",
      "Country",
      "Classical",
      "Film/TV"
    ],
  };
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  saveCover = () => {
    if (
      this.state.artistName != "" &&
      this.state.coverName != "" &&
      this.state.songName != "" &&
      this.state.coverURL != "" &&
      this.state.genreName != ""
    ) {
      const coverData = {
        username: this.props.username,
        cover_title: this.state.coverName,
        cover_artist: this.state.artistName,
        cover_song: this.state.songName,
        cover_genre: this.state.genreName,
        audio_url: this.state.coverURL,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(coverData),
      };
      fetch("/core/covers/", options)
        .then((r) => r.json())
        .then((data) => console.log(data));
      if (window.confirm('Your cover has been saved!')) {
        window.location.reload()
      }
      
    }
  };
  render() {
    return (
      <>
      <h1 className="compH1">Submit your Cover</h1>
        <div>
          <Input
            name="artistName"
            onChange={this.handleInput}
            className="Input"
            placeholder="Artist Name"
            inputProps={{ "aria-label": "description" }}
          />
          <br />
          <Input
            name="songName"
            onChange={this.handleInput}
            className="Input"
            placeholder="Song Name"
            inputProps={{ "aria-label": "description" }}
          />
          <br />
          <Input
            name="coverName"
            onChange={this.handleInput}
            className="Input"
            placeholder="Cover Name"
            inputProps={{ "aria-label": "description" }}
          />
          <InputLabel id="demo-mutiple-name-label">Select a Genre</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            onChange={this.handleInput}
            name="genreName"
            value={this.state.genreName}
          >
            {this.state.genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
          <br />
          <Input
            name="coverURL"
            onChange={this.handleInput}
            className="Input"
            placeholder="Cover URL"
            inputProps={{ "aria-label": "description" }}
          />
        </div>
        <Button
          onClick={this.saveCover}
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </>
    );
  }
}
export default Submit;
