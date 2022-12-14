const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack'); 
const dotenv = require('dotenv').config({ path: './.env' }); 


const deps = require("./package.json").dependencies;

//---------------------------------using local repo URLs---------------------------------//

module.exports =(env)=>{
  console.log({env});
  return {
    output: {
      publicPath: "http://localhost:3000/",
    },
  
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
  
    devServer: {
      //  inline: false,
      port: 3000,
      historyApiFallback: true,
    },
  
    module: {
  
      rules: [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      }]
    },
  
    plugins: [
      // new ModuleFederationPlugin({
      //   name: "host",
      //   filename: "remoteEntry.js",
      //   remotes: {
      //     shared: "shared@http://localhost:3001/remoteEntry.js",
      //   },
      //   exposes: {},
      //   shared: {
      //     ...deps,
      //     react: {
      //       singleton: true,
      //       requiredVersion: deps.react,
      //     },
      //     "react-dom": {
      //       singleton: true,
      //       requiredVersion: deps["react-dom"],
      //     },
      //   },
      // }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env)
      }),
    ],
  };
}


//--------------------------------------------using environment-----------------------------------------//

/**

    module.exports = (env) => {
      const SHARED_COMP_URL = env.SHARED_COMP_URL || "http://localhost:3001";
      return {
        ...otherConfigs,
        plugins: [
                new ModuleFederationPlugin({
                name: "host",
                filename: "remoteEntry.js",
                remotes: {
                  shared: `shared@${process.env.SHARED_COMP_URL}/remoteEntry.js`
                },
                shared: {
                  ...deps,
                  react: {
                    singleton: true,
                    requiredVersion: deps.react,
                  },
                  "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                  },
                },
              }),
        ],
      };
    };

 */


//-----------------------------------------using external-remotes-plugin--------------------------------------//

/**

    module.exports = (env) => {
      return {
        ...otherConfigs,
        plugins: [
            new ModuleFederationPlugin({
              name: "Host",
              remotes: {
                RemoteA: "RemoteA@[window.appAUrl]/remoteEntry.js",
              },
            }),
            new ExternalTemplateRemotesPlugin(),
          ],
      };
    };

 */


//------------------------------using Promise Based Dynamic Remotes------------------------------//