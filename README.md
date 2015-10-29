# hst

A browserify transformer wich transforms a HTML es6 tagged template expression
into hyperscript [1] ... magic

```javascript
function render(ctx) {
  return $hst$`<div>
    Hello <strong>${ctx.name}</strong>
  </div>`;
}
```

hst et voilà

```javascript
function render(ctx) {
  return h("div", {  }, [ h("span", {  }, [ "Hello", (ctx.name) ]) ]);
}
```

## Install

    $ npm install hst

## Usage

    $ browserify -t [ hst ] main.js > build/bundle.js

### TODOs:

* Options to configure the tag expression
* SVG (html2hs)
* Prettify + recast context
* A bit more of this testing stuff

[1] https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript

