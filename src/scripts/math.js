export function simulation(){
    disableElement('disabled');
    $('.hint').removeClass('visible');
    document.stopReaction = false;

    let size = Math.sqrt(document.getElementsByClassName('point').length);
    let endCikle = 0;
    var beforResultState = [];
    let repeatStep;
    let promise = new Promise((res, rej)=>{
    let timeTimer = 50;

        (function repeatFoo(){
            repeatStep = setTimeout(function(){
                let steps = 60000;
                let resultState = foo(size);
                endCikle++;
                let resultFoo = functionStop(beforResultState, resultState);
                beforResultState = resultState
                if(resultFoo || endCikle > steps || document.stopReaction){
                    console.log("steps = ", endCikle)
                    if(endCikle >= steps)  {console.log("all steps")};
                    disableElement('active')
                    res();
                }else{
                    return repeatFoo();
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

function functionStop(beforResultState, resultState){
    return resultState.join() === beforResultState.join()
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

        case 'active':
        default:
            btn.removeClass('disabled');
            content.removeClass('disabled');
        break;
    }
}

export function clearScene(){
    document.stopReaction = true;
    $('.hint').removeClass('visible');
    disableElement('active')
    let arrPoint = document.getElementsByClassName('point');
    for(let i = 0; i < arrPoint.length; i++){
        pointState($(arrPoint[i]), "dead");
    }
}

function pointState(point, state){
    point.attr('state', state);
    point.attr('class', `point ${point.attr('state')}`)
}

function getStatusWork() {
    return status;
}