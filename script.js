let search = document.querySelector('.search-form');
document.querySelector('#search-btn').onClick = () =>{
search.classList.toggle('active');
}

function Qarau() {
    var x = document.getElementById("select_1").value;
    document.getElementById("narse_1").innerHTML = x;
  }