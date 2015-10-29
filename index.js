
var recast = require('recast');
var through = require('through2');
var html2hs = require('html2hs');

var rt = recast.types;
var defaults = { tag: '$hst$' }
var options = { };

function Visitor() {
  rt.PathVisitor.apply(this, arguments);
}

Visitor.prototype = Object.create(rt.PathVisitor.prototype);
Visitor.prototype.constructor = Visitor;

Visitor.prototype.visitTaggedTemplateExpression = function (path) {
  var node = path.node;
  var res = false;
  var buf = [];
  var hs;

  if (node.tag.name === defaults.tag) {
    hs = html2hs(recast.print(node.quasi).code.slice(1, -1));
    res = recast.parse(hs, {}).program.body[0];
  }

  return res;
}

var visitor = new Visitor();


function transform(source, ropts) {
  var ast = recast.parse(source, ropts);;
  return recast.print(rt.visit(ast, visitor), ropts);
}

module.exports = function (file, options) {
  var buf = ''

  function write(chunk, enc, next) {
    buf += chunk;
    next();
  }

  function end(done) {
    this.push(transform(buf, {}).code);
    done();
  }

  return through(write, end);
}
