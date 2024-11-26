import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormListt = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/form/getData"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Hata", error);
      }
    };

    fetchData(); // fetchData fonksiyonunu çağırarak verileri alma işlemini gerçekleştiriyoruz.
  }, []); // dependency array'i boş bırakarak, bu etkileşim yalnızca bileşenin ilk render edildiğinde gerçekleşecek şekilde ayarlıyoruz.

  return (
    <div>
      {/* <ul>
                {data.map((dataa,index) => (
                
                    <li key={index}>{dataa.adiSoyadi}</li>
                ))}
            </ul> */}

      <h1>Hasta Listesi</h1>

      <ListGroup>
        {data.map((data1, index) => (
          <ListGroupItem
            style={{
              backgroundColor: data1.result2 === 0 ? "#32cd32" : "#FF4500",
            }}
            key={index}
          >
            {/* {data1.adiSoyadi} */}
            <p style={{ color: "white" }}>{data1.adiSoyadi}</p>
            <button
              style={{
                backgroundColor: "white",
                color: "blue",
                fontSize: 15,
                float: "right",
              }}
              onClick={() => navigate(`/details/${data1.id}`)}
            >
              Detaylar
            </button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default FormListt;
