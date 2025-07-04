export const load = async ({ url }) => {
  const nameParam = url.searchParams.get('name') || '';
  
  let result = null;

  if (nameParam) {
    const response = await fetch(`https://api.agify.io?name=${encodeURIComponent(nameParam)}`);
    result = await response.json();
  }

  return { result };
} 