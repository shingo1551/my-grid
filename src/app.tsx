import "./app.css";
import { useRef, useEffect } from "preact/hooks";
import { createGrid, GridApi } from "ag-grid-community";

//
const gridOptions = {
  // Row Data: The data to be displayed.
  rowData: [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ],
  // Column Definitions: Defines the columns to be displayed.
  columnDefs: [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ],
};

export function App() {
  const div = useRef<HTMLDivElement>(null);
  let grid: GridApi;

  // the callback here will run after <App> is rendered:
  useEffect(() => {
    grid = createGrid(div.current as any, gridOptions as any);
    console.log(grid);
  }, []);

  return (
    <>
      <h1>AG-GRIDS</h1>
      <div class="grid" ref={div}></div>
    </>
  );
}
