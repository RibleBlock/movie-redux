import { useSelector } from 'react-redux';
import { showUsers } from '../../store/Users/reducer';

export function Users() {
  const { selectedUser, users } = useSelector(showUsers);

  return (
    <>
      <h1>usuarios</h1>
      <h1>{ selectedUser?.name }</h1>
      <ol>
        { users?.map((v) => (
          <li>
            {v.id}
            {v.name}
          </li>
        )) }
      </ol>
    </>
  );
}
