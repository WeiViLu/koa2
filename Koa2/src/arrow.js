const luck = {
    id: 2,
    say: function(){
        setTimeout(function(){
            console.log('id:',this.id)
        },50)
    },
    sayWithThis: function(){
        let that = this;

        setTimeout(function(){
            console.log('this id:',that.id)
        },100)
    },
    sayWithArrow: function(){
        setTimeout(() => {
            console.log('arrow id:',this.id);
        },500)
    },
    sayWithGlobelArrow: () => {
        setTimeout(()=>{
            console.log('globel arrow id:',this.id);
        },1500)
    }
}

luck.say();
luck.sayWithThis();
luck.sayWithArrow();
luck.sayWithGlobelArrow();