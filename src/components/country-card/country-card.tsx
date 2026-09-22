import type { Country, YearData } from '../../types';
import { DataTable } from '../data-table/data-table';
/*import {
  getPopulationForYear,
  getCo2ForYear,
  createYearDataMap,
} from '../../utils/data-transformers';*/
import { formatNumber } from '../../utils/format-utils';

import styles from './country-card.module.css';

type CountryCardProps = {
  country: Country;
  selectedYear: number;
  selectedColumns: string[];
  yearDataMap: Map<number, YearData> | undefined;
};

export const CountryCard = ({
  country,
  selectedYear,
  selectedColumns,
  yearDataMap,
}: CountryCardProps) => {
  /*const yearDataMap = createYearDataMap(country.data);
  const population = getPopulationForYear(yearDataMap, selectedYear);
  const co2 = getCo2ForYear(yearDataMap, selectedYear);*/

  // исправил вытягивание данных через переданный мап годов
  // по выбранной стране ("Poland" => ключ 2000,2001,2002,2003...).
  // значение - данные по годам
  const yearData = yearDataMap?.get(selectedYear);
  const population = yearData?.population;
  const co2 = yearData?.co2;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{country.id}</h3>
        {country.iso_code && <span className={styles.isoCode}>{country.iso_code}</span>}
      </div>

      <div className={styles.stats}>
        <div>
          Population ({selectedYear}): {formatNumber(population)}
        </div>
        <div>
          CO₂ Emissions ({selectedYear}): {formatNumber(co2)} tonnes
        </div>
      </div>

      <DataTable data={country.data} year={selectedYear} columns={selectedColumns} />
    </div>
  );
};
