import promptSync from 'prompt-sync';
import clipboard from 'clipboardy';

const prompt = promptSync();

const url = prompt('Enter the url to encode for QR Code : ');
const size = prompt('Enter the size of QR Code ( tip 90 is great for maps coords ) : ')

const regex = new RegExp('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})');

new Promise((resolve, reject) => {
    const regTest = regex.test(url);
    if(regTest){
        return resolve(regex.test(url));
    }
    else{
        reject(new Error('The URL isn\'t valid'));
    }
}).then(() => {
    const resultUrl = `https://quickchart.io/qr?size=${size < 90 ? 90 : size}&text=` + url.replaceAll('?', '%3F').replaceAll('&', '%26').replaceAll('=', '%3D').replaceAll('+', '%2B');

    clipboard.writeSync(resultUrl);
    console.log('\n'  + '\x1b[38;5;42m' + resultUrl + '\x1b[0m' + ' copied in clipboard')
}).catch(e => {
    console.error('\n \x1b[250;10;31m' + e + '\x1b[0m');
});