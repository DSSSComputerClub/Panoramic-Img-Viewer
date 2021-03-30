import React from "react";
import { Container, Button } from "react-bootstrap";

const HomeApp = () => {
  return (
    <div>
      <section className="wrapper landing">
        <Container>
          <div className="left">
            <h1>
              Shahrukh Qureshi <br />I like to code
            </h1>
            <Button
              variant="outline-light"
              className="w-50"
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click me
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default HomeApp;
