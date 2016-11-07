$(document).ready(function(){

	// this is where your pseudocode and jquery goes!
  var tableTemplate = _.template($("#tableTemplate").html());

	// make a selection option for each row in your data set, i.e. make a dropdown menu
	_.each(defAction, function(value, index){
		$('#select').append('<option value="'+ value.subjects+'">'+value.subjects+'</option>')
  })

	// eventhandler on click

	$('#appbutton').on("click", function(){
		var dropdownValue = $('#select').val(),
      data = _.findWhere(defAction, {subjects: dropdownValue});

      $("#results-table").html(tableTemplate({obj: data}));
      console.log(data);




	});



});
