angular.module('starter.service', [])


        .service('Datas', function($http) {
    //Declare datas here
    var datas = [];

    datas.$promise = $http.get('https://pixabay.com/api/?key=6314885-82c358fe0aa1fa3e20f8ee42a&q=nature&image_type=photo&pretty=true').then(function(response){
        //NOT here
       //datas = response.data.hits;
        
        //Also use angular.copy
        angular.copy(response.data.hits, datas);

        //return data for chaining
        return datas;
    });
return {
    all: function() {
      
      return datas;
    }
}
    
   

});
//   return {
//     all: function() {
//       return detail;

//     },
  
//   };
// });
