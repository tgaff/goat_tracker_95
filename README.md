# Goat-tracker 95

### tools needed

* Angular
  - ng-app
  - ng-repeat
  - ng-href
  - ngRoute
  - ng-view
  - $http

  
  
  
## Getting started
 
1. Fork & clone the lab.
1. npm install
1. bower install
1. Start the node server `nodemon server.js` - you'll only use this to serve your app.
1. Visit `http://localhost:3000`

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

Add a show page for each goat.  It should be displayed at a URL like `localhost:3000/goats/34`.

1. Add the template and controller to the router config.
  * Make sure it works.
1. Setup the controller to fetch the correct goat based on ID.
1. Design a template that displays the details retrieved from the server.
1. Add a button or link to go back to the index page.  

## Stretch Challenges

Feel free to choose any of the following challenges:

#### CRUD challenge

**Create:** Add a way to submit a new goat.  The API is restful and will respond correctly to `POST /api/goats`.  

* Your form, and page can look however you want.  
* Display the created goat OR re-display the index page after creation.

**Delete:** Next add a way to remove a goat.

* Add a button to the goats-show page to send a delete request.
* Display the index page after a successful delete.

**Update:** Allow users to submit updates.


#### Mapping challenge

This is an ADVANCED challenge.

Let's track the location of our goats and learn about integrating google maps with angular.  


We're going to make use of a new [angular library for google maps](https://angular-ui.github.io/angular-google-maps/#!/).

Tools used:

* ui-gmap-google
* ui-gmap-marker

##### Display a map

1. Let's install the required libraries using bower.  `bower install --save angular-google-maps`

1. Angular-google-maps has dependencies on a module called "lodash" and on a logging module.  Add the following script tags.
  
  ```html
  <script src="/vendor/lodash/dist/lodash.js"></script>
  <script src="/vendor/angular-simple-logger/dist/angular-simple-logger.min.js"></script>
  <script src="/vendor/angular-google-maps/dist/angular-google-maps.js"></script>
  ```
  
1. In your Angular module declaration, specify the `uiGmapgoogle-maps` dependency.  

  ```js
  angular
    .module('goat-tracker', ['ngRoute', 'uiGmapgoogle-maps'])
  ```

1. We need to configure google maps for our application.  In your `config` function add the dependency `uiGmapGoogleMapApiProvider`.

1. Add the following configuration at the bottom of the config function:

  ```js
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',
    libraries: 'weather,geometry,visualization'
  });
  ```
  
1. Create a new template and GoatsMapController.  Configure a route and link to it from the index page.

  > Don't forget that you need to include the script tag for each controller in your layout.

1. In your controller, set a map center to:  30.6928686, -9.8474607
  
  ```js
    vm.mapCenter = { latitude: 30.6928686, longitude: -9.8474607 };
  ```
1. Set a default zoom level

  ```js
    vm.mapZoom = 8;
  ```
  
1. In your template setup the initial map using the [`ui-gmap-google-map` directive](https://angular-ui.github.io/angular-google-maps/#!/api/google-map)

	```html
      <ui-gmap-google-map center="ADD mapCenter HERE" zoom="ADD mapZoom HERE">
	```
  * Fill in the center and zoom, accessing this data from the controller.

  > Note that the directive's attributes take expressions; you don't need to use `{{ ... }}`

1. You'll need to manually assign a height to the map or it won't be visible.

```css
  .angular-google-map-container { height: 800px; }
```

1. You should be able to see the map now.  Try visiting the page.  It should be centered on Satir, Morocco.
  * If not inspect the errors, documentation and solutions.

##### Next we need to get the Goat latitude and longitude and display each one on the map.  


1. Let's start by adding just one goat.  We can use the [`ui-gmap-marker` directive](https://angular-ui.github.io/angular-google-maps/#!/api/marker) for to put a marker on the map.  Hardcode the following *single* marker inside your google-map. 

	```html
	 <ui-gmap-marker coords="{latitude: 30.725865, longitude: -9.848826}" idkey="1">
	```

1. Ok, You should see that on the map now.

1. Add $http to your controller and fetch all of the goats from the API. (console.log it)

1. Change the `ui-gmap-marker` directive to make use of all of the goats.  

  > You'll likely need to make use of `ng-repeat` here!

  > Make sure idkey is set to the `id` of each goat.
  
  > They're pretty close together, consider zooming in further.
  
 
1. On your own read the [docs for ui-gmap-window](https://angular-ui.github.io/angular-google-maps/#!/api/window) figure out how to add the InfoWindow for each marker.


If you got this far Amazing job!