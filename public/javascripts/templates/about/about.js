export default class AboutContainer {

    // the string passed into the content('') function
    // and used as the id for the template <script> tag and container <div> tag
    #CONTENT_STRING = 'about';
  
    // context data object for the template to load
    #context = Object.seal({
      about: []
    });
  
    // context behavior subject for automatic re-rendering on value changes
    #context$ = new rxjs.BehaviorSubject(this.#context);
  
    // the compiled template script to pass the context into
    #templateScript = dash.templates.about;
  
    constructor() { 
      // init child widgets here preferrably
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
      console.log("about container loaded");
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