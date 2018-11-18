import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableStyle = styled.table``;


export const Row = styled.tr``;

export const Head = styled(Row)`
  font-weight: bold;
`;

export const HeadCell = styled.th;

export const Cell = styled.td`
  border: 1px solid #333;
  padding: 5px 15px;
`;

export const Table = ({ children }) => (
  <TableStyle>
    <tbody>
      {children}
    </tbody>
  </TableStyle>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};
