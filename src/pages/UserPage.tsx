import { useEffect, useState } from "react";
import GenericTable from "../components/Table/Table";
import type { User } from "../types/User";
import { fetchUsers } from "../services/userService";
import SearchBar from "../components/Table/SearchBar";

function UserPage() {
  const [data, setData] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState("")

  async function loadUser() {
    const data = await fetchUsers();
    setUsers(data);
    setData(data);
  }

  //filter users
  // function filterUsers():User{

  //    users.filter(user => 
  //   const query = searchQuery.toLowerCase();
  //   return (
  //     user.name.toLowerCase().includes(query) ||
  //     user.email.toLowerCase().includes(query) ||
  //     user.role.toLowerCase().includes(query)
  //   );
  // );
  // }

  useEffect(() => {
    loadUser();
  },[]);

  console.log(searchQuery)
  return (
    <div className="container mt-4" style={{ width: "100%" }}>
      <SearchBar query={searchQuery} setQuery={setSearchQuery}/>
      <GenericTable users={users} />
    </div>
  );
}

export default UserPage;
