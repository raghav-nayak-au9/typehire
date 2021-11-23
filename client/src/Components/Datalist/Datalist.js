import "./Datalist.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Datalist = () => {
  const [result, setResult] = useState([]);

  const fetchDataHandler = () => {
    axios
      .get("http://localhost:8080/api/getData")
      .then((res) => {
        setResult(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  console.log(result);

  return (
    <div>
      {result.length === 0 ? (
        <h1 className="no-data">No Data Available</h1>
      ) : (
        <ul className="list-data">
          {result.map((elem) => {
            return (
              <li key={elem.id} className="card">
                <div>
                  <h1>{elem.id}</h1>
                  <p>{elem.title}</p>
                  <p>{elem.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Datalist;
