---
title: 'HTTP Rest APIs in Golang'
date: 'January 10 2023'
excerpt: 'This is the excerpt'
cover_image: '/assets/blogs/restgo.jpeg'
---
<!-- # HTTP Rest APIs in Golang -->

<!-- <p align="center">
  <img src="/assets/blogs/GolangCleanArch.jpg" width="500" title="" alt="">
</p> -->

Today I’d like to give you a brief introduction to building APIs in Go. You’ll learn about configuring your project, structuring routes, setting up handlers, and interacting with request parameters.

API is short for Application Programming Interface. It is a set of rules defining how to interact with a software program. There are many different types of APIs, but in this case we’re talking about a RESTful API, which as you might guess from the name, is a RESTful Application Programming Interface.

### What is the REST API?
Many of the products and services we use on a daily basis have complex web frontends, modern web apps, or legacy web APIs. At its core, the internet is HTTP, and that’s where we start.

REST is the most popular architecture style for developing web services. It is important to note that the REST API is not a network protocol like SOAP, but rather an architectural style for building RESTful web services using HTTP requests and responses.

A REST API exposes resources as URIs and uses HTTP methods (GET, PUT, POST, DELETE) to manipulate those resources.

The REST API is primarily intended for developers, but also exposes a limited amount of information to end users through specific views in the user interface.

An example REST API call is:
https://jsonplaceholder.typicode.com/todos/1

It returns data in JSON format. Some APIs return data in XML format, but personally I prefer JSON.

{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

### Creating our REST API
Today we’re going to be exploring how to create a REST API using Go. We’re going to be creating an API that has the following endpoint:

/animals

#### Required imports
First you’ll need to load the HTTP package. The Go HTTP client (also referred to as the net/http package) implements client-side request and response handling as defined in the HTTP specification.

In Go, there is a net/http package which is used for serving HTTP requests, and it uses a “handler” function as the method of dispatching those requests.

import (
    "encoding/json"
    "net/http"
)

### Create a data structure
Then you need a data structure for the request. A struct type is similar to a map or a list in that it is a collection of various values, all of which have the same type.

type Animal struct {
    Name  string `json:"Name"`
    Type  string `json:"Type"`
}

### Setting up HTTP handler
Next you need a HTTP handler. A HTTP server that can handle requests.

function AnimalsHandler(w http.ResponseWriter, r *http.Request) {
   animals := []Animal{
       Animal{"Alice","Cat"},
       Animal{"Bob","Cat"},
       Animal{"Trinity","Dog"}
   }

   json.NewEncoder(w).Encode(animals)
}

The array animals will be returned to the browser in JSON format.

Then create an API endpoint:
http.HandleFunc("/animals", AnimalsHandler)

Start the server using

http.ListenAndServe(":1234", nil)

### Go REST API
In this example, our API is going to be incredibly simple. It consists of one endpoint. This example demonstrates a simple REST API using Go. The sample app exposes one endpoint:

/animals

package main

import (
        "encoding/json"
        "net/http"
)

type Animal struct {
    Name  string `json:"Name"`
    Type  string `json:"Type"`
}

func AnimalsHandler(w http.ResponseWriter, r *http.Request) {
   animals := []Animal{
       Animal{"Alice","Cat"},
       Animal{"Bob","Cat"},
       Animal{"Trinity","Dog"},
   }

   json.NewEncoder(w).Encode(animals)
}


func main() {
    http.HandleFunc("/animals", AnimalsHandler)
    http.ListenAndServe(":1234", nil)
}

### Use of REST API
A REST API is an interface for interacting with a software application. It can be accessed using HTTP verbs and parameters. The service provider (often a remote server) will handle the request and return a response, typically in HTML, XML, JSON, or some other structured data format.

It’s very easy to create web services using Go. Everything in Go is an expression that returns a value; even control flow statements like if and switch .

All software is built on top of APIs. It might not be obvious, but all the software we use today is built on top of REST APIs. More and more companies are realising this, and are building their own REST APIs, such as Apple’s recently released HomeKit API. There are also a plethora of startups springing up that provide API as a service.

There are a few reasons why you might choose to build an internal REST API:

You want to make your data available to other departments or outside contractors
You want to make it easier for others to build software that leverages your data (e.g., distributing some work amongst your team members)
