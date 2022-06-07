import { useSelector } from 'react-redux';
import { State } from '../../store';
import { selectList } from '../../store/ListaAleatoria/reducer';

export function RandomList() {
  const listaAleatoria = useSelector(selectList);

  return (
    <aside>
      <ul>
        { listaAleatoria?.map((value) => (
          <li>{ value }</li>
        )) }
      </ul>
    </aside>
  );
}
