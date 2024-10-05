import { translate as _translate } from 'bing-translate-api';

export default function translate(text:string, to:string = 'th') {
    return new Promise((resolve, reject) => {
        _translate(text, null, to).then(res => {
            resolve(res?.translation);
        }).catch(err => {
            reject(err);
        })    
    })
}
