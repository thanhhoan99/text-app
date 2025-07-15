
const baseUrl = 'https://server.aptech.io';
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyMDg3MTk1LCJleHAiOjE3ODM2NDQ3OTV9.faZwG9__riyB5qH-x9lVK4GDj3kuyFt6C639FtQ6cok'

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
};
export async function getTasks () {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    headers: defaultHeaders,
  });
  return await response.json();
};