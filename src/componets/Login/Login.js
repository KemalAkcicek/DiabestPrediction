import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Naviagation from "../Naviagation";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedin] = useState();
  const [login, setLogin] = useState({
    kullanıcıAdi: "",
    parola: "",
  });
  const handleSignup = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    axios
      .get("http://localhost:8081/signup/getData")
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        alert(error, "Hatası var");
      });
    const users = data.find(
      (user) =>
        user.kullanıcıAdı === login.kullanıcıAdi || user.parola === login.parola
    );

    if (users) {
      alert("Başarıyla Giriş Yapıldı");
      navigate("/home");
      setIsLoggedin(true);
    } else {
      alert("Kullanıcı Adı veya Parola Hatalı!!!!");
      setIsLoggedin(false);
    }
    <Naviagation logged={isLoggedIn} setLogged={setIsLoggedin}></Naviagation>;

    setLogin({
      kullanıcıAdi: "",
      parola: "",
    });
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Kullanıcı Girişi</h1>
      <h4 className="login-label">Kullanıcı Adı</h4>
      <input
        type="text"
        placeholder="Kullanıcı Adı Giriniz"
        value={login.kullanıcıAdi}
        onChange={(event) =>
          setLogin({ ...login, kullanıcıAdi: event.target.value })
        }
        className="login-input"
      />
      <h4 className="login-label">Parola</h4>
      <input
        placeholder="Parola Giriniz"
        type="password"
        value={login.parola}
        onChange={(event) =>
          setLogin({ ...login, parola: event.target.value })
        }
        className="login-input"
      />
      <br />
      <button className="login-button" onClick={handleLogin}>
        Giriş Yap
      </button>
      <button className="login-button" onClick={handleSignup}>
        Kayıt Ol
      </button>
    </div>
  );
};
export default Login;
