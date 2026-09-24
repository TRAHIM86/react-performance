import type { Country, YearData } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';

import { useMemo } from 'react';
import { memo } from 'react';

// lsit - компонент виртуализации. Рендерит толко видимые строки
// RowComponentProps - тип для пропсов компонента строки
// принимает четыре пропса: коспонент, который редерит 1 строку
// количество строк, высоту строки и данные для строк  (пропсы)
// + useDynamicRowHeight для динамисевкой высоты строки
import { List, type RowComponentProps, useDynamicRowHeight } from 'react-window';

type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedRegion: string;
  selectedYear: number;
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
  onYearChange: (year: number) => void;
};

// компонет для рендера 1 строки. Обяхательных первых два
// пропса (индекс и стили). Остальное любые пропсы
const CountryRowComponent = ({
  index,
  style,
  countries,
  selectedYear,
  selectedColumns,
  yearMap,
}: RowComponentProps<{
  countries: Country[];
  selectedYear: number;
  selectedColumns: string[];
  yearMap: Map<string, Map<number, YearData>>;
}>) => {
  // получить данные страны по индексу
  const countryData = countries[index];

  return (
    <div style={style}>
      <CountryCard
        country={countryData}
        selectedYear={selectedYear}
        selectedColumns={selectedColumns}
        yearDataMap={yearMap.get(countryData.id)}
      ></CountryCard>
    </div>
  );
};

export const CountryList = memo(
  ({
    countries,
    searchQuery,
    selectedColumns,
    selectedRegion,
    selectedYear,
    sortField,
    sortOrder,
  }: CountryListProps) => {
    //используем динаическую высоту строки, т.к. высота скачет
    // в зависимсоти от выбранных выбросов (чекбоксов)
    const rowHeight = useDynamicRowHeight({
      defaultRowHeight: 300,
    });

    const yearMap = useMemo(
      // кэшируем заранее map всех годов для каждой страны, т.к. ранее
      // код map выполнялся в createYearDataMap() и вызывался при каждом
      // сравнении двух стран в сортировке
      () => new Map(countries.map((country) => [country.id, createYearDataMap(country.data)])),
      [countries]
    );

    // длобавил useMemo, для мемо отфильтрованного и отсортированного списка
    // пересчет только от зависимсотей (строка поиска, регин, порядок сорт, год)
    const filteredCountries = useMemo(() => {
      return countries
        .filter((c) => {
          const matchesSearch = c.id.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesRegion = !selectedRegion || c.data.some((d) => d.region === selectedRegion);
          return matchesSearch && matchesRegion;
        })
        .sort((a, b) => {
          if (sortField === 'name') {
            return sortOrder === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
          } else {
            // получить map годов страны
            const mapA = yearMap.get(a.id);
            const mapB = yearMap.get(b.id);

            const popA = mapA ? getPopulationForYear(mapA, selectedYear) || 0 : 0;
            const popB = mapB ? getPopulationForYear(mapB, selectedYear) || 0 : 0;

            return sortOrder === 'asc' ? popA - popB : popB - popA;
          }
        });
    }, [countries, searchQuery, selectedRegion, sortField, sortOrder, selectedYear, yearMap]);

    return (
      <List
        // внутри листа сама прокрутка и рендер

        // компонент, который рендерит каждую строку
        rowComponent={CountryRowComponent}
        // общее число строк (у нас список отфильтрованыых стран)
        rowCount={filteredCountries.length}
        // высота каждой строки в пикселях
        rowHeight={rowHeight}
        // объект который нужно пробросить в дочерний элемент
        // листа (как пропсы после индекса и стиля). Здесь наши данные
        // для рендера (год, выбранные колонки, мап() по выбранному году)
        rowProps={{
          countries: filteredCountries,
          selectedYear,
          selectedColumns,
          yearMap,
        }}
        style={{ height: 600, width: '100%', border: '3px solid black' }}
      />
    );
  }
);
