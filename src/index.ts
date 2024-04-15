import { Project } from 'ts-morph'
import path from 'path'

const project = new Project(
  {
    tsConfigFilePath: `fixtures/nodeApp/tsconfig.json`,
  }
);

const diagnostics = project.getPreEmitDiagnostics()

console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))