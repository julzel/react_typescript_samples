import React, { useEffect, useState } from 'react';
import SortingList from './SortingList';

const SortingListContainer: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/data/users-mock.json')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <SortingList users={users} />
    </div>
  );
};

export default SortingListContainer;
