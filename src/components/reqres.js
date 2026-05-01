import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useHttpService } from "../services/httpsservice";
import { Button, Modal } from "react-bootstrap";

function Reqres() {
  const [createShow, setcreateShow] = useState(false);
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { get, post } = useHttpService();
  const reqres = async () => {
    const result = await get("users");
    if (result.success) {
      setData(result.response.data);
    } else {
      console.log(result.response);
    }
  };
  const reqPost = async (e) => {
    e.preventDefault();
    const response = await post("users", formData);
     console.log(response);
  
    setcreateShow(false);
    setData([formData, ...data]);
    console.log(response);
  };
  const reqPut = async (e) => {
    e.preventDefault();
    const response = await axios.put("https://reqres.in/api/users/${id}", formData, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });
    setData([response.data, ...data]);
    console.log(response);
  };
  const reqSetdata = async (data) => {
    setIsEditing(true);
    setformData({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      id: data.id,
    });
  };
  const reqDelete = async (id) => {
    await axios.delete(`https://reqres.in/api/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });
    setData(data.filter((e) => e.id !== id));
  };
  const [formData, setformData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  useEffect(() => {
     reqres();
  }, []);
  return (
    <>
      <Navbar />
      <button class="btn btn-danger" onClick={() => setcreateShow(true)}>
        Buat data disini!!
      </button>
      <br/>
      {data.map((item) => (
        <>
          <button type="button" onClick={() => reqDelete(item.id)}>
            Delete
          </button>
          <button type="submit" onClick={() => reqSetdata(item)}>
            Edit
          </button>

          <div class="d-flex">
            <div>
              <div>{item.id}</div>
              <h4>{item.first_name + " " + item.last_name}</h4>
              <h4>{item?.email}</h4>
            </div>
            <img src={item.avatar} alt={item.first_name} />
          </div>
        </>
      ))}
      <Modal show={createShow} onHide={() => setcreateShow(false)}>
        <form onSubmit={(e) => reqPost(e)}>
          <Modal.Header>
            <Modal.Title>Kriet Data</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h5>
              <label>First Name</label>
              <input type="text" value={formData.first_name} onChange={(e) => setformData({ ...formData, first_name: e.target.value })} />
              <br />
              <label>Last Name</label>
              <input type="text" value={formData.last_name} onChange={(e) => setformData({ ...formData, last_name: e.target.value })} />
              <br />
              <label>Email</label>
              <input type="text" value={formData.email} onChange={(e) => setformData({ ...formData, email: e.target.value })} />
            </h5>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setcreateShow(false)}>
              Close
            </Button>
            <Button variant="danger" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default Reqres;
