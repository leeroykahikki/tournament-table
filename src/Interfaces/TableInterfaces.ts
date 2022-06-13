export interface TableCellI {
  nickname: string;
  link: string;
  account: string;
  score: number;
}

export interface TableInfoI {
  title: string;
  tableCells: TableCellI[] | undefined;
}
