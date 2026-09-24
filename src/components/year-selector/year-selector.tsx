import styles from './year-selector.module.css';
import { memo, useMemo } from 'react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = memo(({ value, onChange }: SearchBarProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor="search" className={styles.label}>
        Search countries:
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type to search..."
        className={styles.input}
      />
    </div>
  );
});

type YearSelectorProps = {
  year: number;
  years: number[];
  onChange: (year: number) => void;
};

// вынес в отдельный memo созданный селектор с опциями. Список на
// 200+ стран рендерился каждый раз, а он фиксированный.
export const YearSelector = memo(({ year, years, onChange }: YearSelectorProps) => {
  const options = useMemo(
    () =>
      years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      )),
    [years]
  );

  return (
    <div className={styles.container}>
      <label htmlFor="year" className={styles.label}>
        Select year:
      </label>
      <select
        id="year"
        value={year}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.select}
      >
        {options}
      </select>
    </div>
  );
});
