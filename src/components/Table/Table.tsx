import Table from "react-bootstrap/Table";
import TableHeader from "./TableHeader";
import type { GenericTableProps} from "../../types/User";
import TableRow from "./TableRow";

function GenericTable({
  users,
  handleDelete,
  onEdit,
  editingId,
  setEditingId,
  onSelect,
  selectedIds,
  handleSelectAll,
  isAllSelected,
  errorMessage
}: GenericTableProps) {
  return (<div  className="table-responsive">

    <Table striped bordered hover className="table-responsive">
      <TableHeader handleSelectAll={handleSelectAll} isAllSelected={isAllSelected}/>
      <tbody>
        {users.map((user) => (
          <TableRow
            user={user}
            handleDelete={handleDelete}
            onEdit={onEdit}
            editingId={editingId}
            setEditingId={setEditingId}
            onSelect={onSelect}
            selectedIds={selectedIds.includes(user.id)}
            errorMessage={errorMessage}
            
          />
        ))}
      </tbody>
    </Table>
  </div>
  );
}

export default GenericTable;
