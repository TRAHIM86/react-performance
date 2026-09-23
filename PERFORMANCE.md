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

## Summary of Improvements

| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 1667.8        | 149.3          | 91.05%      |
| Search countries | 108.8         | 122.0          | -12.13%     |
| Change year      | 107.3         | 120.7          | -12.49%     |
| Toggle column    | 114.1         | 108.7          | 4.73%       |
| **Average**      | **499.5**     | **125.2**      | **17.79%**  |
