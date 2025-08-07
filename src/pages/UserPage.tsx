import { useEffect, useState } from "react";
import GenericTable from "../components/Table/Table";
import type { User } from "../types/User";
import { fetchUsers } from "../services/userService";
import SearchBar from "../components/Table/SearchBar";
import TablePagination from "../components/Table/Pagination";

const rowPerPage = 10;

function UserPage() {
  const [data, setData] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("")

  async function loadUser() {
    const data = await fetchUsers();
    setUsers(data);
    setData(data);
  }


//filter user
  const query = searchQuery.toLowerCase();
      const filteredUsers = users.filter(user => 
     (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    )
  )
  const totalPage=Math.ceil(filteredUsers.length/rowPerPage)
  const startIndex=(currentPage-1)*rowPerPage
  const currentUser=filteredUsers.slice(startIndex,startIndex+rowPerPage)


  useEffect(() => {
    loadUser();
  },[]);

  console.log(searchQuery)
  return (
    <div className="container mt-4" style={{ width: "100%" }}>
      <SearchBar query={searchQuery} setQuery={setSearchQuery}/>
      <GenericTable users={currentUser} />
      <TablePagination currentPage={currentPage} totalPages={totalPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default UserPage;
