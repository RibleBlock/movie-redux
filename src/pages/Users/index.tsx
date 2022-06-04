import { useSelector } from 'react-redux';
import { showUsers, User } from '../../store/Users/reducer';

export function Users() {
  const { selectedUser, users } = useSelector(showUsers);

  return (
    <>
      <h1>{ selectedUser?.name }</h1>
      <ol>
        { users.map((v: User) => (
          <li>
            {v.id}
            {v.name}
          </li>
        )) }
      </ol>
    </>
  );
}
