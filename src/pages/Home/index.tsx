import { Link } from 'react-router-dom';
import { ListMovies, Player } from '../../components';

export function Home() {
  return (
    <section>
      <ListMovies />
      <Link to="/sobre">
        Vá para a Página Sobre
      </Link>
    </section>
  );
}
