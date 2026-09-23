import { scan } from 'react-scan';
import { Profiler, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './components/app/app';

scan({
  enabled: false,
});

// добавлеен встроеный копонент реакт - Profiler, т.к. после
// длобавления react-window - падает ошибка при проверке в profiler!!!
// ошибка не в коде, а profiler не может прочитаь правильно react-window

// функция - показывает сколько занял рендер
function onRender(id: string, phase: 'mount' | 'update' | 'nested-update', actualDuration: number) {
  console.log(`${id} [${phase}]: ${actualDuration.toFixed(2)}ms`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </StrictMode>
);
