import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./Layout/BaseLayout";
import FormNew from "./FormNew";
import FormResult from "./componets/FormResult";
import { useState } from "react";
import FormListt from "./FormListt";
import Details from "./Details";
import Home from "./Home";
import Login from "./componets/Login/Login";
import Signup from "./componets/Login/Signup";

function App() {
  const [formResult, setFormResult] = useState(null);
  const [data, setData] = useState(null);


  const handleFormSubmit = (result, data) => {
    setFormResult(result);
    setData(data);
  };

  return (
    <div className="App">
      <BrowserRouter>
     

        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route
              path="/diyabetform"
              element={<FormNew onFormSubmit={handleFormSubmit} />}
            ></Route>
            <Route
              path="/form-result"
              element={<FormResult formResult={formResult} data={data} />}
            ></Route>
            <Route path="/hastaListesi" element={<FormListt />}></Route>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
