type TableHeaderProp = {
  handleSelectAll: () => void;
  isAllSelected: boolean;
};
function TableHeader({ handleSelectAll, isAllSelected }: TableHeaderProp) {
  return (
    <thead>
      <tr>
        <th >
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isAllSelected}
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
