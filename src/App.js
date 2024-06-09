import { useState, useEffect } from 'react';
import Users from './components/users/users.component';
import './App.css';

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
}

function App() {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [pageIsLoading, setPageIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const pageSize = 3;

    const fetchUsers = async () => {
      setPageIsLoading(true);
      const data = await getData('https://jsonplaceholder.typicode.com/users');
      const start = page * pageSize;
      const end = start + pageSize;
      const usersPerPage = data.slice(start, end);
      setUsers([...users, ...usersPerPage]);
      setPageIsLoading(false);
    }

  return (
    <div className="App">
      <Users users={users}/>
      <button style={{ marginTop: '20px', marginBottom: '50px' }}  disabled={pageIsLoading} onClick={() => setPage(page + 1)}>{pageIsLoading ? 'Loading...' : 'Load more users'}</button>
    </div>
  );
}

export default App;
