import "./App.css";
import { users } from "../src/data";
import React from "react";
import SideBar from "./sidebar";
import Card from "./card";

export const RenderContext = React.createContext();

function App() {
  let totalUsers = users;
  const [allUsers, setAllUsers] = React.useState(totalUsers);

  const getMale = () => {
    let allMale = users.filter((male) => male.gender == "Male");
    setAllUsers(allMale);
  };

  const getFemale = () => {
    let allFemale = users.filter((female) => female.gender == "Female");
    setAllUsers(allFemale);
  };

  const getAllUsers = () => {
    setAllUsers(totalUsers);
  };

  return (
    <section>
      <RenderContext.Provider value={[getMale, getFemale, getAllUsers]}>
        <SideBar />
        <h1 className="title">MY TOP PAID EMPLOYEES</h1>
        <section className="general-container">
          {allUsers.map((user, index) => {
            return <Card key={index} {...user} />;
          })}
        </section>
      </RenderContext.Provider>
    </section>
  );
}

export default App;
