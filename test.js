mocha.setup("bdd");
var expect = chai.expect;

var Compiler = require('compiler').AmbiguityCompiler;

describe("Expressions", function () {
    it("no parens on an integer", function () {
        var input = '2';
        var compiler = new Compiler();
        var output = compiler.compile(input);
        expect(output).to.equal(input);
    });
    it("parens on a simple expression", function () {
        var input = "2+3";
        var compiler = new Compiler();
        var output = compiler.compile(input);
        expect(output).to.equal("(2 + 3)");
    });
});