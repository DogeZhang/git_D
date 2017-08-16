/*
	图片上传
	图片显示
*/

function loadFile_photo(input){
	//var file = input.files[0];
	//photo_url = URL.createObjectURL(file);
	//document.getElementById('p1').src = photo_url;
	
	for(var i = 0; i < input.files.length; i++){
		var file = input.files[i];
		var photo_url = URL.createObjectURL(file);
		$('#photo_content').append('<img src="' + photo_url + '" style = "' + 'width: 540px;display:block">');
	}
	$('#new_post_photo_content_before').hide();
	$('#new_post_photo_content_after').show();
}