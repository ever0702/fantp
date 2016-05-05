var email = require("emailjs");
var server = email.server.connect({
	user: "yongwang.cloud@gmail.com",
	password: "Ever0702",
	host: "smtp.gmail.com",
	ssl: true
});

// send the message and get a callback with an error or details of the message that was sent
server.send({
	text: "i hope this works",
	from: "you <yongwang.cloud@gmail.com>",
	to: "someone <ever0702@gmail.com>, another <yongwang.cs@gmail.com>",
	cc: "else <else@your-email.com>",
	subject: "testing emailjs"
}, function(err, message) {
	console.log(err || message);
});
