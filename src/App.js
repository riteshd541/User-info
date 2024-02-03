import React, { useState, useEffect } from "react";
import UserTable from "./components/UserTable/UserTable";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const sortByName = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredUsers(sortedUsers);
  };

  return (
    <div>
      <div className="container">
        <SearchBar handleSearch={handleSearch} />
        <button type="button" className="button" onClick={sortByName}>
          Sort by Name
        </button>
        <UserTable users={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
