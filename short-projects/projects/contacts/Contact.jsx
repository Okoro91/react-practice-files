import React from "react";
import avatar from "../images/user.png";
import starFilled from "../images/star-filled.png";
import starEmpty from "../images/star-empty.png";
import "./Contact.css";

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
    const data = Object.fromEntries(formData);
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const allData = {
      ...data,
      dietaryRestrictions,
    };
    console.log(allData);
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
        <h1>Signup form</h1>
        <form action={handleForm}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            defaultValue="joe@schmoe.com"
            type="email"
            name="email"
            placeholder="joe@schmoe.com"
          />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            defaultValue="password123"
            type="password"
            name="password"
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            defaultValue="This is a description"
          ></textarea>

          <fieldset>
            <legend>Employment Status:</legend>
            <label>
              <input type="radio" name="employmentStatus" value="unemployed" />
              Unemployed
            </label>
            <label>
              <input type="radio" name="employmentStatus" value="part-time" />
              Part-time
            </label>
            <label>
              <input
                type="radio"
                name="employmentStatus"
                defaultChecked={true}
                value="full-time"
              />
              Full-time
            </label>
          </fieldset>

          <fieldset>
            <legend>Dietary restrictions:</legend>
            <label>
              <input
                type="checkbox"
                name="dietaryRestrictions"
                value="kosher"
              />
              Kosher
            </label>
            <label>
              <input type="checkbox" name="dietaryRestrictions" value="vegan" />
              Vegan
            </label>
            <label>
              <input
                type="checkbox"
                name="dietaryRestrictions"
                defaultChecked={true}
                value="gluten-free"
              />
              Gluten-free
            </label>
          </fieldset>

          <label htmlFor="favColor">What is your favorite color?</label>
          <select id="favColor" name="favColor" defaultValue="blue" required>
            <option value="" disabled>
              -- Choose a color --
            </option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>

          <button>Submit</button>
        </form>
      </article>
    </main>
  );
};

export default App;
