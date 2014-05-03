/**
 * Created by 12 on 02.03.14.
 */


var hulk={
    element:store,
    select:function(selector){
        this.elements=document.getElementsByTagName(selector);
        return this;
    },
    addCls:function(clsname){
        for (var i=0;i<this.element.length;i++){
            if(this.element[i].className!=''){
                this.element[i]+=clsname;
            }else{
                this.element[i]=clsname;
            }
        }
        return this;
    },
    append:function(tag){
        childTag=document.getElementsByTagName(tag);
        for (var i=0;i<this.element.length;i++){
            this.element[i].appendChild(childTag);
        }
        return this;
    },
    attr:function(){
        if (arguments.length==1){
            for (var i=0;i<this.element.length;i++){
                this.element[i].getAttribute(arguments[0]);
            }
        }else{
            if (arguments.length==2){
                for (var j=0;j<this.element.length;j++){
                    this.element.setAttribute(arguments[0],arguments[1]);
                }
            }
        }
        return this;
    },
    children:function(){
        var child=this.element.childNodes;
        for (var i=0;i<child.length;i++){
            console.log(child[i]);
        }
        return this;
    },
    css:function(){
        if (arguments.length==1){
            for (var i=0;i<this.element.length;i++){
                cssElem=this.element[i].style[arguments[0]];
            }
        }else{
            if(arguments.length==2){
                for (var j=0; j<this.element.length;j++){
                    this.element[j].style[arguments[0]]=arguments[1];
                    cssElem=this.element[j].style[arguments[0]];
                }
            }
        }
        return this;
    },
    empty:function(){
        for (var i=0;i<this.element.length;i++){
            var children=this.element[i].childNodes;
            while (children.length){
                this.element[i].removeChild(children[0])
            }
        }
        return this;
    },
    find:function(cssSelector){
        for (var i=0;i<this.element.length;i++){
            var children=this.element[i].childNodes;
            for (var j=0;j<children.length;j++){
                if (children[j].style[cssSelector]){
                    console.log(children[j])
                }
            }
        }
        return this;
    },
    hasClass:function(className){
        var bool=true;
        for (var i=0;i<this.element.length;i++){
            if (this.element.className!=className){
                bool=false;
                break;
            }
        }
        return bool;
    },
    on:function(eventName,func){
        for (var i=0;i<this.element.length;i++){
            this.element[i].addEventListener(eventName,func,false);
        }
        return this;
    },
    parent:function(){
        return this.element[0].parentNode;
    },
    remove: function() {
        while(this.element.length) {
            this.element[0].parentNode.removeChild(this.element[0]);

        }
        return this;
    },
    removeAttr: function(attrName) {
        for(var i = 0; i < this.element.length; i++) {
            this.element[i].removeAttribute(attrName);
        }
        return this;
    },
    unbind: function(eventName, func) {
        for(var i = 0; i < this.element.length; i++) {
            this.element[i].removeEventListener(eventName, func, false);
        }
        return this;
    },
    wrap:function(tagName){
        var element;
        var newElement;
        var tag=document.getElementsByTagName('body');
        for (var i=0;i<this.element.length;i++){
            element=this.element[i];
            newElement=document.createElement(tagName);
            newElement.appendChild(element);
            tag.appendChild(newElement);

        }
        return this;
    }
};