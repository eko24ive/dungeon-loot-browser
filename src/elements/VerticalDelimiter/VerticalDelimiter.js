import styled, { css } from 'styled-components';

export default styled.div`
  ${props => (props.desktop ? css`
  height: 10px;
    width: 10px;
  ` : '')}
  @media (max-width: 770px) {
    height: 10px;
    width: 10px;
  }
`;
