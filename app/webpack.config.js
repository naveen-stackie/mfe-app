const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
    require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        publicPath: "auto",
        clean: true,
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                formElements: "formElements@http://localhost:3001/entry.js",
            },
            shared: {
                react: { singleton: true, eager: true },
                "react-dom": { singleton: true, eager: true }
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
