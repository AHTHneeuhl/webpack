import HelloWorldButton from "./components/helloWorldButton.js";
import Heading from "./components/heading.js";
import React from "react";

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
const heading = new Heading();
heading.render("hello world");

if (process.env.NODE_ENV === "production") {
  console.log("Production");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development");
}

helloWorldButton.methodThatDoesNotExist();
