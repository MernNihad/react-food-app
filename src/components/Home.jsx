import React from "react";
import Card from "./Cards";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  let obj = [
    {
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Card Title",
      paragraph:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Card Title",
      paragraph:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Card Title",
      paragraph:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Card Title",
      paragraph:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  return (
    <>
      <Container>
        <Row className="p-3">
          {obj.map((item) => {
            return (
              <Col className="" lg="3" md="6" sm="12" xl="" xxl="">
                <Card value={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
