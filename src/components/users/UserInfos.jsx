import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserInfos(props) {
  const {
    avatar_url,
    name,
    html_url,
    type,
    hireable,
    bio,
    location,
    blog,
    twitter_username,
  } = props;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 m-4">
      <Link to={'/'} className="btn">
        BACK TO HOME PAGE
      </Link>
      <div className="avatar w-fit rounded-xl m-auto md:col-start-1 md:col-end-2 sm:col-start-1 sm:col-end-2">
        <img src={avatar_url} alt="" />
      </div>
      <div className="flex flex-col md:col-start-2 md:col-end-5 sm:m-4">
        <div className="flex items-center mb-4">
          <h1 className="text-white text-2xl font-bold mr-2">
            <a className="link link-hover" href={html_url}>
              {name}
            </a>
          </h1>
          <div className="badge badge-ghost badge-outline mr-2">{type}</div>
          <div>
            {hireable ? (
              <div className="badge badge-accent badge-outline">Hireable</div>
            ) : (
              <div className="badge badge-secondary badge-outline">
                Non Hireable
              </div>
            )}
          </div>
        </div>
        <div className="mb-4">{bio}</div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          <div className="p-2 bg-base-200 shadow-xl rounded">
            <p>Location</p>
            <p className="text-xl text-white font-bold break-words">
              {location ? location : 'Not specified'}
            </p>
          </div>
          <div className="p-2 bg-base-200 shadow-xl rounded">
            <p>Website</p>
            <p className="text-xl text-white font-bold break-words">
              {blog ? blog : 'Not specified'}
            </p>
          </div>
          <div className="p-2 bg-base-200 shadow-xl rounded">
            <p>Twitter</p>
            <p className="text-xl text-white font-bold break-words">
              {twitter_username ? twitter_username : 'Not specified'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

UserInfos.propTypes = {
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  html_url: PropTypes.string,
  type: PropTypes.string,
  hireable: PropTypes.bool,
  bio: PropTypes.string,
  location: PropTypes.string,
  blog: PropTypes.string,
  twitter_username: PropTypes.string,
};
export default UserInfos;
