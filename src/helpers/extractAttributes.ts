export function extractAttributes(data: any) {
  if (data && Array.isArray(data)) {
    return data.map((item) => ({ id: item.id, ...item.attributes }));
  }

  return [];
}
