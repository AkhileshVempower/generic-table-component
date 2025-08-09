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

  //handleRow
  const handleSelectRow = (id: string) => {
    const isSelected = selectedIds.includes(id);

    if (isSelected) {
      // Remove the ID from the list
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      // Add the ID to the list
      setSelectedIds([...selectedIds, id]);
    }
  };
//All select handler
  const handleSelectAll = () => {
  const currentPageIds = currentUsers.map(user => user.id);

 let allSelected = true;
  for (let id of currentPageIds) {
    if (!selectedIds.includes(id)) {
      allSelected = false;
      break;
    }
  }

  if (allSelected) {
    // Deselect all on this page
    const updated = selectedIds.filter(id => !currentPageIds.includes(id));
    setSelectedIds(updated);
  } else {
    // Select all on this page
    const newSelections = currentPageIds.filter(id => !selectedIds.includes(id));
    setSelectedIds([...selectedIds, ...newSelections]);
  }
};

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
  const currentUsers = filteredUsers.slice(startIndex, startIndex + rowPerPage);
    const currentPageIds = currentUsers.map(u => u.id);
  const isAllSelected = currentPageIds.every(id => selectedIds.includes(id));

  //Delete user
  function handleDelete(id: string) {
    setUsers(users.filter((user) => user.id != id));
    // remove  selectedIds if present
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
  }

  // Edit user handler
  function handleEdit(id: string, updated: User) {
    setUsers(users.map((u) => (u.id == id ? updated : u)));
    setEditingId(null);
  }
  //Bulk delete
  const handleBulkDelete = () => {
    setUsers(users.filter((u) => !selectedIds.includes(u.id)));
    setSelectedIds([]);
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container mt-4" style={{ width: "100%" }}>
      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      <GenericTable
        users={currentUsers}
        handleDelete={handleDelete}
        onEdit={handleEdit}
        editingId={editingId}
        setEditingId={setEditingId}
        onSelect={handleSelectRow}
        selectedIds={selectedIds}
        handleSelectAll={handleSelectAll}
        isAllSelected={isAllSelected}
      />
      <div className="d-flex justify-content-between">
        <DeleteButton handleBulkDelete={handleBulkDelete} />
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
