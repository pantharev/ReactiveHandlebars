import AboutContainer from "./templates/about/about.js";
import TodoListContainer from "./templates/todo_list/todo_list.js";

export default class Main{
    constructor(){
        this.__init();
    }

    /** compiles and loads the handlebars html templates */
    __init(){

        console.log("init Main");
        console.log(window.dash.templates.todo_list);
        this.initMap();
        this.home();
    }

    home(){
        let todoListContainer = new TodoListContainer();
        todoListContainer.init();
        let aboutContainer = new AboutContainer();
        aboutContainer.init();
    }

    initMap(){
        let map = new Map();
    }
}

// show the todos content on first page load
$(".content").hide();
$("#content-todos").show();

const main = new Main();
main.__init();