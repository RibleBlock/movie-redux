import { Link } from 'react-router-dom';
import { Player } from '../../components';

export function Sobre() {
  return (
    <>
      <h1>SOBRE</h1>
      <Link to="..">
        Voltar Para Home
      </Link>
      <Player />
    </>
  );
}
