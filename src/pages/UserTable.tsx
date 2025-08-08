import { useEffect, useState } from "react";
import GenericTable from "../components/Table/Table";
import type { User } from "../types/User";
import { fetchUsers } from "../services/userService";
import SearchBar from "../components/Table/SearchBar";
import TablePagination from "../components/Table/Pagination";
import DeleteButton from "../components/DeleteButton";
const rowPerPage = 10;

function UserPage() {
  const [data, setData] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  async function loadUser() {
    const data = await fetchUsers();
    setUsers(data);
    setData(data);
  }

  //filter user
  const query = searchQuery.toLowerCase();
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
  );
  const totalPage = Math.ceil(filteredUsers.length / rowPerPage);
  const startIndex = (currentPage - 1) * rowPerPage;
  const currentUser = filteredUsers.slice(startIndex, startIndex + rowPerPage);

  //Delete user
  function handleDelete(id: string) {
    setUsers(users.filter((user) => user.id != id));
  }

  // Edit user handler
  function handleEdit(id: string, updated: User) {
    setUsers(users.map((u) => (u.id == id ? updated : u)));
    setEditingId(null);
  }
console.log('editingId=>',editingId)
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container mt-4" style={{ width: "100%" }}>
      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      <GenericTable
        users={currentUser}
        handleDelete={handleDelete}
        onEdit={handleEdit}
        editingId={editingId}
        setEditingId={setEditingId}
      />
      <div className="d-flex justify-content-between">
        <DeleteButton />
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default UserPage;
