import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Naviagation = ({ logged }) => {
  const butonhandle = () => {
    // Buraya state göre çıkış yap yapılacak
  };
  return (
    <Navbar style={{ fontSize: "25px" }} bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Sağlık Takip Analiz Sistemi</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            Anasayfa
          </Nav.Link>
          <Nav.Link as={Link} to="/diyabetform">
            Diyabet
          </Nav.Link>
          <Nav.Link as={Link} to="/hastaListesi">
            Hasta Listesi
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            style={{ marginLeft: "10px" }}
            as={Link}
            to="/login"
            onClick={butonhandle}
          >
            {logged ? "Çıkış Yap" : "Giriş Yap"}
            {console.log(logged)}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Naviagation;
