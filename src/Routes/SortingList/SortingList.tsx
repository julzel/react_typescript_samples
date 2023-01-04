import React, { useState, useCallback, useEffect } from 'react';

interface User {
  name: string;
  lastName: string;
  id: string;
  email: string;
  thumbnail: string;
}

interface SortingListProps {
  users: User[];
}

const SortingList: React.FC<SortingListProps> = ({ users }) => {
  const [sortedUsers, setSortedUsers] = useState(users);

  useEffect(() => setSortedUsers(users), [users]);

  const sortByName = () => {
    const sorted = [...sortedUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    console.log(sorted);
    setSortedUsers(sorted);
  };

  const sortByEmail = () => {
    const sorted = [...sortedUsers].sort((a, b) =>
      a.email.localeCompare(b.email)
    );
    console.log(sorted);
    setSortedUsers(sorted);
  };

  return (
    <div>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByEmail}>Sort by Email</button>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            {user.name} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortingList;
