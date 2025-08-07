import { useEffect, useState } from "react";
import GenericTable from "../components/Table/Table";
import type { User } from "../types/User";
import { fetchUsers } from "../services/userService";

function UserPage() {
  const [users, setUsers] = useState<User[]>([]);

  async function loadUser() {
    const data = await fetchUsers();
    setUsers(data);
  }
  useEffect(() => {
    loadUser();
  });

  return (
    <div className="container mt-4" style={{ width: "100%" }}>
      <GenericTable users={users} />
    </div>
  );
}

export default UserPage;
