// import {
//   CloneRepositories,
//   ICommandInterpreterProvider,
//   IRepositoriesProviders,
// } from "../protocols";

// export class GitHubProvider implements IRepositoriesProviders {
//   constructor(
//     private readonly commandInterpreterProvider: ICommandInterpreterProvider
//   ) {}

//   cloneOneRepositories(params: CloneRepositories.Params): void {
//     const { urls, batchId, projectId } = params;
//     this.commandInterpreterProvider.createFolderAndGetIn("repositories");
//     for (const url of urls) {
//       this.commandInterpreterProvider.runInlinerCommand(`git clone ${url}`);
//     }
//     this.commandInterpreterProvider.goToRootPath();
//   }
// }
