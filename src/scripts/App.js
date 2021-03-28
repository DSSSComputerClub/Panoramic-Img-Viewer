import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

import ImgViewer from "../components/img-viewer-360";

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Container>
        <Carousel
          controls={false}
          activeIndex={index}
          onSelect={handleSelect}
          interval={10000}
        >
          <Carousel.Item>
            <ImgViewer img={img1} />
            <Carousel.Caption>
              <h3>Slide 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img2} />
            <Carousel.Caption>
              <h3>Slide 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img3} />
            <Carousel.Caption>
              <h3>Slide 3</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img4} />
            <Carousel.Caption>
              <h3>Slide 4</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img5} />
            <Carousel.Caption>
              <h3>Slide 5</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img6} />
            <Carousel.Caption>
              <h3>Slide 6</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img7} />
            <Carousel.Caption>
              <h3>Slide 7</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img8} />
            <Carousel.Caption>
              <h3>Slide 8</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img9} />
            <Carousel.Caption>
              <h3>Slide 9</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img10} />
            <Carousel.Caption>
              <h3>Slide 10</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img11} />
            <Carousel.Caption>
              <h3>Slide 11</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImgViewer img={img12} />
            <Carousel.Caption>
              <h3>Slide 12</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default App;
