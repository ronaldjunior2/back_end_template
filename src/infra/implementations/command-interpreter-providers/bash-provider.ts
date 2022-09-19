// import shell from "shelljs";
// import { rootPath } from "../../../../root-config";
// import { ICommandInterpreterProvider } from "../protocols";

// export class BashProvider implements ICommandInterpreterProvider {
//   createFolderAndGetIn(folderName: string): void {
//     shell.mkdir(folderName);
//     shell.cd(folderName);
//   }

//   runInlinerCommand(command: string): void {
//     shell.exec(command);
//   }

//   goToRootPath(): void {
//     shell.cd(rootPath);
//   }

//   currentFolderGetOutOneLevel(): void {
//     shell.cd("..");
//   }
// }
