import React from "react";

function Contacts({ contact: { name, phone, email, id,fav}, deleteContact , favToggle}) {
  return (
    <>
      <div className="col">
        <div className="card shadow-sm w-100">
          <div className="card-header">
            <div className="row">
              <div className="col-6">{name}</div>
              <div className="col-2 offset-4">
              <i onClick={()=>{favToggle(id)}} className={fav?"fa-solid fa-star text-warning":"fa-regular fa-star text-warning"}></i>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{phone}</li>
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  deleteContact(id);
                }}
                type="button"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contacts;
