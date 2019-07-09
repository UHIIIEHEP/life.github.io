import Point from '../components/point/point.js';

export function generateScene(size, parent){  
    var arrPoint=[];      
    
    const pole = $('<div />', {
        class: 'pole'
    }).appendTo(parent);

    for(let i = 0; i < size; i++){
        let points = [];
        for(let j = 0; j < size; j++){
            let point = new Point({
                parent: pole
            });
            point.create();                
            points.push( point );
        }            
        arrPoint.push(points);
    }

    pole.css({
        width: size * 34,
        height: size * 35.2
    })
}