import { GridOptions } from "ag-grid-enterprise";

// Row Data interface
export interface ICar {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

export const gridOptions: GridOptions<ICar> = {
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
