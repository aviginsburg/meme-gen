import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();

    this.state = {
      topText: "One does not simply",
      bottomText: "build a meme API ",
      image: "http://i.imgflip.com/1bij.jpg",
      isLoading: false,
      allMemeImgs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
    this.setState({ isLoading: false });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randImg = allMemeImgs[this.state.randImg].url;
    this.setState({
      image: randImg
    });
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            value={this.state.topText}
            onChange={this.handleChange}
            placeholder="Top text"
          />
          <input
            type="text"
            value={this.state.bottomText}
            onChange={this.handleChange}
            placeholder="Bottom text"
          />
          <button onClick={this.handleSubmit}>Generate!</button>
        </form>

        <div className="meme">
          <img src={this.state.image} alt={this.state.allMemeImgs.name} />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
