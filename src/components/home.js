import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaTrashCan } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';


function Home() {
  const [data, setData] = useState('Air');
  const [barang, setBarang] = useState('Motor');
  const [button, setButton] = useState(
    [
      { number: 1 },
    ]);
  const handleButton = (e) => {
    setButton([...button, { number: button.length + 1 }])
  }
  const [benda, setBenda] = useState(
    [
      { rumah: 1 },
    ]);
  const handleBenda = (e) => {
    setBenda([...benda, { rumah: benda.length + 1 }])
  }
  const [input, setInput] = useState('piala')
  const handleInput = (value) => { setInput(value) }


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    child: "",
  })
  const handleMultiple = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const navigate = useNavigate();
  return (


    <>
      <input onChange={(e) => handleInput(e.target.value)} />
      {input}
      {barang}
      {button.map(e => (
        <div key={e.number}>{e.number}</div>
      ))}

      {benda.map(e => (
        <div key={e.rumah}>{e.rumah}</div>
      ))}


      <button onClick={() => handleButton()}>Add Button</button>
      <button onClick={() => handleBenda()}>/n</button>
      <button onClick={() => setBarang('mobil')}>Ubah</button>

      <div>Home</div>
      <h1>
        {data}
      </h1>
      <h1>
        <button onClick={(e) => setData('Anggur')}>Magic</button>
      </h1>

      <FaTrashCan />
      <br />
      <br />
      <br />
      <div>
        <label>Name</label>
        <input name="name" onChange={(e) => handleMultiple(e)} />
        <br />
        <label>Email</label>
        <input name="email" onChange={(e) => handleMultiple(e)} />
        <br />
        <label>Child</label>
        <input name="child" onChange={(e) => handleMultiple(e)} />
        <br />
        <div> Name :  {formData.name}</div>
        <div> Email :  {formData.email}</div>
        <div> Child :  {formData.child}</div>
      </div>
      <button onClick={navigate('user')}>User</button>
    </>
  )
}

export default Home