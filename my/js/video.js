/*
	视频上传
	视频加载
	视频播放

*/

function loadFile_video(input){
	var file = input.files[0],
        url = file.urn || file.name;
        video_url = URL.createObjectURL(file);
		document.getElementById("video_player").src = video_url;
		//$('#video_media_wrapper').append('<video id="video_player" class="mejs__player" style="width: 100%; height: 100%; display: block" poster="" src="" type="video/mp4" loop preload controls playsinline webkit-playsinline height="" width=""></video>');
		$('#video_media_wrapper').css("display","block");
	   	$('.new_post_video_content').css("display","none");
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
    }