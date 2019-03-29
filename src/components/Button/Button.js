import './Button.scss';

class Button{
    constructor(opt={}){
        this.text = opt.text ? opt.text : "No Text";
        this.class = opt.class ? opt.class : 'button';
        this.reaction = opt.reaction ? opt.reaction : fun();
        this.parent = opt.parent;
        this.type = opt.type ? opt.type : 'play';
    }


    create(){
        const btn = $('<div />', {
            class: `button ${this.type} ${this.class}`,
            text: this.text,
            click: this.reaction            
        }).appendTo(this.parent);        
    }
}

function fun(){
    console.log('NO REACTION')
}

export default Button;