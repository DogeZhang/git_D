function placeholder(div_id){
	$(div_id).click(function(){
		if($(div_id).text()==="something..."){
			alert('!');
			$(div_id).html('');
		}
	});
}
$(document).ready(function(){
	/* 文字编辑提示 */
	$('#new_post_text_content').click(function(){
		var text = $('#new_post_text_content span').html();
		if(text === "来写点什么吧！"){
			$('#new_post_text_content span').html('<br>');
		}
	});
	$('#new_post_text_content').blur(function(){
		var text = $('#new_post_text_content span').html();
		if(text === "<br>"){
			$('#new_post_text_content span').html('来写点什么吧！');
		}
	});
	/* 图片文字提示 */
	$('#new_post_photo_text_content').click(function(){
		var text = $('#new_post_photo_text_content span').html();
		if(text === "something..."){
			$('#new_post_photo_text_content span').html('<br>');
		}
	});
	$('#new_post_photo_text_content').blur(function(){
		var text = $('#new_post_photo_text_content span').html();
		if(text === "<br>"){
			$('#new_post_photo_text_content span').html('something...');
		}
	});
	/* 音乐文字提示 */
	$('#new_post_music_text_content').click(function(){
		var text = $('#new_post_music_text_content span').html();
		if(text === "say something...?"){
			$('#new_post_music_text_content span').html('<br>');
		}
	});
	$('#new_post_music_text_content').blur(function(){
		var text = $('#new_post_music_text_content span').html();
		if(text === "<br>"){
			$('#new_post_music_text_content span').html('something...');
		}
	});
	/* 视频文字提示 */
	$('#new_post_video_text_content').click(function(){
		var text = $('#new_post_video_text_content span').html();
		if(text === "something..."){
			$('#new_post_video_text_content span').html('<br>');
		}
	});
	$('#new_post_video_text_content').blur(function(){
		var text = $('#new_post_video_text_content span').html();
		if(text === "<br>"){
			$('#new_post_video_text_content span').html('something...');
		}
	});
	/* 文件文字提示 */
	$('#new_post_file_text_content').click(function(){
		var text = $('#new_post_file_text_content span').html();
		if(text === "something..."){
			$('#new_post_file_text_content span').html('<br>');
		}
	});
	$('#new_post_file_text_content').blur(function(){
		var text = $('#new_post_file_text_content span').html();
		if(text === "<br>"){
			$('#new_post_file_text_content span').html('something...');
		}
	});
	/* 打开文字编辑窗口 */
	$('#new_post_text').click(function(){
		$('#cover').css("display","");
		$('#new_post_text_container').slideDown(250);
	});
	/* 打开图片编辑窗口 */
	$('#new_post_photo').click(function(){
		$('#cover').css("display","");
		$('#new_post_photo_container').slideDown(250);
	});
	/* 打开音乐编辑窗口 */
	$('#new_post_music').click(function(){
		$('#cover').css("display","");
		$('#new_post_music_container').slideDown(250);
	});
	/* 打开视频编辑窗口 */
	$('#new_post_video').click(function(){
		$('#cover').css("display","");
		$('#new_post_video_container').slideDown(250);
	});
	/* 打开文件编辑窗口 */
	$('#new_post_text').click(function(){
		$('#cover').css("display","");
		$('#new_post_text_container').slideDown(250);
	});
	/* 打开ss编辑窗口 */
});