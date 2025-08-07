function TableHeader() {
  return (
    <thead>
      <tr>
        <th scope="col">
          <input type="checkbox" />
        </th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
