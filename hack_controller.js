angular.module("newsPage")
  .controller("newsFeed", ['$http', function($http) {

    var newsCtrl = this;
    newsCtrl.loading = false;
    newsCtrl.errorMessage = false;
    newsCtrl.searchResults = [];
    

    newsCtrl.searchForNews = function() {
            newsCtrl.loading = true;
      //ea676ea0-b5dc-4a52-b5b9-fc81ca81911f
      $http({
        method: 'GET',
        url: 'http://content.guardianapis.com/tags?q=' + newsCtrl.keywords + '&api-key=ea676ea0-b5dc-4a52-b5b9-fc81ca81911f'
      }).then(function successCallback(response) {
              newsCtrl.loading = false;
        // this callback will be called asynchronously
        // when the response is available
        
        newsCtrl.searchResults = response.data.response.results;
      }, function errorCallback(response) {
              newsCtrl.loading = false;

        newsCtrl.errorMessage = true;
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      //send keywords to api

    };


  }]);