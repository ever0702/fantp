import React from 'react';

const loadingCover = WrapCmp => {

	let loading = false;
	
	class Wrapper extends React.Component {
		state = {loading};
		constructor(props) {
			super(props);
			this.setLoading = this.setLoading.bind(this);
		}

		setLoading(loading) {
			this.setState({loading});
		}

		render() {
			let {loading} = this.state;

			return (
				<div className="loading-cover">
					{
						loading &&
						<div className="cover"></div>
					}
					<WrapCmp {...this.props} setLoading={this.setLoading}/>
				</div>	
			);
		}

	}
	return Wrapper;
	
}

export default loadingCover;
