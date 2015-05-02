var Recipe = function(options){
    options = options || {};
    this.title = options.title || "";
    this.description = options.description || "";
    this.ingredients = options.ingredients || [];
}

Recipe.prototype.getTitle = function(){
    return this.title;
}
Recipe.prototype.setTitle = function(title){
    this.title = title;
}
Recipe.prototype.getDescription = function(){
    return this.description;
}
Recipe.prototype.setDescription = function(description){
    this.description = description;
}
