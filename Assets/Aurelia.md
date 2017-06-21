# Aurelia Fundamentals
## MVVM
### ViewModel Responsibilites
> Expose data to the view for **presentation** and **manipulation**.

> Encapsulate interaction logic
- Calls to client services.
- Navigation logic.
- State Transformation logic.

## Features

>Child view can be embedded to parents view.
- Child inherits theview model context of parent view model and can have it's own view model as well
- **compose** is used to embed child view to parent
``` html
<compose model.bind="viewname" view-model="viewmodelObject"></compose>
```
- **[activate](https://stackoverflow.com/a/31733689/7071430)** method recieves the binding context

### [**Dependency Injection**](http://aurelia.io/hub.html#/doc/article/aurelia/dependency-injection/latest/dependency-injection-basics/1)
```javascript
@inject(DataCache)
 ```

- Default mode of injection in aurelia is singleton.
- Registering lifetime- singleton, transient, instance
- can be registered by decorating the class with attribute.
``` javascript
@singleton()
```
or by adding the application configuration in aurelia configuration file e.g. main.js
```javascript
aurelia.use.singleton(DataCache);

//or
aurelia.use.transient(DataCache);

//or named instance which is not possible with decorator
let cache = new DataCache();
cache.data.push('1');
cache.data.push('2');
aurelia.use.instance("Cache",cache);
```

#### [Resolvers](http://aurelia.io/hub.html#/doc/article/aurelia/dependency-injection/latest/dependency-injection-basics/6)
 Instead of supplying a key as part of the inject decorator, you can provide a Resolver instead
- lazy(key) - defer the construction of the object untill one actually uses it.
- all(key)
- optional(checkParent?)
- parent
- factory(key, asValue?)
- newInstance(key?)

> you can also register dependency globally. e.g. logger, notification
```javascript
aurelia.use.globalResources('./services/myDataRepository');
```

### [**Routing and Navigation**](http://aurelia.io/hub.html#/doc/article/aurelia/router/latest/router-configuration/1)
- Router view element on the element where routing is required
```html
<router-view></router-view>
```

- Implement configureRouter() method on ViewModel which is going to contain the routing container
```javascript
configureRouter(config, router) {
		this.router = router;
		config.title = "Capital Area .NET User Group";
		config.map([
			{ route: ['', 'events'], moduleId: 'events/events',
				name: 'Events', title: 'Events', nav: true},
			{ route: 'jobs', moduleId: 'jobs/jobs',
				title: 'Jobs', nav: true }]),
```

