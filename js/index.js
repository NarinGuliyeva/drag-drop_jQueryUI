let categories = [
  'Kozmetik',
  'Elektronik',
  'Moda',
  'Ev/yasam',
  'Oto/bahce',
  'Spor',
  'Supermarket',
  'Kitap/muzik',
];

let ul = document.querySelector('#navbarr ul');
let sortable = document.querySelector('#sortable ');
$(document).ready(
  function load() {
    $.each(categories, (index, item) => {
      $(ul).append(`<li>${item}</li>`);
      $(sortable).append(
        `<li class="sortableItems"> <span>${item}</span><span>${
          index + 1
        }</span></li>`
      );
    });
  },
  $('#sortable').sortable({
    start: function (event, ui) {},
    change: function (event, ui) {},
    stop: function (event, ui) {
      ul.innerHTML = '';
      let changedCategories = document.querySelectorAll('#sortable .sortableItems span:first-child ');
      console.log(changedCategories);
      $.each(changedCategories, (index, item) => {
        $(ul).append(`<li>${item.innerText} </li>`);
      });
    },
  })
);
