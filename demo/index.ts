import translate from '../dist/index.esm.js';

let text = 'How are you ?';

translate(text, 'th').then(res => {
    console.log(res);
})