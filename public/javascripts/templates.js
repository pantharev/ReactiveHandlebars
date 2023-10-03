this["dash"] = this["dash"] || {};
this["dash"]["templates"] = this["dash"]["templates"] || {};
this["dash"]["templates"]["about"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Todo List app made with vanilla javascript and reactive handlebars components</p>";
},"useData":true});
this["dash"]["templates"]["todo_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"flex-1 flex-col\">\r\n        <div class=\"bg-blue-400 rounded-lg text-white p-5 text-center\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</div>\r\n        <div>\r\n          "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"w-full\">\r\n  <button id=\"create-todo-btn\" class=\"bg-green-400 rounded-md p-3\">Create Todo</button>\r\n  <input id=\"todo-title\" type=\"text\" placeholder=\"Title\" />\r\n  <input id=\"todo-description\" type=\"text\" placeholder=\"Description\" />\r\n  <div class=\"flex gap-x-5\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"todos") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":21,"column":4},"end":{"line":28,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
},"useData":true,"useBlockParams":true});