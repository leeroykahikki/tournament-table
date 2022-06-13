import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import Table from 'Components/Table';
import { TableInfoI } from 'Interfaces/TableInterfaces';
import React from 'react';

function HomePage() {
  const fetchedInfo: TableInfoI = {
    title: 'Группа A',
    tableCells: [
      {
        nickname: 'Leeroyka',
        link: 'vk.com/leeroykahikki',
        account: 'Leeroyka#21958',
        score: 2,
      },
      {
        nickname: 'Leeroyka',
        link: 'vk.com/leeroykahikki',
        account: 'Leeroyka#21958',
        score: 4,
      },
      {
        nickname: 'Leeroyka',
        link: 'vk.com/leeroykahikki',
        account: 'Leeroyka#21958',
        score: 1,
      },
      {
        nickname: 'Leeroyka',
        link: 'vk.com/leeroykahikki',
        account: 'Leeroyka#21958',
        score: 0,
      },
    ],
  };
  return (
    <>
      <Table fetchedInfo={fetchedInfo} />
    </>
  );
}

export default HomePage;
