var antlr4 = require('antlr4/index');
var AmbiguityLexer = require('AmbiguityLexer').AmbiguityLexer;
var AmbiguityParser = require('AmbiguityParser').AmbiguityParser;
var AmbiguityParserListener = require('AmbiguityParserListener').AmbiguityParserListener;

function AmbiguityCompiler() {
    AmbiguityParserListener.call(this);
    return this;
}

AmbiguityCompiler.prototype = Object.create(AmbiguityParserListener.prototype);
AmbiguityCompiler.prototype.constructor = AmbiguityCompiler;

AmbiguityCompiler.prototype.compile = function (template) {
    this._outputString = "";

    var chars = new antlr4.InputStream(template);
    var lexer = new AmbiguityLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new AmbiguityParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.expr();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, tree);

    return this._outputString;
};

AmbiguityCompiler.prototype.append = function (str) {
    this._outputString += str;
};

AmbiguityCompiler.prototype.enterExpr = function(ctx) {
    console.log(ctx);
    this.append('X');
}

exports.AmbiguityCompiler = AmbiguityCompiler;
