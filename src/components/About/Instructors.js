import React from "react";
import "./Instructors.css";
import axios from "axios";

class Instructors extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const response = await axios(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/instructor"
    );
    console.log(response);
    this.setState({
      data: response.data
    });
  }

  render() {
    return (
      <div className="instructorMainContainer">
        <div className="bcmaDescription">
          <h5>music,</h5>
          <h5>dance &</h5>
          <h5>drama</h5>
        </div>
        <div className="instructorBottomContainer">
          <div className="instructorInnerContainer">
            <h1 className="instructorHeader">Our Tutors</h1>
            <div className="instructorProfilesContainer">
              {this.state.data.map((item, index) => (
                <div className="instructorProfileCard" key={index}>
                  <img
                    className="instructorImage"
                    src={item.image}
                    alt="Empty Image"
                  />
                  <div className="instructorDetails">
                    <h3>Faculty: {item.faculty}</h3>
                    <h2>Name : {item.name}</h2>
                    <h4>{item.description}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructors;
