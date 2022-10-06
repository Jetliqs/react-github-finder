import React from 'react';
import { Link } from 'react-router-dom';

function UserItem({ user }) {
  return (
    <div key={user.id} className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow w-14 h-14">
            <img key={user.id} src={user.avatar_url} alt="Profile" />
          </div>
        </div>
        <div>
          <h2 className="card-title text-white mb-1">{user.login}</h2>
          <Link
            to={`/user/${user.login}`}
            className="text-base-content text-opacity-40"
          >
            Visit profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
