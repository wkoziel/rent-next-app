import { Clients } from '@/types/Clients';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IconButton, Button, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type ClientsDatagridProps = {
   clients: Clients[];
   handleAddClick: () => void;
   handleEditClick: (id: string) => void;
   handleDeleteClick: (id: string) => void;
};

export function ClientsDatagrid({
   clients,
   handleAddClick,
   handleEditClick,
   handleDeleteClick,
}: ClientsDatagridProps) {
   const columns: GridColDef[] = [
      {
         field: 'firstname',
         headerName: 'First Name',
         flex: 1,
         sortable: true,
         align: 'left',
      },
      {
         field: 'lastname',
         headerName: 'Last Name',
         flex: 1,
         sortable: false,
         align: 'left',
      },
      {
         field: 'address',
         headerName: 'Address',
         flex: 1,
         sortable: false,
         align: 'left',
      },
      {
         field: 'email',
         headerName: 'Email',
         flex: 1,
         sortable: false,
         align: 'left',
      },
      {
         field: 'phone',
         headerName: 'Phone',
         flex: 1,
         sortable: false,
         align: 'left',
      },
      {
         field: 'actions',
         headerName: ' ',
         flex: 1,
         sortable: false,
         align: 'right',
         renderCell: (params) => (
            <div>
               <IconButton
                  color="primary"
                  aria-label="edit"
                  onClick={() => handleEditClick(params.id as string)}
               >
                  <EditIcon />
               </IconButton>
               <IconButton
                  color="secondary"
                  aria-label="delete"
                  onClick={() => handleDeleteClick(params.id as string)}
               >
                  <DeleteIcon />
               </IconButton>
            </div>
         ),
      },
   ];

   return (
      <div style={{ height: 600, width: '100%' }}>
         <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant="h4">Clients</Typography>
            <Button
               variant="contained"
               color="primary"
               style={{ marginBottom: '16px', width: 200 }}
               onClick={handleAddClick}
            >
               Add new entry
            </Button>
         </Stack>
         <DataGrid rows={clients} columns={columns} />
      </div>
   );
}
