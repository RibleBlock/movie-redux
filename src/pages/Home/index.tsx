import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RandomList } from '../../components';
import { State } from '../../store';
import { Section } from './Home.styles';

export function Home() {
  const user = useSelector((state: State) => state.users.selectedUser);

  return (
    <>
      { user && (
        <Section>
          <h2>usuário selecionado</h2>
          <p>
            ID:
            {` ${user.id}`}
          </p>
          <p>
            NOME:
            {` ${user.name}`}
          </p>
        </Section>
      ) }

      <section>
        <Section>
          <RandomList />
        </Section>

        <Link to="/sobre">
          Vá para a Página Sobre
        </Link>
        <br />
        <Link to="/user">
          Vá para a Página User
        </Link>
      </section>
    </>
  );
}
