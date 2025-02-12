import "./app.css";
import { Component, createRef, RefObject } from "preact";
import { createGrid, GridApi } from "ag-grid-enterprise";
import { ICar, gridOptions } from './options.ts';

export class App extends Component {
  div: RefObject<any>;
  grid: GridApi<ICar> = null as any;

  constructor() {
    super();
    this.div = createRef();
  }

  componentDidMount() {
    this.grid = createGrid(this.div.current, gridOptions);
  }

  render() {
    return (
      <>
        <h1>AG-GRID Component</h1>
        <div class="grid" ref={this.div}></div>
      </>
    );
  }
}
