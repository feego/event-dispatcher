#event-dispatcher
**This element is compatible with Polymer 0.5 and lower only.**  
Polymer element to dispatch DOM Custom Events.

#### Installation

```
$ bower install feego/event-dispatcher
```

#### Usage

```html
<event-dispatcher event="tap" handler="{{$.elementId.eventHandler}}" 
                  detail="{{eventDetail}}">
```

#### Compile ES2015 source files

```
$ npm install babel-loader
$ webpack ./harmony/src/event-dispatcher.js ./harmony/build/build.js --module-bind "js=babel?stage=0"
```

#### License

The MIT License (MIT)

Copyright (c) 2015 GlazedSolutions
