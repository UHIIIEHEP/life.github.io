import './point.scss';

class Point{
    constructor(opt={}){
        this.parent = opt.parent;
        this.state = opt.state ? opt.state : 'dead';
    };

    create(){

        let point = $('<div />',{
            class: `point ${this.state}`,
            state: this.state,
            click: function(){
                if($(this).attr('class') == 'point dead' ){
                    $(this).attr('state', 'life')
                }else{
                    $(this).attr('state', 'dead')
                }
                $(this).attr('class', `point ${$(this).attr('state')}`);
            }
        }).appendTo(this.parent)

        point.data('state', this.state)
    }
}

export default Point;