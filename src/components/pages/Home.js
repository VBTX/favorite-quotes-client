import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";
import RandomQuote from "../quotes/RandomQuote";
import Carousel from "react-bootstrap/Carousel";
import "../quotes/QuickCard.css";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/v1/quotes")
      .then((response) => response.json())
      .then((quotes) => this.setState({ quotes }));
  }

  render() {
    return (
      <div className='container'>
        {this.props.currentUser ? (
          <>
            <br />

            <h2
              style={{
                fontFamily: "'Special Elite', cursive"
              }}
            >
              <b> Welcome, {this.props.currentUser.name}! </b> <RandomQuote />
            </h2>
          </>
        ) : (
          <>
            <h3
              style={{ fontFamily: "'Special Elite', cursive", padding: "2%" }}
            >
              <b>
                {" "}
                Welcome, stranger! :)
                <br />
                <br />
                This app allows you to collect your favorite quotes and related
                notes. If you want to start your personal quote collection,
                <br /> please{" "}
                <Link
                  to='/signup'
                  className='button-link'
                  style={{ background: "black", padding: "1%" }}
                >
                  SIGN UP
                </Link>
                or{" "}
                <Link
                  to='/login'
                  className='button-link'
                  style={{ background: "black", padding: "1%" }}
                >
                  LOG IN
                </Link>
              </b>
            </h3>
            <div style={{ justifyContent: "center" }}>
              <Carousel fade={true}>
                {this.state.quotes.map((quote) => (
                  <Carousel.Item className='carousel-body'>
                    <hr />
                    <h3>
                      <i>
                        <strong>{quote.text || quote.quote}</strong>
                      </i>
                    </h3>

                    <h5>
                      Author:{" "}
                      <a
                        href={`https://www.google.com/search?q=${quote.author}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {quote.author}
                      </a>
                      ; Source:{" "}
                      {quote.source || <a href='theysaidso.com'>TheySaidSo</a>}
                    </h5>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  };
};

export default connect(mapStateToProps)(Home);
