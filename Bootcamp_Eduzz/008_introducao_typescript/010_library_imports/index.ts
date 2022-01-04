import $ from "jquery";

$.fn.extend({
  newFunction() {
    console.log("New Function called");
  },
});

$("body").newFunction();
