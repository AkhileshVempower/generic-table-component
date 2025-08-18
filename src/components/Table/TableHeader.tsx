import type { TableHeaderProp } from "../../types/User";

function TableHeader({ handleSelectAll, isAllSelected }: TableHeaderProp) {
  return (
    <thead>
      <tr>
        <th >
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isAllSelected}
            className="table-input"
          />
        </th>
        <th >Name</th>
        <th >Email</th>
        <th >Role</th>
        <th >Action</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
