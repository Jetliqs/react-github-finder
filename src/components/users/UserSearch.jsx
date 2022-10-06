import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers, clearSearch } from '../../context/github/GithubActions';

function UserSearch() {
  const [text, setText] = useState('');
  const { usersData, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something!', 'error');
    } else {
      dispatch({
        type: 'SET_LOADING',
        payload: {
          isLoading: true,
        },
      });
      const data = await searchUsers(text);
      if (data.length === 0) {
        setAlert('No user found!', 'error');
        dispatch({
          type: 'GET_USERS',
          payload: {
            usersData: data,
            isLoading: false,
          },
        });
        setText('');
      } else {
        dispatch({
          type: 'GET_USERS',
          payload: {
            usersData: data,
            isLoading: false,
          },
        });
        setText('');
      }
    }
  };

  const clearUserSearch = () => {
    const data = clearSearch();
    dispatch({
      type: 'CLEAR_USERS',
      payload: {
        usersData: data,
      },
    });
  };

  const userSearchForm = (
    <form className="form-control" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          className="input w-full rounded-r-none bg-gray-200 text-black"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit" className="btn absolute w-fit rounded-l-none">
          Search
        </button>
      </div>
    </form>
  );

  if (usersData.length > 0) {
    return (
      <div className="grid gap-4 lg:grid-cols-11 md:grid-cols-9 sm:grid-cols-8 grid-cols-5 p-4">
        <div className="lg:col-span-9 md:col-span-7 sm:col-span-6 col-span-3">
          {userSearchForm}
        </div>
        {usersData.length > 0 && (
          <div className=" lg:col-start-11 md:col-start-9 sm:col-start-8 col-start-5">
            <button onClick={clearUserSearch} className="btn btn-primary">
              Clear
            </button>
          </div>
        )}
      </div>
    );
  } else if (usersData.length === 0) {
    return (
      <div className="grid gap-4 lg:grid-cols-11 md:grid-cols-9 sm:grid-cols-8 grid-cols-5 p-4">
        <div className="lg:col-span-10 md:col-span-8 sm:col-span-7 col-span-4">
          {userSearchForm}
        </div>
        {usersData.length > 0 && (
          <div className=" lg:col-start-11 md:col-start-9 sm:col-start-8 col-start-5">
            <button onClick={clearUserSearch} className="btn btn-primary">
              Clear
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default UserSearch;
