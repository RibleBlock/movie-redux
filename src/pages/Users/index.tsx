import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../store';
import { selectUser } from '../../store/Users/reducer';
import { Box } from './Users.styles';

export function Users() {
  const selected = useSelector((state: State) => state.users.selectedUser);
  const users = useSelector((state: State) => state.users.users);
  const dispatch = useDispatch();

  return (
    <>
      <Link to="..">
        voltar
      </Link>
      <h1>usuarios</h1>

      { selected && (
      <header>
        <p>
          ID:
          { ` ${selected?.id}` }
        </p>
        <p>
          NOME:
          { ` ${selected?.name}` }
        </p>
      </header>
      ) }

      <ol>
        { users?.map(({ id, name }) => (
          <li key={id}>
            <Box>
              <p>
                ID:
                {' '}
                { id }
              </p>

              <button
                type="button"
                onClick={() => dispatch(selectUser({ id, name }))}
              >
                Select
              </button>

              <p>
                NOME:
                {' '}
                { name }
              </p>
            </Box>
          </li>
        )) }
      </ol>
    </>
  );
}
