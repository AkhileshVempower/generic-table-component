import Button from "react-bootstrap/Button";
type handleBulkDeleteProp = {
  handleBulkDelete: () => void;
};

function DeleteButton({ handleBulkDelete }: handleBulkDeleteProp) {
  return (
    <Button
      variant="danger"
      size="sm"
      className="rounded-5 my-3"
      onClick={handleBulkDelete}
    >
      Delete Selected
    </Button>
  );
}

export default DeleteButton;
