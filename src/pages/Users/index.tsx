import { useSelector } from 'react-redux';
import { State } from '../../store';

export function Users() {
  const selected = useSelector((state: State) => state.users.selectedUser);
  const users = useSelector((state: State) => state.users.users);

  return (
    <>
      <h1>usuarios</h1>
      <h1>{ selected?.name }</h1>
      <ol>
        { users?.map(({ id, name }) => (
          <li key={id}>
            <p>
              ID:
              {' '}
              { id }
            </p>
            <p>
              {' '}
              NOME:
              {' '}
              { name }
            </p>
          </li>
        )) }
      </ol>
    </>
  );
}
