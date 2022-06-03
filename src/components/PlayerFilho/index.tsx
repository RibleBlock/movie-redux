import { useSelector } from 'react-redux';
import { selectList } from '../../store/ListaAleatoria/redocer';

export function PlayerFilho() {
  const lista = useSelector(selectList);

  return (
    <>
      <h1>PLAYERFilho</h1>
      <ol style={{ backgroundColor: '#ffdddd ' }}>
        { lista.map((item) => (
          <li>
            { item }
          </li>
        )) }
      </ol>
    </>
  );
}
