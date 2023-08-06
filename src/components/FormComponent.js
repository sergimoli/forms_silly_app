import React, { useState } from "react";

function FormComponent() {
  const [user, setUser] = useState({});

  const ChangeData = (e) => {
    console.log(e.target);
    let nameFromInput = e.target.name;
    let userToBeModified = user;

    // userToBeModified[nameFromInput] = e.target.value;
    // setUser(userToBeModified);

    // setUser((estat_previ) => {
    //   return {
    //     ...estat_previ,
    //     [nameFromInput]: e.target.value,
    //   };
    // });

    //una altra forma de fer-ho
    setUser((estat_previ) => ({
      ...estat_previ,
      [nameFromInput]: e.target.value,
    }));
  };

  const getDataFromForm = (e) => {
    e.preventDefault();
    let data = e.target;
    let user = {
      name: data.name.value,
      surname: data.surname.value,
      gender: data.gender.value,
      bio: data.bio.value,
      send: data.send.value,
    };

    console.log(user);
    setUser(user);
  };

  return (
    <div>
      <h1>Forms in React</h1>
      {user.send && (
        <div className="info_user label label-grey">
          {user.name} {user.surname} is a {user.gender} and it's biografy is:{" "}
          <p>{user.bio}</p>
        </div>
      )}
      <form onSubmit={getDataFromForm}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={ChangeData}
        />
        <input
          type="text"
          placeholder="surname"
          name="surname"
          onChange={ChangeData}
        />
        <select name="gender" onChange={ChangeData}>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </select>
        <textarea placeholder="bio" name="bio" onChange={ChangeData}></textarea>
        <input type="submit" value="SEND" name="send" />
      </form>
    </div>
  );
}

export default FormComponent;
