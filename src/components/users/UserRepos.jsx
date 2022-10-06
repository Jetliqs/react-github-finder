import PropTypes from 'prop-types';
import UserReposItems from './UserReposItems';

function UserRepos(props) {
  const { repos } = props;

  return (
    <div>
      <p className="text-white text-2xl font-bold my-8 mx-4">
        Latest repositories
      </p>
      <div className="grid grid-cols-1 gap-4 my-8 mx-4">
        {repos.map((repo) => (
          <UserReposItems key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

UserRepos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default UserRepos;
