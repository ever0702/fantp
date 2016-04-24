import React, {PropTypes} from 'react';

const CommonLink = ({active, onClick, children}) => {
	if(active) return <span>{children}</span>;

	return <button href="#" onClick={e => {e.preventDefault(); onClick()}}>{children}</button>;
}

CommonLink.propTypes = {
	onClick: PropTypes.func.isRequired,
	active: PropTypes.bool.isRequired
}

export default CommonLink;