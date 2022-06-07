import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { State } from '../../store';
import { changeUserSelected, selectUsers, selectUserSelected } from '../../store/Users/reducer';
import { Box } from './Users.styles';

export function Users() {
  const users = useSelector(selectUsers);
  const selectedUser = useSelector(selectUserSelected);
  const dispatch = useDispatch();

  return (
    <>
      <Link to="..">
        voltar
      </Link>
      <h1>usuarios</h1>

      { selectedUser && (
      <header>
        <p>
          ID:
          { ` ${selectedUser?.id}` }
        </p>
        <p>
          NOME:
          { ` ${selectedUser?.name}` }
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
                onClick={() => dispatch(changeUserSelected({ id, name }))}
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
