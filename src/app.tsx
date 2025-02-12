import "./app.css";
import { useRef, useEffect } from "preact/hooks";
import { createGrid, GridApi } from "ag-grid-enterprise";
import { ICar, gridOptions } from './options.ts';

export function App() {
  const div = useRef<HTMLDivElement>(null);
  let grid: GridApi;

  // the callback here will run after <App> is rendered:
  useEffect(() => {
    grid = createGrid<ICar>(div.current as any, gridOptions);
    console.log(grid);
  }, []);

  return (
    <>
      <h1>AG-GRID Function</h1>
      <div class="grid" ref={div}></div>
    </>
  );
}
