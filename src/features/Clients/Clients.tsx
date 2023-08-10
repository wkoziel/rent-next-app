import strapi from '@/api/strapiAdapter';
import { extractAttributes } from '@/helpers/extractAttributes';
import { Clients } from '@/types/Clients';
import { ClientsDatagrid } from './views/ClientsDatagrid';
import { useState } from 'react';
import { AddClientForm } from './views/AddClientForm';

export function Clients({ clients }: { clients: Clients[] }) {
   const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
   const [selectedView, setSelectedView] = useState<'list' | 'edit' | 'add'>(
      'list'
   );

   return (
      <>
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
      </>
   );
}
