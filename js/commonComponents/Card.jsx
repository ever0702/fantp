import React from 'react';

const Card = props => {

		let {imgSrc, title, text, children, ...rest} = props;
		return (
			 <div className="card" {...rest}>
				{
					imgSrc && 
					<img src="" alt="" className="card-img-top" src={imgSrc} alt="Image not Found"/>
				}
				<div className="card-block">
					{
						title &&
						<h4 className="card-title">{title}</h4>
					}
					{
						text && 
						<p className="card-text">{text}</p>	
					}

					{children}
				</div>
			</div>
		);
};

export default Card;
