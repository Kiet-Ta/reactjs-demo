import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const rows: GridRowsProp = [
  { id: 1, col1: 'Post 1', col2: 'Post 1 content' },
  { id: 2, col1: 'Post 2', col2: 'Post 2 content' },
  { id: 3, col1: 'Post 3', col2: 'Post 3 content' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Title', width: 150 },
  { field: 'col2', headerName: 'Content', width: 150 },
];

const List = () => {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
      <Button href='/post/form' variant="contained" >New post</Button>
    </div>
  );
};

export default List;
