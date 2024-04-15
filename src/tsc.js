"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const typescript_1 = __importDefault(require("typescript"));
const configObject = typescript_1.default.parseConfigFileTextToJson(`fixtures/nodeApp/tsconfig.json`, fs_1.default.readFileSync(`fixtures/nodeApp/tsconfig.json`).toString());
const configParseResult = typescript_1.default.parseJsonConfigFileContent(configObject.config, typescript_1.default.sys, process.cwd(), undefined, `fixtures/nodeApp/tsconfig.json`);
const compilerHost = typescript_1.default.createCompilerHost(configParseResult.options);
const programOptions = {
    rootNames: configParseResult.fileNames,
    options: configParseResult.options,
    projectReferences: configParseResult.projectReferences,
    host: compilerHost,
    configFileParsingDiagnostics: typescript_1.default.getConfigFileParsingDiagnostics(configParseResult)
};
const program = typescript_1.default.createProgram(programOptions);
const emitResult = program.emit();
console.log(typescript_1.default.formatDiagnosticsWithColorAndContext(typescript_1.default.getPreEmitDiagnostics(program), compilerHost));
