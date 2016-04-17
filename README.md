# Goat-tracker 95

### tools needed

* Angular
  - ng-app
  - ng-repeat
  - ng-href
  - ngRoute
  - ng-view
  - $http
  - Controllers 

  
  
  
## Getting started
 
1. Fork & clone the lab.
1. npm install
1. bower install
1. Start the node server `nodemon server.js` - you'll only use this to serve your app.

## Instructions

You'll be constructing pages for the RESTful API at [http://goats-api.herokuapp.com/api/goats](http://goats-api.herokuapp.com/api/goats).  You may want to familiarize yourself with it's endpoint.


#### GoatsIndex

First off we'll create an index page.

1. Checkout the `/` and `/goats` routes in `app.js`.
1. Add the required `ng-app` and `ng-view` attributes.
1. Open the `GoatsIndexController`; fill in the needed details to fetch all of the goats.
1. Edit the `goats-show.html` template.  For each goat, find a good way to render:
  * the goat name
  * the image
  * you can ignore the other attributes here - lets keep the page clean.
1. Add a link (can be a bootstrap button) to show each goat.  There's nowhere for this to go yet, but you can use a URL like `goats/34`
  
Once you have this working and all the goats show on the page, proceed to work on the GoatsShow route.

#### GoatsShow

1. Add the template and controller to the router config.  Make sure it works.
1. Setup the controller to fetch the correct goat based on ID.
1. Design a template that displays the details retrieved from the server.
1. Add a button or link to go back to the index page.  

## Stretch Challenges

#### Mapping challenge

Let's track the location of our goats and learn about integrating google maps with angular.  


