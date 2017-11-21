$(document).ready(function(){
 
 $('button').click(function(){
	 var input= $('input').val();
	 var output='<p><img src="img/avatar.jpg" alt="userpic">' + input + '</p>';
	 $('#usertxt').prepend(output);
	 return false;
});

});