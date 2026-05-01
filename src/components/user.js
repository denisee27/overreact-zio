import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  // Function to munculin data ap
  const fetch = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3");
    console.log(response);
    setData(response.data);
  };
  // Function to create a new post
  const createPost = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
    setData([response.data, ...data]);
    setformData({ title: "", body: "" });
    console.log(response);
  };
  // State to manage form data
  const [formData, setformData] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  // Function to handle multiple inputs
  const handleMultiple = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  // Function to delete data
  const deleteData = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, formData);
    setData(data.filter((e) => e.id !== id));
  };
  // Function to update data
  const updateData = async (data) => {
    setIsEditing(true);
    setformData({
      title: data.title,
      body: data.body,
      id: data.id,
    });
  };
  const submitUpdateData = async (e) => {
    e.preventDefault();
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${formData.id}`, formData);
    setData(data.map((item) => (item.id === formData.id ? response.data : item)));
    setIsEditing(false);
    setformData({ title: "", body: "" });
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {/* Tombol Home */}
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "8px 15px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Home
      </button>

      {/* Form Input */}
      <form
        onSubmit={(e) => (isEditing ? submitUpdateData(e) : createPost(e))}
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >
        <label style={{ fontWeight: "bold" }}>Judul</label>
        <input
          name="title"
          value={formData.title}
          onChange={(e) => handleMultiple(e)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />

        <label style={{ fontWeight: "bold" }}>Deskripsi</label>
        <input
          name="body"
          value={formData.body}
          onChange={(e) => handleMultiple(e)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "20px",
          }}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              padding: "8px 15px",
              backgroundColor: isEditing ? "#27ae60" : "#2980b9",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isEditing ? "Update Data" : "Submit Data"}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={() => (setIsEditing(false), setformData({ title: "", body: "" }))}
              style={{
                padding: "8px 15px",
                backgroundColor: "#F7931a",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Data List */}
      {data.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#ffffff",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ margin: "0 0 5px" }}>{item.title}</h4>
              <p style={{ margin: "0 0 10px", color: "#555" }}>{item.body}</p>
              <small style={{ display: "block", marginBottom: "10px", color: "#888" }}>ID: {item.id}</small>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => deleteData(item.id)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete Data
                </button>
                <button
                  type="button"
                  onClick={() => updateData(item)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#F7931a",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Update Data
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default User;
