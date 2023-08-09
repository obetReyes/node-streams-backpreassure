/*  writable-stream.js */
const { createReadStream, createWriteStream } = require('fs');





//should backpreassure the process
const readStream = createReadStream('./test.txt');
const writeStream = createWriteStream('./copy.txt');

readStream.on('data', chunk => {
  // console.log('size:', chunk.length);
  writeStream.write(chunk);
});

readStream.on('end', () => {
  // when are readStream is done we want to let our writeStream know no more data is coming
  writeStream.end();
});

// writeStream also has events we can listen for...
writeStream.on('close', () => {
  process.stdout.write('file copied\n');
});