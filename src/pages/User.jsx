import { useContext, useEffect } from 'react';
import GithubContext from '../context/github/GithubContext';
import { useParams } from 'react-router-dom';

import UserStats from '../components/users/UserStats';
import UserInfos from '../components/users/UserInfos';
import UserRepos from '../components/users/UserRepos';

import { getUserAndRepos } from '../context/github/GithubActions';

import Spinner from '../components/layout/Spinner';

function User() {
  const params = useParams();
  const { isLoading, user, repos, dispatch } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: { isLoading: true } });
    const getUserInfos = async () => {
      try {
        const { userData, userRepos } = await getUserAndRepos(params.login);
        dispatch({
          type: 'GET_USER_DATA_AND_REPOS',
          payload: {
            isLoading: false,
            user: userData,
            repos: userRepos,
          },
        });
      } catch {
        window.location = '/notfound';
      }
    };
    getUserInfos();
  }, [dispatch, params.login]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <UserInfos
          avatar_url={user.avatar_url}
          name={user.name}
          html_url={user.html_url}
          type={user.type}
          hireable={user.hireable}
          bio={user.bio}
          location={user.location}
          blog={user.blog}
          twitter_username={user.twitter_username}
        />

        <UserStats
          followers={user.followers}
          following={user.following}
          public_repos={user.public_repos}
          public_gists={user.public_gists}
        />

        <UserRepos repos={repos} />
      </div>
    );
  }
}

export default User;
