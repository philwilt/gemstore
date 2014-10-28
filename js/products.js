(function() {
  var app = angular.module('store-directives', []);

  app.directive("productGallery", function (){
    return {
      restrict: 'E',
      templateUrl: "js/product-gallery.html",
      controller: function () {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "js/product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "js/product-reviews.html"
    };
  });

  app.directive("productSpecs", function () {
    return {
      restrict: 'A',
      templateUrl: "js/product-specs.html"
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: 'E',
      templateUrl: "js/product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
          this.tab = setTab;
        };
       },
      controllerAs: 'tab'
    };
  });

})();
