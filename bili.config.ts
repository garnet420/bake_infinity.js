import { Config } from "bili"

const config: Config = {
    input: "src/bake_infinity.ts",
    output: {
        format: ["umd", "umd-min", "esm", "cjs"],
        moduleName: "Decimal",
        sourceMap: false,
        fileName: (context, defaultFileName) => {
            switch (context.format) {
                case "umd":
                    return context.minify ? "bake_infinity.min.js" : "bake_infinity.js";
                case "esm":
                    return "bake_infinity.esm.js";
                case "cjs":
                    return "bake_infinity.cjs.js";
                default:
                    return defaultFileName;
            }
        }
    }
};

export default config