import "./app.css";
import { Component, createRef, RefObject } from "preact";
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

export class App extends Component {
  div: RefObject<any>;
  grid: GridApi;
  constructor() {
    super();
    this.div = createRef();
  }

  componentDidMount() {
    this.grid = createGrid(this.div.current, gridOptions as any);
  }

  render() {
    return (
      <>
        <h1>AG-GRIDS2</h1>
        <div class="grid" ref={this.div}></div>
      </>
    );
  }
}
