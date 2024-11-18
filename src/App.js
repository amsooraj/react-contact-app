import './App.css';
import Favorite from './Pages/Favorite';
import Home from './Pages/Home';
import {
  Route,
  Routes,
} from "react-router-dom";
import NotFound from './Pages/NotFound';
import Nav from './Components/Nav';
import { useEffect, useState } from 'react';


function App() {
  const [contacts , setContacts] = useState([]);

  useEffect(()=>{

    const getContacts = async ()=>{
      const contactsFormSrever = await fetchContact()
      setContacts(contactsFormSrever)
    }

    getContacts()

  },[])

  const formSub = async (data)=>{
    const res = await fetch("http://localhost:5000/contacts",{
        method: "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(data)
    })
    const newData = await res.json()
    // console.log(data);
    if(res.ok){
      setContacts([...contacts , newData]);
    }  
  }
  const deleteContact = async (id)=>{

    const res = await fetch(`http://localhost:5000/contacts/${id}`,{
      method: 'DELETE',
    })
    if(res.satus === 200){
      let newContact = contacts.filter((singleContact)=>{
        return singleContact.id !== id;
      })
      setContacts(newContact);
    }
  }

  const getCon = async (id) =>{
    const res = await fetch(`http://localhost:5000/contacts/${id}`);
    const data = await res.json();

    return data;
  }

  const favToggle = async (id)=>{
    const singleCon = await getCon(id)
    const updatedTask = {...singleCon, fav : !singleCon.fav}

    const res = await fetch(`http://localhost:5000/contacts/${id}`,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    if(res.status === 200){
      let updatedContact = contacts.map((singleContact)=>{
        return singleContact.id === id
        ? {...singleContact , fav : !singleContact.fav}
        : singleContact
      })
      setContacts(updatedContact)
    }
    
  }

  const fetchContact = async()=>{
      const res = await fetch("http://localhost:5000/contacts")
      const data = await res.json()

      return data;
  }
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home formSub = {formSub} contacts = {contacts} deleteContact={deleteContact} favToggle={favToggle}/>}/>
      <Route path='/favorite' element={<Favorite contacts = {contacts} deleteContact={deleteContact} favToggle={favToggle}/>}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  );
}

export default App;
