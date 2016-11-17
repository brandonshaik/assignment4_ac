$(document).ready(function(){

  var tableTemplate = _.template($("#tableTemplate").html());

	// make a selection option for each row data set on dropdown menu
	_.each(defAction, function(value, index){
		$('#select').append('<option value="'+ value.subjects+'">'+value.subjects+'</option>')
  })

	// eventhandler on change

	$('#select').on("change", function(){
		var dropdownValue = $('#select').val(),
      data = _.findWhere(defAction, {subjects: dropdownValue});

      $("#results-table").html(tableTemplate({obj: data}));
      console.log(data);

	});

});
