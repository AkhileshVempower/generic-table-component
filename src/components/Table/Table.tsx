import Table from "react-bootstrap/Table";
import TableHeader from "./TableHeader";
import type { User } from "../../types/User";
import TableRow from "./TableRow";

type GenericTableProps = {
  users: User[];
  handleDelete: (id: string) => void;
   onEdit:(id:string,updated:User)=>void;
   editingId:string|null,
  setEditingId: (id: string | null) => void;
};



function GenericTable({ users, handleDelete ,onEdit, editingId,
  setEditingId}: GenericTableProps) {




  return (
    <Table striped bordered hover>
      <TableHeader />
      <tbody>
        {users.map((user) => (
     <TableRow user={user}
     handleDelete={handleDelete}
     onEdit={onEdit}
     editingId={editingId}
        setEditingId={setEditingId}
     
     />
        ))}
      </tbody>
    </Table>
  );
}

export default GenericTable;
