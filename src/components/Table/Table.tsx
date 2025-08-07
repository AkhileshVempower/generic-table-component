import Table from "react-bootstrap/Table";
import TableHeader from "./TableHeader";
import type { User } from "../../types/User";

type GenericTableProps = {
  users: User[];
};

function GenericTable({ users }: GenericTableProps) {
  return (
    <Table striped bordered hover>
      <TableHeader />
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>  <input type="checkbox" /></td>
            <td scope="col">{user.name}</td>
            <td scope="col">{user.email}</td>
            <td scope="col">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default GenericTable;
