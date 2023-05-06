"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Carousel } from "react-bootstrap"
import Image from "next/image";
import Logo from '../components/Logo Andrey.png'

function Projects() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);

  };
  return (
    <div className="ProjectsH2">
      <h2>My Projects</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vector-premium/banner-diseno-colorido-azul-oscuro-digital-tecnologia-red_181182-33509.jpg" height={270}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fw800/background/20220523/pngtree-technology-circuit-lines-shiny-banner-image_1391389.jpg" height={270}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/hrltx12pl8hq/4ACnMj4WVSOZRZt0jHu9h5/1506f652bcd70f4dc3e88219fefea858/shutterstock_739595833-min.jpg?fit=fill&w=800&h=300" height={270}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

  );
}

export default Projects;