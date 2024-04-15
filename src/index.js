"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_morph_1 = require("ts-morph");
const project = new ts_morph_1.Project({
    tsConfigFilePath: `fixtures/nodeApp/tsconfig.json`,
});
const diagnostics = project.getPreEmitDiagnostics();
console.log(project.formatDiagnosticsWithColorAndContext(diagnostics));
