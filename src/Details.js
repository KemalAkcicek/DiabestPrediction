import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

const Details = () => {
  const { id } = useParams();
  const [detaiL, setDetail] = useState(null);
  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/form/getData/${id}`
        );
        setDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Hata", error);
      }
    };

    fetchDetailData();
  }, [id]);

  if (!detaiL) {
    return <div>Loading...</div>;
  }
  //Glikoz Miktarına göre önerilen branş
  let glucoseRecommendation = "";
  if (detaiL.Glucose < 100) {
    glucoseRecommendation = "Genel Hekim";
  } else if (detaiL.Glucose >= 100 && detaiL.Glucose <= 125) {
    glucoseRecommendation = "Endokrinolog";
  } else {
    glucoseRecommendation = "Diyabet Uzmanı";
  }

  //Kan basıncı Miktarına göre önerilen branş
  let bloodPressureRecommendation = "";
  if (detaiL.BloodPressure < 120 || detaiL.BloodPressure > 80) {
    bloodPressureRecommendation = "Kardiyolog";
  } else {
    bloodPressureRecommendation = "Genel Hekim";
  }

  // Cilt kalınlığı  göre önerilen branş
  let skinThicknessRecommendation = "";
  if (detaiL.SkinThickness > 3) {
    skinThicknessRecommendation = "Dermatolog";
  } else {
    skinThicknessRecommendation = "Genel Hekim";
  }
  //İnsülin değerine göre önerilen branş
  let insulinRecommendation = "";
  if (detaiL.Insulin < 5) {
    insulinRecommendation = "Endokrinolog";
  } else {
    insulinRecommendation = "Diyabet Uzmanı";
  }

  // Vücut Kitle İndeksi  miktarına göre önerilen branş
  let bmiRecommendation = "";
  if (detaiL.BMI < 18.5) {
    bmiRecommendation = "Diyetisyen";
  } else if (detaiL.BMI >= 18.5 && detaiL.BMI <= 24.9) {
    bmiRecommendation = "Genel Hekim";
  } else if (detaiL.BMI >= 25 && detaiL.BMI <= 29.9) {
    bmiRecommendation = "Beslenme Uzmanı";
  } else {
    bmiRecommendation = "Endokrinolog";
  }
  return (
    <div>
      <h1>Diyabet Riski Tahmininiz</h1>
      <p>
        {detaiL.result2 === 0
          ? " Diyabet olma riskiniz düşüktür."
          : "Diyabet olma riskiniz yüksektir. Bu sonuç tıbbi bir tanı değildir, lütfen doktorunuza danışarak detaylı bilgi edinin."}
      </p>

      <p>
        Aşağıdaki tabloda, girdiğiniz verilerle ilgili tahmini diyabet riskiniz
        ve sağlıklı referans aralıklar görüntülenmektedir.
      </p>
      <h2>Adı Soyadı:{detaiL.adiSoyadi}</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tahlil</th>
            <th>Referans Değeri</th>
            <th>Sonuç</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>1</td>
            <td>Gebelik Sayısı</td>
            <td>1-2</td>
            <td>{detaiL.pregnancies}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Glikoz Miktarı</td>
            <td>70-100 miligram</td>
            <td>{detaiL.glucose} miligram</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Kan Basıncı</td>
            <td>120/80 mmHg</td>
            <td>{detaiL.bloodPressure} mmHg</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Cilt Kalınlığı</td>
            <td> 1 ila 2.5 milimetre </td>
            <td>{detaiL.skinThickness} milimetre</td>
          </tr>
          <tr>
            <td>5</td>
            <td>İnsülin Miktarı</td>
            <td> 5-15 mikroIU/mL </td>
            <td>{detaiL.insulin} mikroIU/mL</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Vücüt Kitle İndeksi</td>
            <td>18.5 ile 24.9 </td>
            <td>{detaiL.bmi}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Diyabet Soy Fonksiyonu</td>
            <td>0 ile 1 </td>
            <td>{detaiL.diabetesPedigreeFunction}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Yaş</td>
            <td> 18 ila 65 </td>
            <td>{detaiL.age}</td>
          </tr>
        </tbody>
      </Table>
      <h1>Önerilen Branşlar</h1>
      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {[
          glucoseRecommendation,
          bloodPressureRecommendation,
          bmiRecommendation,
          insulinRecommendation,
          skinThicknessRecommendation,
        ]
          .filter(
            (recommendation, index, self) =>
              self.indexOf(recommendation) === index
          )
          .map((recommendation, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ flex: "1" }}>
                {index + 1}.{recommendation}
              </span>{" "}
              <button
                style={{
                  backgroundColor: "white",
                  color: "blue",
                  fontSize: 15,
                  marginLeft: "auto",
                }}
                onClick={() => {
                  window.open("https://mhrs.gov.tr/vatandas/#/");
                }}
              >
                Randevu Al
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Details;
