angular.module('Eggly', [

])

.controller('MainCtrl', function($scope) {
    $scope.categories = [
      {"id": 0, "name": "Development"},
      {"id": 1, "name": "Design"},
      {"id": 2, "name": "Excercise"},
      {"id": 3, "name": "Humor"}
    ];

    $scope.bookmarks = [
      {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
      {"id": 2, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development"},
      {"id": 3, "title": "AngularJS", "url": "http://angularjs.org", "category": "Design"},
      {"id": 4, "title": "AngularJS", "url": "http://angularjs.org", "category": "Humor"},
    ];

    $scope.currentCategory = null;

    function setCurrentCategory(category){
      $scope.currentCategory = category;

      cancelCreating();
      cancelEditing();
    }

    function isCurrentCategory(category) {
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCurrentCategory = isCurrentCategory;

    // Creating and editing states

    $scope.isEditing = false;
    $scope.isCreating = false;

    function startCreating() {
      $scope.isCreating = true;
      $scope.isEditing = false;

      resetCreateForm();
    }

    function cancelCreating() {
      $scope.isCreating = false;
    }

    function startEditing() {
      $scope.isCreating = false;
      $scope.isEditing = true;
    }

    function cancelEditing() {
      $scope.isEditing = false;
    }

    // You have to be in a category in order to create a category, that's why we check if currentCategory is defined.
    function shouldShowCreating() {
      return $scope.currentCategory && !$scope.isEditing;
    }

    function shouldShowEditing() {
      return $scope.isEditing && !$scope.isCreating;
    }

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowEditing = shouldShowEditing;
    $scope.shouldShowCreating = shouldShowCreating;

    function resetCreateForm() {
      $scope.newBookmark = {
        title: '',
        url: '',
        category: $scope.currentCategory.name
      }
    }

    function createBookmark(bookmark) {
      bookmark.id = $scope.bookmarks.length;
      // The push() method adds one or more elements to the end of an array and returns the new length of the array.
      $scope.bookmarks.push(bookmark);

      resetCreateForm();
    }

    $scope.createBookmark = createBookmark;

    $scope.editBookmark = null;

    function setEditBookmark(bookmark) {
      $scope.editBookmark = bookmark;
    }


  })
;
