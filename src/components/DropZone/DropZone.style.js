import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const Text = styled.span`
    text-align: center;
    margin: 15px 0;

    color: ${props => (props.error ? '#f44336' : '')}
`;

export const NotificationsWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 15px;
  left: 10px;
`;
