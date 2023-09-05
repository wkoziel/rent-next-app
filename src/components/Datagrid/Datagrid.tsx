import { DataGrid as MUIDataGrid, GridColDef } from '@mui/x-data-grid';

const StyledDataGrid = styled(MUIDataGrid)(({ theme }) => ({
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    textTransform: 'uppercase',
  },

  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 700,
  },

  '& .MuiDataGrid-cell': {
    color: theme.palette.text.primary,
    fontWeight: 500,
  },

  '& .MuiDataGrid-row:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.paper,
  },

  '& .MuiDataGrid-row:nth-of-type(even)': {
    backgroundColor: theme.palette.background.default,
  },

  '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
}));

import { styled } from '@mui/material';

import { AnyType } from '@/types';

type DatagridProps = {
  columns: GridColDef[];
  rows: AnyType[];
};

export function DataGrid({ columns, rows }: DatagridProps) {
  return (
    <StyledDataGrid
      rows={rows}
      columns={columns}
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      disableDensitySelector
      hideFooter
    />
  );
}
