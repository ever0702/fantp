
const failWithMessage = msg => ({
	success: false,
	msg
});

const successWithData = data => ({
	success: true,
	data
})

export {failWithMessage, successWithData};
