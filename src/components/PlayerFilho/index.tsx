import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store';
import { addItem, selectList } from '../../store/ListaAleatoria/reducer';

export function PlayerFilho() {
  const lista = useSelector((state: State) => state.list.list);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState<string>('');

  return (
    <>
      <h1>PLAYERFilho</h1>
      <input
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        style={{ fontSize: 16 }}
      />
      <button
        onClick={() => dispatch(addItem(inputText))}
        type="button"
        style={{ fontSize: 16 }}
      >
        Adicionar item
      </button>
      <ol style={{ backgroundColor: '#ffdddd', fontSize: 16 }}>
        { lista?.map((item) => (
          <li>
            { item }
          </li>
        )) }
      </ol>
    </>
  );
}
