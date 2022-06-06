import styled from 'styled-components';

export const Box = styled.div`
  max-width: 10rem;
  margin-top: 1rem;
  padding: .3rem .8rem;
  vertical-align: top;
  border: 1px solid #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'id button'
    'name name'
  ;

  > button {
    grid-area: button;
    width: 4rem;
    height: 2rem;
    align-self: center;
    justify-self: end;
  }
  > p {
    grid-area: id;
  }
  > p:last-child {
    grid-area: name;
  }
`;
