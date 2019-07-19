import React from "react";
import "./OurStory.css";
import axios from "axios";
import { Link } from "react-router-dom";

class OurStory extends React.Component {
  state = {
    data: []
  };

  // async componentDidMount() {
  //   const response = await axios.get(
  //     "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/about"
  //   );
  //   console.log(response);
  //   this.setState({
  //     data: response.data
  //   });
  // }
  async componentDidMount () {
    this.getAbouts()
  }

  getAbouts = async () => {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/about"
    );
    console.log(response);
    this.setState({
      data: response.data
    });
  }
 
  deleteAbout = async item => {
    try {
      const response = await axios.delete(
        `https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/about/${
          item._id
        }`
      );
      console.log(response);
      this.getAbouts();
    } catch (error) {
      this.setState({ errors: error.response });
    }
  };


  render() {
    const { onContentSelect, authentication } = this.props;
    console.log(this.props);

    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">About Us</h1>

            {this.state.data.map((item, index) => (
              <div className="about-description-container" key={index}>
                <div className="about-description">
                  <p>{item.description}</p>
                </div>
                <div>
                  <Link
                    id="about-update"
                    to="/admin/about/update"
                    onClick={() => onContentSelect(item)}
                  >
                    <button className="class-button">Update Aboout</button> 
                  </Link>
                  <button id="delete-button" className="class-button"
                        onClick={() => this.deleteAbout(item)}
                      >
                        Delete About
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">About Us</h1>

            {this.state.data.map((item, index) => (
              <div className="about-description-container"key={index}>
                <div className="about-description">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default OurStory;
