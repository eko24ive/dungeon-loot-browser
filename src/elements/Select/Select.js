import styled from 'styled-components';

export default styled.select`
    width: 100%;
    min-height: 40px;
    font-size: 18px;
    padding: 0 0 0 20px;
    border-radius: 3px;

    & > option {
      padding: 10px 0;
      &[disabled] {
        background: #e8e8e8;
      }
    }
`;
