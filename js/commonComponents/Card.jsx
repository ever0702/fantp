import React from 'react';

const Card = props => {

		let {imgSrc, topTitle, title, text, children, ...rest} = props;
		return (
			 <div className="card" {...rest}>
			 	{
			 		topTitle &&
			 		<div className="card-block">
				 		<h3 className="card-title">{topTitle}</h3>
			 		</div>
			 	}
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
