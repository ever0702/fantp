
import fs from 'fs';
let data = '';

var readableStream = fs.createReadStream('input.txt');

readableStream.setEncoding('UTF8');

// readableStream.on('data', chunk => {
// 	console.log('---a chunk is read---', chunk)
// 	data+= chunk;
// });

readableStream.on('end', () => console.log(data));

let writeStream = fs.createWriteStream('output.txt');
writeStream.write('Write start \n');

fs.createReadStream('input.txt')
	.pipe(fs.createWriteStream('output2.txt'));

// readableStream.pipe(writeStream);
console.log('program-ended');
