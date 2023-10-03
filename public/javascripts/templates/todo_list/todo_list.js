export default class TodoListContainer {

    // the string passed into the content('') function
    // and used as the id for the template <script> tag and container <div> tag
    #CONTENT_STRING = 'todo-list';
  
    // context data object for the template to load
    #context = Object.seal({
      todos: []
    });
  
    // context behavior subject for automatic re-rendering on value changes
    #context$ = new rxjs.BehaviorSubject(this.#context);
  
    // the compiled template script to pass the context into
    #templateScript = dash.templates.todo_list;
  
    constructor() { 
      // init child widgets here preferrably
      this.#getTodos();
    }
  
    init(){
      this.#context$.subscribe((context) => {
        this.#template_compile_and_load(context);
      });
    }
  
    /** compiles and loads the handlebars html template */
    #template_compile_and_load(context){
      // error handling, the template must be defined to pass to Handlebars.compile
      if(typeof this.#templateScript !== "function"){
        console.error(`Error: ${this.#CONTENT_STRING} template script doesn't exist, please review and recompile`);
        return;
      }
  
      // compile to html string, passing the context
      const html = this.#templateScript(context);
  
      // add html to div container
      $(`.${this.#CONTENT_STRING}-container`).html(html);
  
      // additional jquery events below this line
      console.log("todo list container loaded");
      this.#createTodoHandler();
    }

    #getTodos(){
      superagent.get("/todos").then((res) => {
        this.#setContext({ todos: res.body });
      }).catch((err) => {
        console.error(err);
      });

      // $g_todos.subscribe((todos) => {
      //   console.log(todos);
      //   if(todos.length === 0){
      //     superagent.get("/todos").then((res) => {
      //       $g_todos.next(res.body);
      //     }).catch((err) => {
      //       console.error(err);
      //     });
      //   }
      //   this.#setContext({todos: todos});
      // });
    }

    #createTodoHandler() {
      $("#create-todo-btn").click((e) => {
        let title = $("#todo-title").val();
        let description = $("#todo-description").val();
      
        superagent.post("/todos").send({ title: title, description: description }).then((res) => {
          this.#setContext({ todos: [...this.#context.todos, res.body] });
        }).catch((err) => {
          console.error(err.message);
        });

      });
    }
  
    /**
     * Change the context based on previous values + new values
     * @param {function} func - the callback with the previous context 
     */
    #setContextPrev(func) {
        let contextLocal = this.#context;
        let newContext = func(contextLocal);
  
        Object.assign(this.#context, newContext);
        this.#context$.next(this.#context);
    }
  
    /**
     * Change the context based on new values
     * @param {object} context - the new context 
     */
    #setContext(context) {
      Object.assign(this.#context, context);
      this.#context$.next(this.#context);
    }
}