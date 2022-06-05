import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../store';
import { selectList, TypeList } from '../../store/ListaAleatoria/reducer';

export function RandomList() {
  const listaAleatoria = useSelector((state: State) => state.list);
  console.log(listaAleatoria);

  return (
    <aside>
      <ul>
        { listaAleatoria?.list.map((value) => (
          <li>{ value }</li>
        )) }
      </ul>
      <Link to="/users">
        USERS :D
      </Link>
    </aside>
  );
}
