import { render } from "preact";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

import "./index.css";
// import { App } from "./app.tsx";
import { App } from "./app2.tsx";

render(<App />, document.getElementById("app")!);
