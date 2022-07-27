# My Watchlist App - Redux, Redux Toolkit and RTK Query Demo

This demo app features the power of Redux Toolkit and RTK Query - two new tools by the Redux and React Redux team to simplify the use of the best state management in React.

## App Functions
- Toggle Dark Mode theme.
- Fetch watchlist.
- Add a show in your watchlist.
- View a show in your watchlist.
- Update selected show.
- Delete a show from your watchlist.

## Branch content
- `main` branch contains full implementation of functions using redux-toolkit and rtk-query.
- `legacy-react-redux` branch contains partial implementation of functions using the old way of using react-redux.

## How to run locally
### Prerequisites:
- You must have `node`, `npm` and `mongodb` in your local. If you don't have local mongodb, edit `server/db.js` and change the `connectionString` with your cloud MongoDB instance.

### Server installation (Node, Express and MongoDB)
- To install _server_ dependencies, go to the project root and run `npm install`.
- `npm start` to run your local server. 
- Provide port if `3001` isn't available by adding a file `.env.local`.
- If you are running a local mongodb make sure it is running.

### Client installation (React 18, bootstrapped with create-react-app)
- To install _client_, go to `/client` and run `npm install`

### Learn more
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [RTK and RTK Query](https://redux-toolkit.js.org/)

### Other packages being used
- [Bootstrap 5](https://getbootstrap.com)
- [React Bootstrap](https://react-bootstrap.github.io/)
