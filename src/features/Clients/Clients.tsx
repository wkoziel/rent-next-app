import { useState } from 'react';
import { Container } from '@mui/material';

import { AddClientForm } from './views/AddClientForm';
import { ClientsDatagrid } from './views/ClientsDatagrid';

import { Clients } from '@/types/Clients';

export function Clients({ clients }: { clients: Clients[] }) {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [selectedView, setSelectedView] = useState<'list' | 'edit' | 'add'>(
    'list',
  );

  console.log(selectedRowId); // TODO: Remove this line

  return (
    <Container>
      <AddClientForm
        open={selectedView === 'add'}
        onClose={() => setSelectedView('list')}
      />
      <ClientsDatagrid
        clients={clients}
        handleAddClick={() => setSelectedView('add')}
        handleEditClick={(id: string) => {
          setSelectedRowId(id);
          setSelectedView('edit');
        }}
        handleDeleteClick={(id: string) => {
          console.log('Delete', id);
        }}
      />
    </Container>
  );
}
