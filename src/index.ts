import { translate as _translate } from 'microsoft-translate-api';

export default function translate(text:string, to:string = 'th') {
    return new Promise((resolve, reject) => {
        _translate(text, null, to).then(res => {
            resolve(res[0]?.translations[0]?.text);
        }).catch(err => {
            reject(err);
        })    
    })
}

if (typeof window !== 'undefined') {
    window.translate = translate;
}
