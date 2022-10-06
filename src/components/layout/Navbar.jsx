import { FaGithub } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
  return (
    <nav className="navbar mb-6 shadow-lg bg-neutral text-neutral-content">
      <div className="flex justify-between container mx-auto max-w-screen-xl">
        <div className="btn flex items-center mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to={'/'} className="text-lg font-bold">
            {title}
          </Link>
        </div>
        <div className="flex-none mx-2">
          <ul className="menu menu-horizontal mx-1">
            <Link to={'/'} className="btn btn-ghost btn-sm">
              Home
            </Link>
          </ul>
          <ul className="menu menu-horizontal mx-1">
            <Link to={'/about/'} className="btn btn-ghost btn-sm">
              About
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'GitHub Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
