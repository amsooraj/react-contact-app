import React from "react";
import Form from "../Components/Form";
import Contacts from "../Components/Contacts";

function Home({ formSub, contacts ,deleteContact, favToggle}) {
  return (
    <div className="container">
      <div className="row justify-content-sm-center ">
        <Form formSub={formSub} />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-3">
        {contacts.map((singleContact) => {
          return <Contacts key={singleContact.id} contact={singleContact} deleteContact={deleteContact} favToggle={favToggle}/>;
        })}
        {contacts.length === 0 && <div>No Contacts to show</div>}
      </div>
    </div>
  );
}

export default Home;
