import styled from 'styled-components';

export default styled.div`
  display:flex;
  padding: 20px 40px;
  justify-content: space-between;
`;

export const ResultBlock = styled.div`
  &:first-child {
    margin-right: 10px;
  }

  &:last-child {
    margin-left: 10px;
  }
`;
