---
title: 'Clean Architecture with Golang'
date: 'January 10 2023'
excerpt: 'This is the excerpt'
cover_image: '/assets/blogs/goandclean.png'
---
<!-- # Clean Architecture with Golang -->

<p align="center">
  <img src="/assets/blogs/goandclean.png" width="500" title="" alt="">
</p>

A design pattern with the concept of "separation of layers" and best applies to Golang by ensuring the working knowledge of both Domain-Driven Design and Unit Testing.
<br/>
### What is Clean Architecture?
Clean Architecture is a design pattern that uses the concept of "separation of layers," a technique used for many years by software engineers. Using abstraction will make it easier for us to do unit testing, and by applying Domain-Driven Design (DDD), one applies a domain layer that holds just the business logic. The benefits become apparent when we refactor code to cater to changing requirements and eliminate technical debt. With Clean Architecture, we change one part of the code with minimal impact on any dependent code.
<br/>
### What Do We Need?
Clean Architecture best applies to Golang by ensuring you have a working knowledge of both Domain-Driven Design (DDD) and Unit Testing. Also, you need to know about Gin and Gorm. Gin is a router framework for Go, and Gorm is ORM for Go.
<br/>
### Layers
The essential layers that need to exist in Clean Architecture are:

* Repository,
* UseCase,
* Entities
* Delivery (or UI).

A repository is a layer connecting the app and the unknown part outside the app. For the backend, the storage should be the part where the app talks with the database, stores the data, etc.
<br/>
<p align="center">
  <img src="/assets/blogs/CleanArch.jpg" width="500" title="Clean Architecture">
</p>
<br/>
After that, we have a UseCase layer. It is a layer where we connect between the UI or Delivery layer and the Repository layer. This layer is used to control the data we use, and some people also call this layer a Controller layer.
<br/>
Next is the Entities layer, which stores the interface and abstraction from request, response, and data.
<br/>
Finally, we have the Delivery layer, sometimes called the handler layer. It is the layer that sends data to the outside world.
<br/>
<p align="center">
  <img src="/assets/blogs/CleanArch2.jpeg" width="500" title="Clean Architecture">
</p>
