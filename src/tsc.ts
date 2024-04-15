import fs from 'fs'
import ts from 'typescript'

const configObject = ts.parseConfigFileTextToJson(`fixtures/nodeApp/tsconfig.json`, fs.readFileSync(`fixtures/nodeApp/tsconfig.json`).toString());

const configParseResult = ts.parseJsonConfigFileContent(configObject.config, ts.sys, process.cwd(), undefined, `fixtures/nodeApp/tsconfig.json`);


const compilerHost = ts.createCompilerHost(configParseResult.options);
    const programOptions = {
        rootNames: configParseResult.fileNames,
        options: configParseResult.options,
        projectReferences: configParseResult.projectReferences,
        host: compilerHost,
        configFileParsingDiagnostics: ts.getConfigFileParsingDiagnostics(configParseResult)
    };
    const program = ts.createProgram(programOptions);
    const emitResult = program.emit();

    console.log(ts.formatDiagnosticsWithColorAndContext(ts.getPreEmitDiagnostics(program), compilerHost))