# hst

A browserify transformer wich transforms a HTML es6 tagged template expression
into hyperscript [1]

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

### TODOs:

* Options to configure the tag expression
* SVG (html2hs)
* Prettify + recast context
* A bit more of these testing stuff

[1] https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript
