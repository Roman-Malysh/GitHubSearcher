import {User} from '../Types/User';

type Props = {
  user: User;
};

export const Users: React.FC<Props> = ({user}) => (
  <div className='bg-white flex border-2 flex flex-col justify-center w-full p-6 items-center max-w-1 mt-20 mb-20'>
    <img src={user.avatar_url} alt='img' className='w-4/5 mt-20' />
    <p className='text-center mt-2'>{user.name}</p>
    <p className='text-center'>{user.bio}</p>
    {user.company && <p className='text-center'>Company: {user.company}</p>}
    <p className='text-center'>BLOG: {user.blog}</p>
    <p className='text-center'>Public Repos: {user.public_repos}</p>
    <a
      href={user.html_url}
      rel='norefferer'
      target='_blank'
      className='font-medium text-blue-600 dark:text-blue-500 hover:underline text-center'
    >
      {user.html_url}
    </a>
  </div>
);
