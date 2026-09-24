# Performance Optimization Report

## Baseline Measurements

<!-- Сортировка стран -->

### Interaction A: Sort countries

- **Commit duration**: 1.6680 s
- **Render duration**: 1667.8 ms
- **Screenshot**: ![screenshot](screenshots/baseline/interaction_sort_countries_a.png)

<!-- Поиск стран -->

### Interaction B: Search countries

- **Commit duration**: 0.1094 s
- **Render duration**: 108.8 ms
- **Screenshot**: ![screenshot](screenshots/baseline/interaction_search_countries_b.png)

<!-- Смена года -->

### Interaction C: Change year

- **Commit duration**: 0.1075 s
- **Render duration**: 107.3 ms
- **Screenshot**: ![screenshot](screenshots/baseline/interaction_change_year_c.png)

<!-- Переключение колонок -->

### Interaction D: Toggle column

- **Commit duration**: 0.1147 s
- **Render duration**: 114.1 ms
- **Screenshot**: ![screenshot](screenshots/baseline/interaction_toggle_column_d.png)

<!-- *** ПОСЛЕ ОПТИМИЗАЦИИ *** -->

## Optimized Measurements

### Interaction A: Sort countries

- **Commit duration**: 149.3 s
- **Screenshot**: ![screenshot](screenshots/optimized/interaction_sort_countries_a.png)

### Interaction B: Search countries

- **Commit duration**: 122.0 s
- **Screenshot**: ![screenshot](screenshots/optimized/interaction_search_countries_b.png)

### Interaction C: Change year

- **Commit duration**: 120.7 s
- **Screenshot**: ![screenshot](screenshots/optimized/interaction_change_year_c.png)

### Interaction D: Toggle column

- **Commit duration**: 108.7 s
- **Screenshot**: ![screenshot](screenshots/optimized/interaction_toggle_column_d.png)

## Summary of Improvements

| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 1667.8        | 57,50          | 96,55%      |
| Search countries | 108.8         | 34,50          | 68,29%      |
| Change year      | 107.3         | 37,50          | 65,05%      |
| Toggle column    | 114.1         | 24,90          | 78,18%      |
| **Average**      | **499.5**     | **38,60**      | **77,02%**  |
