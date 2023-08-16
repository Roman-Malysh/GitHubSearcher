import { FormEvent, useState } from 'react';
import React from 'react';
import { Users } from './components/Users';
import { Error } from './components/Error';
import { getUsers } from './utils/GetUsers';
import { Title } from './components/Title';
import './App.css';
import { Loader } from './components/Loader';

export const App: React.FC = () =>  {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUsers, setIsUsers] = useState(false);
  const [user, setUsers] = useState({});
  const [isError, setIsError] = useState(false);

  function handleChange (event: React.FormEvent<HTMLInputElement>) {
    const res = event.currentTarget.value;
    setSearch(res);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const value = `${search.replace(/\s/g, '')}`
    setIsUsers(false);
    setIsError(false);
    setSearch('');
    setIsLoading(true);
    const res =  await getUsers(value);
    setTimeout(() => {
      if (res === null) {
        setIsUsers(false);
        setIsLoading(false);
        setIsError(true);
      } else {
        setUsers(res);
        
        console.log(res);
        setSearch('');
        setIsLoading(true);
        setIsLoading(false);
        setIsUsers(true);
        setIsError(false);
      }
    },1000)
  }

  return (
    <div className='p-2 items-center flex flex-col'>
      <Title />
      <form onSubmit={handleSubmit} className='w-full'>
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Provide a user name..'
            required
            value={search}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Search
          </button>
        </div>
      </form>
      {isLoading && (
       <Loader />
     )}
      {isUsers && (
        <Users user={user}/>
      )}
      {isError && (
        <Error />
      )}
      </div>
  );
}

export default App;
