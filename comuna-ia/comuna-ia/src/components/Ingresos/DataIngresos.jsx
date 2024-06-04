import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'gasto', headerName: 'Gasto', width: 130 },
  { field: 'mes', headerName: 'Mes', width: 130 },
  {
    field: 'dinero',
    headerName: 'Dinero',
    type: 'number',
    width: 130,
  },
];

const rows = [
  { id: 1, mes: 'Snow', gasto: 'Jon', dinero: 35 },
  { id: 2, mes: 'Lannister', gasto: 'Cersei', dinero: 42 },
  { id: 3, mes: 'Lannister', gasto: 'Jaime', dinero: 45 },
  { id: 4, mes: 'Stark', gasto: 'Arya', dinero: 16 },
  { id: 5, mes: 'Targaryen', gasto: 'Daenerys', dinero: null },
  { id: 6, mes: 'Melisandre', gasto: null, dinero: 150 },
  { id: 7, mes: 'Clifford', gasto: 'Ferrara', dinero: 44 },
  { id: 8, mes: 'Frances', gasto: 'Rossini', dinero: 36 },
  { id: 9, mes: 'Roxie', gasto: 'Harvey', dinero: 65 },
];

export default function DataIngresos() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        
        
      />
    </div>
  );
}