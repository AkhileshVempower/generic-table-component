import Pagination from "react-bootstrap/Pagination";


type TablePaginationProp = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};


const TablePagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: TablePaginationProp) => {
  let items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="mt-3">
      <Pagination.First
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        onClick={() => setCurrentPage(currentPage-1)}
        disabled={currentPage === 1}
      />
      {items}
      <Pagination.Next
               onClick={() => setCurrentPage(currentPage+1)}

        disabled={currentPage === totalPages}
      />
      <Pagination.Last
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default TablePagination;
