import strapi from '@/api/strapiAdapter';
import { Clients } from '@/features/Clients/Clients';
import { extractAttributes } from '@/helpers/extractAttributes';
import { Clients as ClientsType } from '@/types/Clients';

export default function ClientsPage({ clients }: { clients: ClientsType[] }) {
   return <Clients clients={clients} />;
}

export async function getServerSideProps() {
   try {
      const response = await strapi(`/clients`);
      const clients: ClientsType[] = extractAttributes(response.data.data);

      return {
         props: {
            clients,
         },
      };
   } catch (error) {
      console.error('Error fetching data:', error);
      return {
         props: {
            posts: [],
         },
      };
   }
}
