$(document).ready(function() {
	
	
	var re = /^[()0-9+-]*$/;
	
	$('#inputField').on('input', function() {
	var input=$(this);
	
	
	var is_phone=re.test(input.val());
	
	
	//check the readonly select value
	/*$('#readOnly').change(function(){
		
		var readonlyVal = $(this).val();
		$("#flag1").text(readonlyVal);
	});*/
	
	//check the phone number

	  $('#inputField').keyup(function(){
		 $('#flag2').text($(this).val());
		
		if(is_phone){
			input.removeClass("invalid").addClass("valid");
			$("#error").css("display", "none");
		}else{
			input.removeClass("valid").addClass("invalid");
			$("#error").css("display", "block");
		}	
	});
	  });

	//check box data
	/*$('#checkBox').on("change",function(){
		if($(this).val()==true){
			
		 } 
		$('#flag3').text($(this).val());	
	});*/
	
	$('#inputField').blur(function(){
		var input=$(this).val();
		
		//alert($("#inputField").val());
		
		var is_phone = re.test($("#inputField").val());
		console.log(input);
		if(input==""){

			$("#failIcon").css("display", "inline");
			$("#passIcon").css("display", "none");
			$("#error").css("display", "block");
		}else{ if(is_phone){
			//alert("true");
			$("#passIcon").css("display", "inline");
			$("#failIcon").css("display", "none");
			$("#error").css("display", "none");
		}else{
			//alert("false");
			$("#failIcon").css("display", "inline");
			$("#passIcon").css("display", "none");
			$("#error").css("display", "block");
		} }
	});
	
});
