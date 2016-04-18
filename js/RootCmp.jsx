import React from 'react';
import {Link} from 'react-router';

// if(module.hot) {
// 	module.hot.accept();
// }

const App = ({children}) => (
		<div>
	        <h1>My App</h1>
	        <ul>
	          <li><Link to="/todo-app">Todo App</Link></li>
	          <li><Link to="/book-app">Book App</Link></li>
	          <li><Link to="/github-app">Github App</Link></li>
	          <li><Link to="/employee-app">Employee App</Link></li>
	        </ul>

	        {children}
      </div>
	);

export default App;
