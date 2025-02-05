import Contacts from "../Components/Contacts";

function Favorite({ contacts, deleteContact, favToggle }) {
  return (
    <>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
          {contacts.map((singleContact) => {
           return (
            singleContact.fav && (
              <Contacts
                key={singleContact.id}
                contact={singleContact}
                deleteContact={deleteContact}
                favToggle={favToggle}
              />
            )
            );
          })}
          {contacts.filter(single=>single.fav).length === 0 && <h2>No contacts in favorite</h2>}
        </div>
      </div>
    </>
  );
}

export default Favorite;
