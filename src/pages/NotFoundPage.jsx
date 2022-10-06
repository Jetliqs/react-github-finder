import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-7xl text-white font-bold my-4">Oops!</p>
      <p className="text-4xl text-white mb-6">404 - Page not found!</p>
      <Link to={'/'} className="btn gap-2 btn-primary">
        <FaHome />
        BACK TO HOME
      </Link>
    </div>
  );
}

export default NotFoundPage;
