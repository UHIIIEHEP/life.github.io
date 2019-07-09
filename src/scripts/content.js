import {generateScene} from './generateScene.js';
import Button from '../components/Button/Button.js';
import {simulation, clearScene} from './math.js';

(function(){
    const content = $('.content');
    let size = 15;

    generateScene(size, content);

    $('<div />', {
        class: 'hint'
    }).appendTo(content)

    let btnPlay = new Button({
        text: "PLAY",
        parent: content,
        type: 'play',
        reaction: simulation
    }).create();


    let btnClear = new Button({
        text: "CLEAR",
        parent: content,
        type: 'clear',
        reaction: clearScene
    }).create();
})()