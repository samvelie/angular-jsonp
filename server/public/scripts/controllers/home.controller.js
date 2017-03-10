myApp.controller('HomeController', ['$http', function($http) {
  console.log('home controller running');

  var self = this;

  self.petObject = {};

  self.message = "Welcome to the Home View";

  var api_key = 'c131370934be7916dbc03da9ee196061';
  var baseURL = 'http://api.petfinder.com/';

  self.getRandomPet = function(){
    // create a URL
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + api_key;
    query += '&animal=pig';
    query += '&output=basic';
    query += '&format=json';
    // query += '&callback=JSON_CALLBACK';

    console.log('api query', query);


    //encode that URL
    var request = encodeURI(query);

    console.log('encodedURI', request);


    //make ajax request
    $http.jsonp(request, {jsonpCallbackParam: 'callback'}).then(function(response){
      console.log('response', response.data.petfinder.pet);
      self.petObject= response.data.petfinder.pet;
    });

    // when request is complete, put info on DOM
  };

}]);
