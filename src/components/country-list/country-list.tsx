import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';

import styles from './country-list.module.css';
import { useMemo } from 'react';
import { memo } from 'react';

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
    const yearMap = useMemo(
      () => new Map(countries.map((country) => [country.id, createYearDataMap(country.data)])),
      [countries]
    );

    // длобавил useMemo, для мемо отфильтрованного и отсортированного списка
    // пересчет только от зависимсотей (строка поиска, регин, порядок сорт, год)
    const filteredCountries = useMemo(() => {
      // кэшируем заранее map всех годов для каждой страны, т.к. ранее
      // код map выполнялся в createYearDataMap() и вызывался при каждом
      // сравнении двух стран в сортировке
      const yearMap = new Map(
        countries.map((country) => [country.id, createYearDataMap(country.data)])
      );

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
    }, [countries, searchQuery, selectedRegion, sortField, sortOrder, selectedYear]);

    return (
      <div className={styles.countryList}>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
            selectedYear={selectedYear}
            selectedColumns={selectedColumns}
            yearDataMap={yearMap.get(country.id)}
          />
        ))}
      </div>
    );
  }
);
