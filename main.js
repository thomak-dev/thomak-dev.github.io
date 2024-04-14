import { dotnet } from "./_framework/dotnet.js";

const { setModuleImports, getAssemblyExports, getConfig } = await dotnet
    .withDiagnosticTracing(false)
    .withApplicationArgumentsFromQuery()
    .create();

setModuleImports('main.js', {
    /**
     * @param {string} message
     */
    showAlert(message) {
        alert(message);
    }
});

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);
const boom = exports.Wergel.Client.Interop.Boom;

document.getElementById("boom-btn").addEventListener("click", boom);
await dotnet.run();
