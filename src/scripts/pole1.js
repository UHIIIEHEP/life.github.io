
// console.log("1 ", content)
import Point from '../components/point/point.js'

(function(){
    const content = $('.content');

    const pole = $('<div />', {
        class: 'pole'
    }).appendTo(content);

    let lengthW = 5,  lengthH = 5;

    let arrPoint=[];
    
    for(let i = 0; i < lengthW; i++){
        let points = [];

        for(let j = 0; j < lengthH; j++){
            let point = new Point({
                text: i+'-'+j,
                parent: pole
            });
            point.create();
            points.push( point );
        }
        
        arrPoint.push(points);
    }

    pole.css({
        width: lengthW * 52,
        height: lengthH * 52
    })
})()