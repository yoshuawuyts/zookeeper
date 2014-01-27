# Zookeeper [![Dependency Status](https://david-dm.org/yoshuawuyts/zookeeper.png?theme=shields.io)](https://david-dm.org/yoshuawuyts/zookeeper) [![devDependency Status](https://david-dm.org/yoshuawuyts/zookeeper/dev-status.png?theme=shields.io)](https://david-dm.org/yoshuawuyts/zookeeper#info=devDependencies)

> A small task manager

## Goals
The primary goal of building Zookeeper is to explore the client side MVC structure of Backbone, amplified with Facebook's React. Secondly we're going to attempt to handle Koa (node generators/yield framework) and wrap the Dropbox API to consume it as a service. Zookeeper will be built according to the [RAPHT](https://github.com/DanielWaterworth/Raphters/blob/master/RAPHT) module pattern.

## Definition of Done
Zookeeper is a small task manager. It will have the following features:

- When visiting the app a user sees al his projects.
- While in the overview mode, a user can create, update and delete projects.
- When viewing a project a user the user is presented with an overview of his progress.
- When interacting with a task a user can modify or delete it without leaving the screen.
- While viewing a project, a user can create new tasks.

## User interface
![ui](http://i.minus.com/jbrzJsZ9UBRcQb.png)

## Implementation

#### Application structure
![chart](http://i.minus.com/jxLdmntT565h0.png)

#### Data models
````js

// Tasks model
{
  "task": {
    "id": int,
    "name": string,
    "content", string
  }
}

// Projects model
{
  "project": {
    "id": int,
    "name": string,
    "tasks", array
  }
}

// Projects collection
{
  "projects": array
}


````

#### Directory structure

````
.
├── api     // works with RAPHT modules
├── build
├── client  // works with RAPHT modules
│   ├── fonts
│   ├── images
│   ├── modules
│   ├── styles
│   └── vendor
├── tasks
└── tests
````

## License
MIT © [Yoshua Wuyts](yoshuawuyts.com)
