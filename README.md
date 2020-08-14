# mut.js

Minimal Ubiquitous Toolbox - A collection of tiny, useful JavaScript functions & shortcuts.

``` 
mut.qs(queryString, el)
same as el.querySelector(queryString)

mut.qsa(queryString, el)
same as el.querySelectorAll(queryString)

mut.ce(type, contents)
same as el = document.createElement(type), but adds text node with contents.

mut.post(msg, isInline = false)
like console.log but in the document body

mut.getParam(key)
get a value from the query string

mut.checkAttr(el, attr)
post() useful information about an attribute on an element
```

 ### TODO: 

* Things to add:
    * `mut.redy(callback)`: shortcut for DOMContentLoaded event
    * `mut.lisn([delegate], el, callback, [options])`: add event listener
    * `mut.txt(el, content)`: Append a text node to el with the given text content.
    * `mut.ap(child, parent)` append child to parent element.
    * `mut.pp(child, parent)` prepend child to parent element.
    * `mut.type(thing)` like typeof, but better.
    * `mut.loop([start], end, [increment], callback)`: easier for loop, incl _.times()
        * `mut.loop(1, 8, (index) => {...})` start at 1, end at 7.
        * `mut.loop(5, (index) => {...})` repeat 5 times (start at 0, end at 4)
        * `mut.loop(4, 60, 4, (index) => {...})` start at 4, increment by 4, end before 60 (so, 56)
