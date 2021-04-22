import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [quoteData, setQuoteData] = useState(null);

  function setLocalStorage() {
    localStorage.setItem("project_selector", "random-quote-machine");
    localStorage.setItem("fCC_random-quote-machine_hide", true);
  }

  function updateQuoteData(response) {
    setQuoteData(response.data);
  }

  function getQuote() {
    let url = "https://api.quotable.io/random";
    axios.get(url).then(updateQuoteData);
  }
  if (quoteData !== null) {
    return (
      <Container className="App">
        <Row>
          <Col>
            <header>
              <h1>Random Quote Machine</h1>
            </header>
          </Col>
        </Row>
        <Row>
          <Col id="quote-box" className="quoteBox">
            <Row>
              <Col id="text" className="quoteText">
                {quoteData.content}
              </Col>
            </Row>
            <Row>
              <Col id="author" className="quoteAuthor">
                {quoteData.author}
              </Col>
            </Row>
            <Row className="buttons">
              <Col className="twitterButton">
                <a
                  href="https://twitter.com/intent/tweet"
                  id="tweet-quote"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </Col>
              <Col className="newQuoteButton">
                <Button variant="dark" id="new-quote" onClick={getQuote}>
                  New Quote
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="footer">
          <Col>
            <footer>
              <a
                href="https://github.com/ssrome/fcc_random_quote_machine"
                target="_blank"
                rel="noreferrer"
              >
                Open-sourced code
              </a>{" "}
              by Sabrina Samuel
            </footer>
          </Col>
        </Row>
      </Container>
    );
  } else {
    getQuote();
    setLocalStorage();
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
}

export default App;
