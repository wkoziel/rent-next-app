export function extractAttributes(data: any) {
   console.log('extractAttributes', data);
   if (data && Array.isArray(data)) {
      return data.map((item) => ({ id: item.id, ...item.attributes }));
   }

   return [];
}
