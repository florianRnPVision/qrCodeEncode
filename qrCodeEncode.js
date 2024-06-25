const prompt = require('prompt-sync')();

const url = prompt('Enter the url to encode for QR Code : ');

const resultUrl = 'https://quickchart.io/qr?size=100&text=' + url.replaceAll('?', '%3F').replaceAll('&', '%26').replaceAll('=', '%3D').replaceAll('+', '%2B');

console.log('\n' + '\x1b[38;5;42m' + resultUrl + '\x1b[0m');