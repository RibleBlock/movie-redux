import { useSelector } from 'react-redux';
import { selectList } from '../../store/ListaAleatoria/redocer';

// interface ListMoviesProps {
//   categories: Object[];
// }
export function ListMovies() {
  const listaAleatoria = useSelector(selectList);

  return (
    <aside>
      { listaAleatoria.map((item) => (
        <div key={item}>
          <h3>{ item }</h3>
        </div>
      )) }
    </aside>
  );
}
