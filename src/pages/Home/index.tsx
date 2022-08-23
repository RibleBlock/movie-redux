import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserSelected } from '../../store/Users/reducer';
import { Section } from './Home.styles';

export function Home() {
  const user = useSelector(selectUserSelected);

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
        <Link to="/user">
          Selecionar um USUÁRIO
        </Link>
      </section>
    </>
  );
}
