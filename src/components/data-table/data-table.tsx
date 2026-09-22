import type { YearData } from '../../types';
import { formatNumber } from '../../utils/format-utils';

import styles from './data-table.module.css';

type DataTableProps = {
  data: YearData | undefined;
  year: number;
  columns: string[];
};

export const DataTable = ({ data, year, columns }: DataTableProps) => {
  // убрали тяжелыый фильтр, т.к. получаем текущий год от родителя
  //const yearData = data.filter((d) => d.year === year);

  // if (yearData.length === 0) {
  // т.к. изменили на объект {данные по выбранному году}, то нет длины
  if (!data) {
    return <div className={styles.noData}>No data available for year {year}</div>;
  }

  // убрали, т.к. получаем сразу текущий год от родителя
  //const record = yearData[0];

  return (
    <table className={styles.table}>
      <tbody>
        {columns.map((column) => (
          <tr key={column} className={styles.row}>
            <td className={styles.labelCell}>{column.replace(/_/g, ' ').toUpperCase()}</td>
            <td className={styles.valueCell}>
              {formatNumber(data[column as keyof YearData] as number | undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
