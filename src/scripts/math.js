export function simulation(){
    disableElement('disabled');
    $('.hint').removeClass('visible');

    let size = Math.sqrt(document.getElementsByClassName('point').length);
    let endCikle = 0;
    var globalArrState = [];
    let repeatStep;
    let promise = new Promise((res, rej)=>{
    let timeTimer = 50;

        (function repeat(){
            repeatStep = setTimeout(function(){
                let steps = 60000;
                let resultState = foo(size);
                
                endCikle++;
                let resultFoo = functionStop(globalArrState, resultState);
                if(resultFoo || endCikle > steps){
                    console.log("steps = ", endCikle)
                    if(endCikle >= steps)  {console.log("all steps")};
                    res();
                }else{
                    return repeat();                    
                }
            }, timeTimer)
        })()

    });

    promise
        .then(
            ()=>{
                clearTimeout(repeatStep);
                win();
            }
        )
}

function foo(size){
    let arrPoint = document.getElementsByClassName('point');
    let newArrPoint = [];

    for(let i = 0; i < size; i++){
        let tempArr = [];
        for(let j = 0; j < size; j++){
            let population = 0;
            let i_min = i-1 == -1?  size-1: i-1;
            let i_plus = i+1 == size?  0: i+1;
            let j_min = j-1 == -1?  size-1: j-1;
            let j_plus = j+1 == size?  0: j+1;

            if($(arrPoint[i*size+j]).attr('state') == 'life'){
                if($(arrPoint[ i_min * size + j ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_plus * size + j ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[i * size + j_min ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i * size + j_plus ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_min * size + j_min  ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_plus * size + j_min  ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_min * size + j_plus ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_plus * size + j_plus ]).attr('state') == 'life'){
                    population++;
                }

                if(population == 2){

                }else{
                    if(population == 3){

                    }else{
                        $(arrPoint[ i * size + j ]).attr('class', `point ${$(arrPoint[ i  * size + j ]).attr('state')} preDead`)
                    }
                }
            }

            if($(arrPoint[i*length+j]).attr('state') == 'dead'){
                if($(arrPoint[ i_min * size + j ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_plus * size + j ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[i * size + j_min ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i * size + j_plus ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_min * size + j_min  ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_plus * size + j_min  ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_min * size + j_plus ]).attr('state') == 'life'){
                    population++;
                }
                if($(arrPoint[ i_plus * size + j_plus ]).attr('state') == 'life'){
                    population++;
                }
                if(population == 3){
                    $(arrPoint[  i * size + j ]).attr('class', `point ${$(arrPoint[ i * size + j ]).attr('state')} preLife`)
                }
                
            }

            tempArr.push($(arrPoint[ i * size + j ]).attr('state'))
        }
        newArrPoint.push(tempArr);
    }      
    let pointDead = document.getElementsByClassName('preDead');

    for(let i = 0; i < pointDead.length; i++){
        pointState($(pointDead[i]), 'dead')
    }
            
    let pointLife = document.getElementsByClassName('preLife');

    for(let i = 0; i < pointLife.length; i++){        
        pointState($(pointLife[i]), "life");   
    }
    arrPoint = document.getElementsByClassName('point');
    let arrState = [];
    for(let i = 0; i < arrPoint.length; i++){
        arrState.push($(arrPoint[i]).attr('state'))
    }
    return arrState;
}

function functionStop(globalArrState, resultState){
    if(globalArrState.length != 0){
        let flagError = false;
        for(let i = 0; i < globalArrState.length; i++){
            let str0 = '';
            let str1 = ''; 
            for(let k = 0; k < globalArrState[i].length; k++){
                str0 += globalArrState[i][k];
                str1 += resultState[k];
            }
            if(str0 == str1){
                disableElement('enabled')
                flagError = true
            }
        }
        return flagError;
    }else{
        return false;
    }
}

function win(){
    let arrPoint = document.getElementsByClassName('point');
    let winState = false;
    for(let i = 0; i < arrPoint.length; i++){
        if($(arrPoint[i]).attr('state') == 'life' ){
            winState = true;
        }
    }
    const content = $('.content');
    if(winState){
        $('.hint').html("YOU WIN!").addClass('visible')
    }else{
        $('.hint').html("GAME OVER!").addClass('visible')
    }
}

function disableElement(state){
    let btn = document.getElementsByClassName('btn'); 
    btn = $(btn);  
    let content = document.getElementsByClassName('content'); 
    content = $(content);
    switch(state){
        case 'disabled':
            btn.addClass('disabled');
            content.addClass('disabled');
        break;
        
        case 'enabled':
        default:
            btn.removeClass('disabled');
            content.removeClass('disabled');
        break;
    }
}

export function clearScene(){
    $('.hint').removeClass('visible');
    let arrPoint = document.getElementsByClassName('point');
    for(let i = 0; i < arrPoint.length; i++){   
        pointState($(arrPoint[i]), "dead");
    }
}

function pointState(point, state){
    point.attr('state', state);
    point.attr('class', `point ${point.attr('state')}`)

}