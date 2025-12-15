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
        port: 3001,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "formElements",
            filename: "entry.js",
            exposes: {
                "./Input": "./src/Input",
            },
            shared: {
                react: { singleton: true, eager: true },
                "react-dom": { singleton: true, eager: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),

    ],
};
