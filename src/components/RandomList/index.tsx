import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../store';

export function RandomList() {
  const listaAleatoria = useSelector((state: State) => state.list);

  return (
    <aside>
      <ul>
        { listaAleatoria?.list.map((value) => (
          <li>{ value }</li>
        )) }
      </ul>
    </aside>
  );
}
