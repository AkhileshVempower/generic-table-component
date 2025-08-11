import React, { useEffect, useState } from "react";
import type { User } from "../../types/User";

type TableRowProp = {
  user: User;
  handleDelete: (id: string) => void;
  onEdit: (id: string, updated: User) => void;
  editingId: string | null;
  setEditingId: (id: string | null) => void;
  onSelect: (id: string) => void;
  selectedIds: boolean;
  errorMessage:string
};

function TableRow({
  user,
  handleDelete,
  onEdit,
  editingId,
  setEditingId,
  selectedIds,
  onSelect,
  errorMessage
}: TableRowProp) {
  const [editData, setEditData] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (user.id === editingId) {
      setEditData(user);
    }
  }, [editingId, user]);
console.log(selectedIds)
  return (
    <tr key={user.id}>
      <td>
       
        <input type="checkbox" className="bg-transparent" checked={selectedIds} onChange={()=>onSelect(user.id)}/>
      </td>
      {user.id == editingId ? (
        <>
          <td>
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
              className="form-control"
            />
          </td>
          <td>
            <input
              type="email"
              name="email"
              value={editData.email}
              onChange={handleChange}
              className="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              name="role"
              value={editData.role}
              onChange={handleChange}
              className="form-control"
            />
          </td>
          <td>
            <button
              className="btn btn-sm btn-success me-2"
              onClick={() => {
                onEdit(user.id, editData);
              }}
            >
              Save
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => setEditingId(null)}
            >
              Cancel
            </button>
          </td>
       
        </>
      ) : (
        <>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td >
            <i
              className="bi bi-pencil-square text-secondary mx-2"
              onClick={() => setEditingId(user.id)}
              
            ></i>
            <i
              className="bi bi-trash text-danger"
              onClick={() => handleDelete(user.id)}
            ></i>
          </td>
        </>
      )}
      
    </tr>
  );
}

export default TableRow;
