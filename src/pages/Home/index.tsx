import { Link } from 'react-router-dom';
import { RandomList } from '../../components';

export function Home() {
  return (
    <section>
      <RandomList />
      <Link to="/sobre">
        Vá para a Página Sobre
      </Link>
    </section>
  );
}
