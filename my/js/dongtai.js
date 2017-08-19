function placeholder(div_id){
	$(div_id).click(function(){
		if($(div_id).text()==="something..."){
			alert('!');
			$(div_id).html('');
		}
	});
}
$(document).ready(function(){
	/* 打开-关闭文字编辑窗口 */
	$('#new_post_text').click(function(){
		$('#cover').css("display","");
		$('#new_post_text_container').slideDown(250);
	});
	$('#button_text_cancel').click(function(){
		var text = $('#new_post_text_content span').html();
		if (text === "来写点什么吧！") {
			$('#new_post_text_container').hide();
			$('#cover').slideUp();
		}
		else{
			$('#are_you_sure_text').slideDown(250);
			$('#leave_text').click(function(){
				$('#new_post_text_content span').html('来写点什么吧！');
				$('#new_post_text_container').hide();
				$('#are_you_sure_text').slideUp(250);
				$('#cover').slideUp();
			});
			$('#let_think_text').click(function(){
				$('#are_you_sure_text').slideUp(250);
			})
		}
	});
	/* 打开-关闭文件编辑窗口 */
	$('#new_post_file').click(function(){
		$('#cover').css("display","");
		$('#new_post_file_container').slideDown(250);
	});
	/* 打开ss编辑窗口 */

	/* 文字编辑提示 */
	$('#new_post_text_content').click(function(){
		$('#changwenzhang').slideDown(250);
		$('#are_you_sure_text').slideUp(250);
		var text = $('#new_post_text_content span').html();
		if(text === "来写点什么吧！"){
			$('#new_post_text_content span').html('<br>');
		}
	});
	$('#new_post_text_content').blur(function(){
		$('#changwenzhang').slideUp(250);
		var text = $('#new_post_text_content span').html();
		if(text === "<br>"){
			$('#new_post_text_content span').html('来写点什么吧！');
		}
	});
	/* 图片文字提示 */
	$('#new_post_photo_text_content').click(function(){
		$('#are_you_sure_photo').slideUp(250);
		var text = $('#new_post_photo_text_content span').html();
		if(text === "say something...?"){
			$('#new_post_photo_text_content span').html('<br>');
		}
	});
	$('#new_post_photo_text_content').blur(function(){
		var text = $('#new_post_photo_text_content span').html();
		if(text === "<br>"){
			$('#new_post_photo_text_content span').html('say something...?');
		}
	});
	/* 音乐文字提示 */
	$('#new_post_music_text_content').click(function(){
		$('#are_you_sure_music').slideUp(250);
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
		if(text === "say somethimg...?"){
			$('#new_post_video_text_content span').html('<br>');
		}
	});
	$('#new_post_video_text_content').blur(function(){
		var text = $('#new_post_video_text_content span').html();
		if(text === "<br>"){
			$('#new_post_video_text_content span').html('say somethimg...?');
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
	
});