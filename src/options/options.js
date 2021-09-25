import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

class Layout extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(
  <Layout />,
  app
);
