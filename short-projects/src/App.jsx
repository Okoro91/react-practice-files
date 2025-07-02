import React from "react";
import avatar from "../images/user.png";
import starFilled from "../images/star-filled.png";
import starEmpty from "../images/star-empty.png";
import "./App.css";

const App = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? starEmpty : starFilled;

  function toggleFavorite() {
    setContact((prev) => ({
      ...prev,
      isFavorite: !prev.isFavorite,
    }));
  }

  const handleForm = (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");
    console.log(name, email, phone, password);
  };

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="favorite-button"
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
              className="favorite"
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
      <article className="form">
        <h1>Sign Up Form</h1>
        <form action={handleForm}>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
          <label htmlFor="phone">Pone Number</label>
          <input type="number" name="phone" id="" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" />
          <button>Submit</button>
        </form>
      </article>
    </main>
  );
};

export default App;
