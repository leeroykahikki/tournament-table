import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { TableCellI, TableInfoI } from 'Interfaces/TableInterfaces';
import React, { useState } from 'react';

import styles from './Table.module.scss';
function Table({ fetchedInfo }: { fetchedInfo: TableInfoI }) {
  const [info] = useState<TableInfoI>(fetchedInfo);

  return (
    <div className={`container`}>
      <table className="table table-hover table-bordered caption-top">
        <caption>{info.title}</caption>
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Никнейм</th>
            <th scope="col">VK</th>
            <th scope="col">BattleNet</th>
            <th scope="col">Счёт</th>
          </tr>
        </thead>
        <tbody>
          {info?.tableCells?.map((tableCell: TableCellI, index: number) => (
            <tr key={`${tableCell.account} + ${index + 1}`}>
              <th scope="row">{index + 1}</th>
              <td>{tableCell.nickname}</td>
              <td>
                <a href={`https://${tableCell.link}`} target="_blank" rel="noreferrer">
                  {tableCell.link}
                </a>
              </td>
              <td>{tableCell.account}</td>
              <td className={`${styles.score}`}>{tableCell.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
