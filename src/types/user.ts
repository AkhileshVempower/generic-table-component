export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export type GenericTableProps = {
  users: User[];
  handleDelete: (id: string) => void;
  onEdit: (id: string, updated: User) => void;
  editingId: string | null;
  setEditingId: (id: string | null) => void;
  onSelect: (id: string) => void;
  selectedIds: string[];
  handleSelectAll:()=>void
  isAllSelected:boolean
  errorMessage:string
};

export type TableRowProp = {
  user: User;
  handleDelete: (id: string) => void;
  onEdit: (id: string, updated: User) => void;
  editingId: string | null;
  setEditingId: (id: string | null) => void;
  onSelect: (id: string) => void;
  selectedIds: boolean;
  errorMessage:string
};
export type TableHeaderProp = {
  handleSelectAll: () => void;
  isAllSelected: boolean;
};

export interface Props {
  query: string;
  setQuery: (val: string) => void;
}
export type TablePaginationProp = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};
