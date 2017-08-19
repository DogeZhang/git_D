/*
	图片上传
	图片显示
*/
var file = null;
function loadFile_photo(input){
	//var file = input.files[0];
	//photo_url = URL.createObjectURL(file);
	//document.getElementById('p1').src = photo_url;
	
	for(var i = 0; i < input.files.length; i++){
		file = input.files[i];
		var photo_url = URL.createObjectURL(file);
		$('#photo_content').append('<img src="' + photo_url + '" style = "' + 'width: 540px;display:block">');
	}
	$('#new_post_photo_content_before').hide();
	$('#new_post_photo_content_after').show();
	$('#new_post_photo_text_content').slideDown();
}
$(document).ready(function(){
	/* 打开-关闭图片编辑窗口 */
	$('#new_post_photo').click(function(){
		$('#cover').css("display","");
		$('#new_post_photo_container').slideDown(250);
	});
	$('#button_photo_cancel').click(function(){
		var text = $('#new_post_photo_text_content span').html();
		if (text === "say something...?" && file == null) {
			$('#new_post_photo_container').hide();
			$('#cover').slideUp();
		}
		else{
			$('#are_you_sure_photo').slideDown(250);
			$('#leave_photo').click(function(){
				file = null;
				$('#new_post_photo_content_before').show();
				$('#new_post_photo_content_after').hide();
				$('#photo_content').empty();
				$('#new_post_photo_text_content span').html("say something...?");
				$('#new_post_photo_text_content').slideUp();
				$('#new_post_photo_container').hide();
				$('#are_you_sure_photo').slideUp(250);
				$('#cover').slideUp();
			});
			$('#let_think_photo').click(function(){
				$('#are_you_sure_photo').slideUp(250);
			})
		}
	});
});