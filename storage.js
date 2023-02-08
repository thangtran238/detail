function Save() {
  localStorage.setItem('listProduct2',JSON.stringify(product));
}
function Load() {
  lcproduct = JSON.parse(localStorage.getItem('listProduct2'));
}
Load();

function proDetail(i) {
  var pDetail = '';
  for (var key in lcproduct) {
      if (key == i) {                                                                                                                                                                                                                                         
          var data = lcproduct[i];
          pDetail += '<form class="form-row">';
          pDetail += '<div class="col-md-3 mt-4">';
          pDetail +='<div class="card" style="width: 18rem;">';
          pDetail +='<img src="'+ data.img+'" class="card-img-top" alt="">';
          pDetail += '<div class="card-body">';
          pDetail += '<h5 class="card-title">'+ data.name +'</h5>';
          pDetail += '<p class="card-text">'+ data.descript + '<br>'+ data.price+'</p>';
          pDetail +='<a href="#" class="btn btn-warning">';
          pDetail +='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/></svg>';
          pDetail +='</a>';
          pDetail +='</div>';
          pDetail +='</div>';
          pDetail += '</div>';
          pDetail += '</form>';
          break;
      }
  }
  document.getElementById('proDetail').innerHTML=pDetail;
};

var listLocal = function() {
  var listproduct='';
  for (i in lcproduct) {
      var data = JSON.parse(JSON.stringify(lcproduct[i]));
      listproduct = '<div class="col-md-3 mt-4">';
      listproduct += '<div class="card" style="width: 18rem;">';
      listproduct += '<img src="'+ data.img+'" class="card-img-top" alt="">';
      listproduct += '<div class="card-body">';
      listproduct += '<h5 class="card-title">'+ data.name +'</h5>';
      listproduct += '<p class="card-text">'+ data.price +'</p>';
      listproduct += '<button type="button" class="btn btn-danger data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="proDetail('+i+')">Detail</button>';
      listproduct += '<a href="#" class="btn btn-warning">';
      listproduct += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="light" class="bi bi-cart-plus-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/></svg>';
      listproduct += '</a>';  
  document.getElementById('banchay').innerHTML += listproduct;
  }
  Save() ;
};

listLocal();
localStorage.clear();