import { Button, Form, FormGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Body.css';

const FormNew = ({ onFormSubmit }) => {
  //useNaviage hooku ile bir buton basıldığı zaman yönlendirme yapabiliriyoruz
  const navigate = useNavigate();
  const [form, setForm] = useState({
    adiSoyadi: "",
    gebelik: "",
    glikozMiktari: "",
    kanBasinci: "",
    ciltKalinliği: "",
    insülin: "",
    BMI: "",
    DPF: "",
    yas: "",
    // Sonuç değişkeninde var
  });

  const formKaydet = (e) => {
    e.preventDefault();

    const data = {
      Pregnancies: form.gebelik,
      Glucose: form.glikozMiktari,
      BloodPressure: form.kanBasinci,
      SkinThickness: form.ciltKalinliği,
      Insulin: form.insülin,
      BMI: form.BMI,
      DiabetesPedigreeFunction: form.DPF,
      Age: form.yas,
      adiSoyadi: form.adiSoyadi,
   };
    axios
      .post("http://localhost:5000/predict", data)
      .then((response1) => {
        alert("Bilgileriniz başarırla alındı");
        const result = response1.data.message;
        console.log(response1.data);

        //İkinci post işlemi için form verilerini kullan
        const result2=response1.data.prediction;
        const formResultData = {
          pregnancies: parseInt(form.gebelik),
          glucose: parseInt(form.glikozMiktari),
          bloodPressure: parseInt(form.kanBasinci),
          skinThickness: parseInt(form.ciltKalinliği),
          insulin: parseInt(form.insülin),
          bmi: parseInt(form.BMI),
          diabetesPedigreeFunction: parseFloat(form.DPF),
          age: parseInt(form.yas),
          adiSoyadi: form.adiSoyadi,
          result2:result2,
        };
        
        //İkinci post işlemi
        axios
          .post("http://localhost:8081/api/form/saveData", formResultData)
          .then((response2) => {
            console.log(response2);
          })
          .catch((error) => {
            console.error(error);
            alert(error);
          });

        onFormSubmit(result, data);
        navigate("/form-result");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

    setForm({
      adiSoyadi: "",
      gebelik: "",
      glikozMiktari: "",
      kanBasinci: "",
      ciltKalinliği: "",
      insülin: "",
      BMI: "",
      DPF: "",
      yas: "",
    });
   };
  return (
    <div className="body">
      <Form style={{ padding: "20px" }} onSubmit={formKaydet}>
        <FormGroup className="mb-3">
          <Form.Label>Adı Soyadı</Form.Label>
          <br></br>
          <Form.Control
            name="adiSoyadi"
            type="text"
            value={form.adiSoyadi}
            onChange={(event) =>
              setForm({ ...form, adiSoyadi: event.target.value })
            }
          ></Form.Control>
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Gebelik sayısı</Form.Label>
          <br></br>
          <Form.Control
            name="Pregnancies"
            type="number"
            value={form.gebelik}
            onChange={(event) =>
              setForm({ ...form, gebelik: event.target.value })
            }
          ></Form.Control>
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Glikoz Miktarı</Form.Label>
          <br></br>
          <Form.Control
            name="Glucose"
            type="number"
            value={form.glikozMiktari}
            onChange={(event) =>
              setForm({ ...form, glikozMiktari: event.target.value })
            }
          ></Form.Control>
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Kan Basıncı</Form.Label>
          <br></br>
          <Form.Control
            name="BloodPressure"
            type="number"
            value={form.kanBasinci}
            onChange={(event) =>
              setForm({ ...form, kanBasinci: event.target.value })
            }
          ></Form.Control>
        </FormGroup>{" "}
        <FormGroup className="mb-3">
          <br></br>
          <Form.Label>Cilt Kalınlığı</Form.Label>
          <br></br>
          <Form.Control
            name="SkinThickness"
            type="number"
            value={form.ciltKalinliği}
            onChange={(event) =>
              setForm({ ...form, ciltKalinliği: event.target.value })
            }
          ></Form.Control>
        </FormGroup>{" "}
        <FormGroup className="mb-3">
          <br></br>
          <Form.Label>İnsülin Miktari</Form.Label>
          <br></br>
          <Form.Control
            name="Insulin"
            type="number"
            value={form.insülin}
            onChange={(event) =>
              setForm({ ...form, insülin: event.target.value })
            }
          ></Form.Control>
        </FormGroup>{" "}
        <FormGroup className="mb-3">
          <br></br>
          <Form.Label>Vücüt Kitle İndeksi</Form.Label>
          <br></br>
          <Form.Control
            name="BMI"
            type="number"
            value={form.BMI}
            onChange={(event) => setForm({ ...form, BMI: event.target.value })}
          ></Form.Control>
        </FormGroup>{" "}
        <FormGroup className="mb-3">
          <br></br>
          <Form.Label>Diyabet Soy Fonksiyonu</Form.Label>
          <br></br>
          <Form.Control
            name="DiabetesPedigreeFunction"
            type="number"
            value={form.DPF}
            onChange={(event) => setForm({ ...form, DPF: event.target.value })}
          ></Form.Control>
        </FormGroup>{" "}
        <FormGroup className="mb-3">
          <Form.Label>Yaş</Form.Label>
          <br></br>
          <Form.Control
            name="Age	"
            type="number"
            value={form.yas}
            onChange={(event) => setForm({ ...form, yas: event.target.value })}
          ></Form.Control>
        </FormGroup>
        <Button type="submit">Sonuç</Button>
      </Form>
    </div>
  );
};
export default FormNew;
