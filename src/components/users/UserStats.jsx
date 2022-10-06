import PropTypes from 'prop-types';

import { FaStore, FaUsers } from 'react-icons/fa';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { GiShadowFollower } from 'react-icons/gi';

function UserStats(props) {
  const { followers, following, public_repos, public_gists } = props;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 m-4">
      <div className="flex justify-between items-center bg-base-200 shadow-xl rounded p-4">
        <div>
          <p>Followers</p>
          <p className="text-xl text-white font-bold break-words">
            {followers}
          </p>
        </div>
        <FaUsers size={30} color={'red'} />
      </div>
      <div className="flex justify-between items-center bg-base-200 shadow-xl rounded p-4">
        <div>
          <p>Following</p>
          <p className="text-xl text-white font-bold break-words">
            {following}
          </p>
        </div>
        <GiShadowFollower size={30} color={'red'} />
      </div>
      <div className="flex justify-between items-center bg-base-200 shadow-xl rounded p-4">
        <div>
          <p>Public Repos</p>
          <p className="text-xl text-white font-bold break-words">
            {public_repos}
          </p>
        </div>
        <RiGitRepositoryFill size={30} color={'red'} />
      </div>
      <div className="flex justify-between items-center bg-base-200 shadow-xl rounded p-4">
        <div>
          <p>Public Gists</p>
          <p className="text-xl text-white font-bold break-words">
            {public_gists}
          </p>
        </div>
        <FaStore size={30} color={'red'} />
      </div>
    </div>
  );
}

UserStats.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
  public_repos: PropTypes.number,
  public_gists: PropTypes.number,
};

export default UserStats;
