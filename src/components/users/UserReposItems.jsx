import { FaLink, FaEye, FaStar, FaInfo, FaUtensils } from 'react-icons/fa';

function UserReposItems(props) {
  const { repo } = props;
  return (
    <div key={repo.id} className="bg-base-200 shadow-xl rounded p-4">
      <div className="flex items-center mb-2">
        <FaLink color="white" />
        <h2 className="text-lg text-white font-bold ml-2">{repo.name}</h2>
      </div>
      <p className="mb-4">{repo.description}</p>
      <div className="flex">
        <div className="badge badge-info w-20 mr-2">
          <FaEye className="mr-2" />
          <p>{repo.forks}</p>
        </div>
        <div className="badge badge-success w-20 mr-2">
          <FaStar className="mr-2" />
          <p>{repo.open_issues}</p>
        </div>
        <div className="badge badge-error w-20 mr-2">
          <FaInfo className="mr-2" />
          <p>{repo.stargazers_count}</p>
        </div>
        <div className="badge badge-warning w-20 mr-2">
          <FaUtensils className="mr-2" />
          <p>{repo.watchers}</p>
        </div>
      </div>
    </div>
  );
}

export default UserReposItems;
