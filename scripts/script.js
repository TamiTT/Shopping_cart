$(document).ready(function() {
  console.log('ich funktioniere');

  var columns = $('.column');
  console.log('columns:', columns);

  function removeClass () {
    columns.removeClass('is-expanded');
  }

  function addClass (column) {
    column.addClass('is-expanded');
  }

  function handleClick(event) {
    console.log('target: ', event.target);
    var $targetColumn = $(event.target).closest('.column');
    console.log($targetColumn);

    // add('is-expanded');
    // closest('.column');
    removeClass();
    addClass($targetColumn);
    // columns.removeClass('is-expanded');
  }
  
  columns.click(handleClick);



      // $(event.target).closest('.column');
      //  $targetColumn.addClass('is-expanded');
    // });
});

	//   console.log('columns: ', columns);
  //
	//   // looping over all columns (inside of HTML collection)
	//   // Using ECMAScript 6, older browsers need other solutions
	//   for (var column of columns) {
	//     column.addEventListener('click', function(event) {
	//       // remove is-expanded class from all elements
	//       // to do so, we loop over each item again
	//       for (var col of columns) {
	//         col.classList.remove('is-expanded');
	//       }
	//       // the event.target referts to the clicked item
	//       console.log('event.target: ', event.target);
  //       $(event.target).parents().find('column')
	//       event.target.classList.add('is-expanded');
	//     });
	//   }
  // });
