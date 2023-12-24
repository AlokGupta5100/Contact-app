import React from "react";
// import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
// import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
    id: "1",
    name:"Alok",
    email: "alokgupta5100@gmail.com",
    },
    {
    id: "2",
    name:"Sumit",
    email: "sumit123@gmail.com",
    },
    {
    id: "1",
    name:"Raju",
    email: "raju123@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
