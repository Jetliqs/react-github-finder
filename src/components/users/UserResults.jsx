import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  const { isLoading, usersData } = useContext(GithubContext);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {usersData.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default UserResults;
