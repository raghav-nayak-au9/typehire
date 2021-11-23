import "./Modal.css";
import { fileUpload } from "../../Store/Actions/fileAction";
import { useState } from "react";
import { MODALCLOSE } from "../../Store/Actions/modalActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export const FILESUCCESS = "FILESUCCESS";

const Modal = ({ history }) => {
  const [fileValue, setFileValue] = useState(null);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch({ type: MODALCLOSE });
    history.push("/");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("SEND FILE DATA:", fileValue);
    const data = new FormData();
    data.append("fileValue", fileValue);
    try {
      let res = await fileUpload(data);
      if (res.data) {
        dispatch({
          type: FILESUCCESS,
          payload: res.data,
        });
      }
      toast.success("File Uploaded Successfully!!!");
      history.push("/");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
    dispatch({ type: MODALCLOSE });
    history.push("/");
  };

  const onChange = (e) => {
    const files = e.target.files[0];
    setFileValue(files);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={closeModalHandler}>X</button>
        </div>
        <div className="title">
          <h1>Choose a File:</h1>
        </div>
        <div className="body">
          <form onSubmit={submitHandler}>
            <div>
              <input
                type="file"
                name="filename"
                id="filename"
                multiple
                onChange={onChange}
                style={{ marginLeft: "20%", marginBottom: "10%" }}
              />
              <button
                style={{
                  backgroundColor: "#ff0055",
                  padding: "0.4rem 1rem",
                  borderRadius: "5%",
                  outline: "none",
                  color: "white",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
