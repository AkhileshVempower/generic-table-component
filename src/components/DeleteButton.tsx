import Button from "react-bootstrap/Button";
type handleBulkDeleteProp = {
  handleBulkDelete: () => void;
  selectedIds:string[]
};

function DeleteButton({ handleBulkDelete,selectedIds }: handleBulkDeleteProp) {
  console.log(selectedIds)
  return (
    <Button
      variant="danger"
      size="sm"
      className="rounded-5 my-3"
      onClick={handleBulkDelete}
      disabled={!selectedIds.length}
    >
      Delete Selected
    </Button>
  );
}

export default DeleteButton;
