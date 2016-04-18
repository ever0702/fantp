import React from 'react';
import addHello from './addHello'

let AddHelloText = ({hello}) => (
		<h3>
			{hello}
		</h3>
	)

export default addHello(AddHelloText);
