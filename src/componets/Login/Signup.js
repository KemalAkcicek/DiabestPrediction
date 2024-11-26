import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    KullanıcıAdı: "",
    Parola: "",
    Email: "",
    Number: "",
    ParolaOnayı: "",
  });

  const handleSignup = () => {
    if (signup.Parola !== signup.ParolaOnayı) {
      alert("Parolalar eşleşmiyor!");
      return;
    }

    const data = {
      kullanıcıAdı: signup.KullanıcıAdı,
      parola: signup.Parola,
      email: signup.Email,
      number: parseInt(signup.Number),
    };

    axios
      .post("http://localhost:8081/signup/save", data)
      .then((response) => {
        console.log(response);
        alert("Başarıyla Kaydedildi");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        alert("Kayıt işlemi başarısız oldu: " + error.message);
      });

    setSignup({
      KullanıcıAdı: "",
      Parola: "",
      Email: "",
      Number: "",
      ParolaOnayı: "",
    });
  };

  return (
    <div className="signup-container">
      <h1 className="signup-header">Kayıt Ekranı</h1>
      <div className="signup-form-group">
        <label className="signup-label">Kullanıcı Adı</label>
        <input
          type="text"
          required
          className="signup-input"
          value={signup.KullanıcıAdı}
          onChange={(event) =>
            setSignup({ ...signup, KullanıcıAdı: event.target.value })
          }
        />
      </div>
      <div className="signup-form-group">
        <label className="signup-label">Parola</label>
        <input
          type="password"
          required
          className="signup-input"
          value={signup.Parola}
          onChange={(event) =>
            setSignup({ ...signup, Parola: event.target.value })
          }
        />
      </div>
      <div className="signup-form-group">
        <label className="signup-label">Parola Onayı</label>
        <input
          type="password"
          required
          className="signup-input"
          value={signup.ParolaOnayı}
          onChange={(event) =>
            setSignup({ ...signup, ParolaOnayı: event.target.value })
          }
        />
      </div>
      <div className="signup-form-group">
        <label className="signup-label">E-posta Adresi</label>
        <input
          type="email"
          required
          className="signup-input"
          value={signup.Email}
          onChange={(event) =>
            setSignup({ ...signup, Email: event.target.value })
          }
        />
      </div>
      <div className="signup-form-group">
        <label className="signup-label">Telefon Numarası</label>
        <input
          type="number"
          required
          className="signup-input"
          value={signup.Number}
          onChange={(event) =>
            setSignup({ ...signup, Number: event.target.value })
          }
        />
      </div>
      <Button
        variant="success"
        className="signup-button"
        onClick={handleSignup}
      >
        Kayıt Ol
      </Button>
    </div>
  );
};

export default Signup;
