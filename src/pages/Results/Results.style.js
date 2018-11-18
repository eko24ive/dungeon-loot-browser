import styled from 'styled-components';

export default styled.div`
  display:flex;
  padding: 20px 40px;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ResultBlock = styled.div`
  flex: 1;

  &:first-child {
    margin-right: 10px;
  }

  &:last-child {
    margin-left: 10px;
  }

  @media (max-width: 800px) {
    &:first-child {
      margin-bottom: 10px;
      margin-right: 0;
    }

    &:last-child {
      margin-top: 10px;
      margin-left: 0;
    }
  }
`;
