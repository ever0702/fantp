
const failWithMessage = message => ({
	success: false,
	message
});

const successWithData = data => ({
	success: true,
	data
})

export {failWithMessage, successWithData};
