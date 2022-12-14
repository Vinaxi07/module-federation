const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: './.env' });


const deps = require("./package.json").dependencies;

//---------------------------------using local repo URLs---------------------------------//

module.exports = (env) => {
  console.log({ env });
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
      new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          host: "host@http://localhost:3000/remoteEntry.js",
          shared: "shared@http://localhost:3001/remoteEntry.js",
        },
        exposes: {
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            //strictVersion:true,
            requiredVersion: deps.react, //">=17.0.0<18.0.0."
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
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




// module.exports = (env) => {
//   return {
//     ...otherConfigs,
//     plugins: [
//       new ModuleFederationPlugin({
//         name: 'container',
//         remotes: {
//             app1: lazyLoadRemote('http://localhost:3001/remoteEntry.js', 'app1'),
//       }})
//       ],
//   };
// };

// function lazyLoadRemote(remoteUrl, appName) {
//   return `promise new Promise(resolve => {
//   const script = document.createElement('script')
//   script.src = '${remoteUrl}'

//   console.log('lazyLoadRemote', script.src);

//   script.onload = () => {
//     // the injected script has loaded and is available on window
//     // we can now resolve this Promise
//     const proxy = {
//       get: (request) => window.${appName}.get(request),
//       init: (arg) => {
//         try {
//           return window.${appName}.init(arg)
//         } catch(e) {
//           console.log('remote container already initialized', e)
//         }
//       }
//     }
//     resolve(proxy)
//   }
//   // inject this script with the src set to the versioned remoteEntry.js
//   document.head.appendChild(script);
// })`;
// }