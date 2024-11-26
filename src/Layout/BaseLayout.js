import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Naviagation from "../componets/Naviagation";

const BaseLayout = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Naviagation />
        </Col>
      </Row>
 
      <Row>
        <Col>
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};
export default BaseLayout;
