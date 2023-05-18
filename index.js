// Criando um módulo para a aplicação
var app = angular.module('dogApp', []);

// Criando uma váriavel para o ID do botão
const button1 = document.querySelector('#refreshButton');

// Criando uma função reload() para o botão atualizar a página
button1.addEventListener('click', ()=>{
    location.reload();
}) 

// Criando um serviço para fazer a chamada da API
app.service('DogService', function($http) {
  this.getDogImage = function() {
    return $http.get("https://dog.ceo/api/breeds/image/random")
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
});

// Criando um controlador para atualizar o modelo com o conteúdo da resposta
app.controller('DogController', function(DogService) {
  var vm = this;

  // Chamando o serviço para obter a imagem do cachorro
  DogService.getDogImage()
    .then(function(data) {
      vm.dogImageUrl3 = data.message;
    });

  DogService.getDogImage()
    .then(function(data) {
      vm.dogImageUrl2 = data.message;
    });

  DogService.getDogImage()
    .then(function(data) {
      vm.dogImageUrl = data.message;
    });

});

  
