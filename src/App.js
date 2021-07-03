import React, { Component } from "react";
import "./App.css";
import "./start";
import { Container, Row, Col, Nav, CardDeck, Card } from "react-bootstrap";
import Podcast1 from "./images/podcast1.jpg";
import job from "./images/job.png";
import microdoses from "./images/microdoses.png";
import google from "./images/google.jpg";
import biron from "./images/biron.png";
import musee from "./images/musee.png";
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";
import podcast from "./images/podcast.png";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import $ from "jquery";

class App extends Component {
  render() {
    $(window).on("load", function () {
      $(".start");
    });
    return (
      <div className="App">
        <div className="loader">
          <div className="start">
            <Container>
              <h6>vishal</h6>
              <div className="brand">
                <h1>Brand and digital</h1>
                <h1>design company</h1>
              </div>
            </Container>
          </div>
        </div>
        <header>
          <Container>
            <Row>
              <Nav className="left">
                <Nav.Item>
                  <Nav.Link>Deux Huit Huit</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>Projects</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>Expertise</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>Team</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>Contact</Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="right">
                <Nav.Item>
                  <Nav.Link>Francais</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>Hire Us</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </Container>
        </header>

        <Container className="message">
          <h1>
            We’re on a mission to transform businesses <br /> into brands that
            are easy to love, online and beyond.
          </h1>
        </Container>

        <Container className="logo">
          <img src={Podcast1} alt="logo"></img>
          <h6>
            <strong>CONSULTANT - ARTISTS & PRODUCERS</strong>
          </h6>
          <h4>It's all good. (Photo: Arthur)</h4>
        </Container>

        <Container className="cards">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={job} />
              <Card.Body>
                <Card.Title>CAREERS</Card.Title>
                <Card.Text>We're hiring. Two job openings!</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={microdoses} />
              <Card.Body>
                <Card.Title>DESIGN</Card.Title>
                <Card.Text>
                  The Micro Doses Branding Podcast — Deux Huit Huit makes its
                  on-air debut
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>

        <section className="projects">
          <Container>
            <h1>Ongoing Projects</h1>
            <Row>
              <div>
                <img src={google}></img>
                <p>Google Shanghai</p>
              </div>

              <div>
                <img src={biron}></img>
                <p>Biron</p>
              </div>

              <div>
                <img src={musee}></img>
                <p>Montreal Museum of Fine Arts</p>
              </div>
            </Row>
          </Container>
        </section>

        <Container className="portfolio">
          <Row>
            <div>
              <img src={photo1}></img>
              <p>DIGITAL PORTFOLIO</p>
              <h6>Leloi.ca</h6>
            </div>

            <div>
              <img src={photo2}></img>
              <p>WEBSITE</p>
              <h6>Grands Ballets Canadiens</h6>
            </div>

            <div>
              <img src={photo3}></img>
              <p>WEBSITE</p>
              <h6>Sago Mini</h6>
            </div>
          </Row>
        </Container>

        <Container className="podcast">
          <img src={podcast}></img>
          <Row>
            <p>MICRO DOSES (FRENCH)</p>
            <h6>Listen on Spotify</h6>
          </Row>
        </Container>

        <Container className="subscribe">
          <Row className="box">
            <h6>Subscribe to our newsletter</h6>
            <div className="brder"></div>
            <Row>
              <div className="contain">
                <div className="letter">F</div>
                <div className="social">Like us on Facebook</div>
              </div>

              <div className="contain">
                <div className="letter">T</div>
                <div className="social">Follow us on Twitter</div>
              </div>

              <div className="contain">
                <div className="letter">I</div>
                <div className="social">Follow us on Instagram</div>
              </div>

              <div className="contain">
                <div className="letter">G</div>
                <div className="social">Fork us on GitHub</div>
              </div>
            </Row>
          </Row>

          <Row className="box-2">
            <Col className="col-left" xs={12} md={8}>
              <p>© Deux Huit Huit. MMXXI v3.6.8</p>
              <p>Terms of service</p>
              <p>Found a bug?</p>
            </Col>
            <Col className="col-right" xs={6} md={4}>
              <Row>
                <p>Back to top</p>
                <ArrowUpwardIcon></ArrowUpwardIcon>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
