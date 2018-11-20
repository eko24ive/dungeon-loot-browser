import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default ({ ...props }) => (
  <ReactTable
    previousText="<="
    nextText="=>"
    loadingText="Загружаем..."
    pageText="Страница"
    ofText="из"
    rowsText="записей"
    rowsSelectorText="записей на странице"
    noDataText="Данных нет"
    defaultPageSize={5}
    {...props}
  />
);
