# What is Module Federation?

- Webpack 5 plugin
- Allows to share module/ dependencies at run time dynamically
- Solves problem of loading separately compiled/ developed MFE
- Environment independent

# Terminologies for Module Federation.

- __Host__: A webpack build that is initialized during the first-page load​
- __Remote__: Another webpack build which is being consumed by a host​

# How to start?

- __Host__: Open integrated terminal for _host_ and start server by `npm start`
- __Shared__: Open integrated terminal for _shared_ and start server by `npm start`