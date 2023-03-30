import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import teeko from "../../Assets/Projects/teeko.png";
import yoga from "../../Assets/Projects/yoga.png";
import poke from "../../Assets/Projects/poke.png";
import scheduler from "../../Assets/Projects/scheduler.png";
import flight from "../../Assets/Projects/flight.png";
import SceneRecogNet from "../../Assets/Projects/scene.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scheduler}
              isBlog={false}
              title="CoW Stride Scheduler"
              description="This project improves the performance and memory usage of the xv6 operating system by implementing copy-on-write (CoW) forking and stride scheduling algorithms. These optimizations reduce system call times and improve CPU allocation for a more efficient system."
              ghLink="https://github.com/TongluY/Xv6-Kernel-Copy-on-Write-Forking-and-Stride-Scheduler-Implementation-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SceneRecogNet}
              isBlog={false}
              title="Scene Recognetion"
              description="Designed and implemented a deep neural network model in PyTorch for scene recognition using the LeNet-5 architecture and customized convolutional neural network models. Explored various training configurations and achieved high accuracy on the MiniPlaces dataset. "
              ghLink="https://github.com/TongluY/Scene-Recognition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poke}
              isBlog={false}
              title="PokeCluster"
              description="Implemented hierarchical clustering algorithm in Python using NumPy and Matplotlib libraries to group Pokémon data into clusters based on a 6-dimensional feature representation. The approach aimed to achieve improved organization and visualization of the data, which can be beneficial for further analysis and insights."
              ghLink="https://github.com/TongluY/Hierarchical-Clustering-on-Pokemon-Stats.git"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teeko}
              isBlog={false}
              title="AI Teeko Player"
              description="This AI game player for Teeko uses minimax algorithm to make strategic moves by predicting future outcomes. It includes a scoring system to evaluate non-terminal game states and additional functions to generate and evaluate possible moves. With this project, human players can challenge an intelligent Teeko player."
              ghLink="https://github.com/TongluY/AI-Teeko-Player.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Search System"
              description="It helps users find the best American Airlines travel itinerary between two airports in the US in 2022, based on distance, cost, or a combination of both. Users can exclude certain airports from their itinerary. The app uses Dijkstra's algorithm to calculate the shortest path between two airports by analyzing flight data from a DOT file."
              ghLink="https://github.com/TongluY/Flight-Search-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yoga}
              isBlog={false}
              title="Yoga GPT"
              description="Yoga GPT is an innovative project that leverages the power of GPT-3 API to create personalized yoga routines for users. With Yoga GPT, users can easily input their level of yoga experience, preferred yoga style, and desired goals. The application then generates a customized yoga routine that is tailored to the user's unique needs and preferences. "
              ghLink="https://github.com/TongluY/Yoga-GPT"
              // demoLink   <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
