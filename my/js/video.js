/*
	视频上传
	视频加载
	视频播放

*/
var file = null;
function loadFile_video(input){
	 	file = input.files[0],
        url = file.urn || file.name;
        video_url = URL.createObjectURL(file);
		document.getElementById("video_player").src = video_url;
		//$('#video_media_wrapper').append('<video id="video_player" class="mejs__player" style="width: 100%; height: 100%; display: block" poster="" src="" type="video/mp4" loop preload controls playsinline webkit-playsinline height="" width=""></video>');
		
		$('#video_media_wrapper').css('display','');
	   	$('.new_post_video_content').css('display','none');
		/*
		调整视频窗口大小
		并添加封面
		只能在html <script></script>中有效
		此处无效
		只能修改src属性
		var pic = new Image(); 
		pic.src = "https://68.media.tumblr.com/tumblr_oupbh4694j1uvv5gh_smart1.jpg";
		pic.onload=function(){
			var hh = pic.height;
			var ww = pic.width;
			
		}
		document.getElementById("video_player").poster = "https://68.media.tumblr.com/tumblr_oupbh4694j1uvv5gh_smart1.jpg";
		document.getElementById("video_player").height = pic.height;
			document.getElementById("video_player").width = pic.width;
		*/
		$('#new_post_video_text_content').slideDown();
}
$(document).ready(function(){
	$('.new_post_photo_input_url').focus(function(){
		$('.new_post_photo_input_bc').addClass("video_url_input");
	});
	/* 打开-关闭视频编辑窗口 */
	$('#new_post_video').click(function(){
		$('#cover').css("display","");
		$('#new_post_video_container').slideDown(250);
	});
	$('#button_video_cancel').click(function(){
		var texq = $('#new_post_video_text_content span').html();
		if (texq === "say somethimg...?" && file == null) {
			$('#new_post_video_container').hide();
			$('#cover').slideUp();
		}
		else{
			$('#are_you_sure_video').slideDown(250);
			$('#leave_video').click(function(){
				file = null;
				document.getElementById("video_player").src = "";
				$('#video_media_wrapper').hide();
				$('.new_post_video_content').show();
				$('#new_post_video_text_content span').html('say somethimg...?');
				$('#new_post_video_text_content').hide();
				$('#new_post_video_container').hide();
				$('#are_you_sure_video').slideUp(250);
				$('#cover').slideUp();
			});
			$('#let_think_video').click(function(){
				$('#are_you_sure_video').slideUp(250);
			})
		}
	});
});