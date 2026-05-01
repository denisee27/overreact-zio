import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbarpage from "./navbar";

const Review = () => {
  const [joke, setJoke] = useState({});
  const [gendername, setGendername] = useState("");
  const [responseGender, setResponseGender] = useState({});
  const [agename, setAgename] = useState("");
  const [responseAge, setResponseAge] = useState({});
  const [nationalityname, setNationalityname] = useState("");
  const [responseNationality, setResponseNationality] = useState({});
  const [universitiesname, setUniversitiesname] = useState("");
  const [responseUniversities, setResponseUniversities] = useState([]);
  const [dogImageUrl, setDogImageUrl] = useState("https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg");
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const [fact, setFact] = useState([]);
  const [unis, setUnis] = useState([]);
  const [ip, setIp] = useState("Memeriksa...");
  const [char, setChar] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Menunggu...");
  const postId = 10;
  const [name, setName] = useState("Budi");
  const [response, setResponse] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [InputBrand, setInputBrand] = useState("");
  const [brand, setBrand] = useState([]);

  const getGender = async (e) => {
    const response = await axios.get("https://api.genderize.io/?name=" + gendername);
    setResponseGender(response.data);
    console.log(response);
  };
  const getAge = async (e) => {
    const response = await axios.get("https://api.agify.io/?name=" + agename);
    setResponseAge(response.data);
    console.log(response);
  };
  const getNationality = async (e) => {
    const response = await axios.get("https://api.nationalize.io/?name=" + nationalityname);
    setResponseNationality(response.data);
    console.log(responseNationality);
  };
  const getJokes = async (e) => {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    setJoke(response.data);
    console.log(response);
  };
  const getUniversities = async (e) => {
    const response = await axios.get("http://universities.hipolabs.com/search?name=" + universitiesname);
    console.log(response);
    setResponseUniversities(response.data);
  };
  const fetchDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    // PERBAIKAN: Seharusnya menggunakan useState untuk mengubah dogImageUrl

    console.log("Variabel dogImageUrl berubah menjadi:", dogImageUrl);
    setDogImageUrl(data.message);
  };

  const tambah = () => {
    setCount(count + 1);
  };

  const loadChar = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character/1");
    const data = await res.json();
    setChar(data);
    console.log(data);
  };
  const loadUnis = async () => {
    const res = await fetch("http://universities.hipolabs.com/search?country=Indonesia");
    const data = await res.json();
    setUnis(data.slice(0, 5));
  };
  const getFact = async () => {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    // BUG: API ini mengembalikan { "fact": "...", "length": 10 }
    setFact(data.length);
    console.log(data);
  };

  const handleSubmit = async () => {
    const newPost = {
      title: title,
      body: "Isi konten...",
      userId: 1,
    };
    console.log(newPost);
    console.log(JSON.stringify(newPost));
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    setMessage(`Berhasil dibuat! ID Postingan: ${data.id}`);
    console.log(data);
  };
  const handleDelete = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    try {
      await fetch(url, { method: "DELETE" });
      setStatus("Berhasil dihapus! (Cek Network Tab)");
    } catch (error) {
      setStatus("Gagal menghapus.");
    }
  };
  const handleUpdate = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",

      body: JSON.stringify({
        id: 1,

        name: name,
      }),
    });


    const result = await res.json();

    setResponse(result);
  };

  useEffect(() => {
    getJokes();
    fetchDog();

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, [ip]); //HINT
  if (!user) return <p>Loading...</p>;
  return (
    <div className="container border border-5">
      <Navbarpage />
      <div className="row">
        <div className="border border-3 border-danger col-12">
          <img src="https://www.shutterstock.com/image-vector/application-programming-interface-api-different-600nw-2670637915.jpg" alt="api" className="w-100" />
        </div>
      </div>
      <div className="row">
        <div className="col-8 border border-3 border-primary">
          <h3>Joke of the day</h3>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
          <button className="btn btn-primary" onClick={getJokes}>
            Get New Joke
          </button>
        </div>
        <div className="col-4 border border-3 border-success">
          <label>Name</label>
          <input type="text" value={gendername} onChange={(e) => setGendername(e.target.value)} />
          <button className="btn btn-primary" onClick={getGender}>
            Get Gender
          </button>
          {responseGender && (
            <div>
              <p>Gender: {responseGender.gender}</p>
              <p>Probability: {responseGender.probability}</p>
            </div>
          )}
        </div>
        <div className="row">
          aaaaaa
          <div className="col-4 border border-3 border-primary">
            <label>Name</label>
            <input type="text" value={agename} onChange={(e) => setAgename(e.target.value)} />
            {agename && (<button className="btn btn-primary" onClick={getAge}>
              Get Age
            </button>)}

            {responseAge && (
              <div>
                <p>Age: {responseAge.age}</p>
              </div>
            )}
          </div>
          <div className="col-4 border border-3 border-info">Layer 3</div>
          <div className="col-4 border border-3 border-secondary">Layer 3</div>
        </div>
        <div className="row">
          <div className="col-4 border border-3 border-primary">
            <label>Name</label>
            <input type="text" value={nationalityname} onChange={(e) => setNationalityname(e.target.value)} />
            <button className="btn btn-primary" onClick={getNationality}>
              Get Nationality
            </button>
            {responseNationality ? (
              <div>
                {responseNationality?.country?.map((data, index) => (
                  <p key={index}>
                    <img src={`https://flagsapi.com/${data.country_id}/shiny/64.png`} alt="flag" />
                    Country: {data.country_id}, Probability: {data.probability} - {index}
                  </p>
                ))}
              </div>
            ) : (
              <p>skeleton</p>)}
          </div>
          <div className="col-8 border border-3 border-success">
            <label>Universities</label>
            <input type="text" value={universitiesname} onChange={(e) => setUniversitiesname(e.target.value)} />
            <button className="btn btn-primary" onClick={getUniversities}>
              Get Universities
            </button>
            {responseUniversities && (
              <div>
                {responseUniversities.map((university, index) => (
                  <p key={index}>
                    University:{university.name}
                    <br />
                    Web Page:
                    {university?.web_pages ? (
                      <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    ) : (
                      "gada web nya jir"
                    )}
                    <br />
                    Country: <img src={`https://flagsapi.com/${university.alpha_two_code}/shiny/64.png`} alt="flag" />
                  </p>
                ))}
              </div>
            )}
          </div>
          <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
            <h2>1. Dog Gallery (Bug: Variabel vs State)</h2>
            <img src={dogImageUrl} alt="Dog" style={{ width: "200px", height: "200px" }} />
            <br />
            <button onClick={fetchDog}>Ganti Foto Anjing</button>
            <p>Tips: Perhatikan mengapa gambar tidak berubah meski console.log menunjukkan URL baru.</p>
          </div>
          <div style={{ border: "1px solid blue", padding: "20px", margin: "10px" }}>
            <h2>2. User Profile (Bug: Typo Variabel)</h2>
            <p>Nama: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>

          <div style={{ border: "1px solid red", padding: "20px", margin: "10px" }}>
            <h2>8. Counter (Bug: Assignment Error)</h2>
            <p>Angka: {count}</p>
            <button onClick={tambah}>Tambah</button>
          </div>

          <div style={{ border: "1px solid brown", padding: "20px", margin: "10px" }}>
            <h2>6. Uni List (Bug: Map on Null)</h2>
            <button onClick={loadUnis}>Tampilkan Kampus</button>
            <ul>
              {unis.map((u, index) => (
                <li key={index}>{u.name}</li>
              ))}
            </ul>
          </div>
          <div style={{ border: "2px solid pink", padding: "20px", margin: "10px" }}>
            <h2>14. Fakta Kucing (Bug: Wrong Property)</h2>
            <p>{fact || "Klik tombol untuk fakta"}</p>
            <button onClick={getFact}>Ambil Fakta</button>
          </div>
          <div style={{ border: "2px solid black", padding: "20px", margin: "10px" }}>
            <h2>15. Cek IP (Bug: Dependency Loop)</h2>
            <p>IP Anda: {ip}</p>
          </div>

          <div style={{ border: "2px solid green", padding: "20px", margin: "10px" }}>
            <h2>16. Nama Karakter (Bug: Rendering Object)</h2>
            <button onClick={loadChar}>Load Character</button>
            {char && (<p>Nama: {char?.created}</p>)}

          </div>

          <div style={{ border: "2px solid blue", padding: "20px", margin: "10px" }}>
            <h2>29. Tambah Postingan (Bug: Raw Object)</h2>
            <input type="text" placeholder="Judul Postingan" onChange={(e) => setTitle(e.target.value)} />
            <button onClick={handleSubmit}>Kirim (POST)</button>
            <p>{message}</p>
          </div>
          <div style={{ border: "2px solid red", padding: "20px", margin: "10px" }}>
            <h2>30. Hapus Postingan (Bug: String URL)</h2>
            <p>Target ID: {postId}</p>
            <button onClick={handleDelete}>Hapus Data (DELETE)</button>
            <p>Status: {status}</p>
            <small>Tips: Jika URL salah, biasanya tidak terjadi apa-apa atau 404.</small>
          </div>
          <div style={{ border: "2px solid green", padding: "20px", margin: "10px" }}>
            <h2>31. Update Nama (Bug: Missing Headers)</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleUpdate}>Update (PUT)</button>
            <p>
              Hasil dari Server: <br />
              {/* Jika bug ada, biasanya nama tidak berubah di sini atau object kosong */}
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </p>
          </div>
          <div style={{ border: "2px solid green", padding: "20px", margin: "10px" }}>
            <h2>Input Realtime</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <p>output realtime: {inputValue}</p>
          </div>
          <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {(inputValue || char) ? <p>output realtime: {inputValue}</p> : <div>else</div>}
          </div>
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
          <div style={{ border: "2px solid green", padding: "20px", margin: "10px" }}>
            <h2>Brand</h2>
            <input type="text" value={InputBrand} onChange={(e) => setInputBrand(e.target.value)} />
            <button onClick={() => setBrand([...brand, InputBrand])}>Add Brand</button>
            <ul>
              {brand.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Review;
