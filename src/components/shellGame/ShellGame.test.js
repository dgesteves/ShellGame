import React from 'react';
import ReactDOM from 'react-dom';
import ShellGame from './ShellGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShellGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
