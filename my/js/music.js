/* 获得歌曲ID3 */
//sample.mp3 sits on your domain
    /*
    ID3.loadTags("孤单北半球 - 欧得洋.mp3", function() {
      showTags("孤单北半球 - 欧得洋.mp3");
    }, {
      tags: ["title","artist","album","picture"]
    });
*/
    /**
     * Loading the tags using the FileAPI.
     */
    var file = null;
    function loadFile_music(input) {
        file = input.files[0],
        url = file.urn || file.name;
        music_url = URL.createObjectURL(file);

      ID3.loadTags(url, function() {
        showTags(url);
        $('#new_post_music_content').hide();
        $('#music_media_wrapper').css("display","block");
        document.getElementById("music_player").src = music_url;
      }, {
        tags: ["title","artist","album","picture"],
        dataReader: ID3.FileAPIReader(file)
      });
    }

    /**
     * Generic function to get the tags after they have been loaded.
     */
    function showTags(url) {
        var tags = ID3.getAllTags(url);
        console.log(tags);
        document.getElementById('title').textContent = tags.title || "";
        document.getElementById('artist').textContent = tags.artist || "";
        document.getElementById('album').textContent = tags.album || "";
        var image = tags.picture;
        if (image) {
            var base64String = "";
            for (var i = 0; i < image.data.length; i++) {
                base64String += String.fromCharCode(image.data[i]);
            }
            var base64 = "data:" + image.format + ";base64," +
                    window.btoa(base64String);
            document.getElementById('picture').setAttribute('src',base64);
            $('#new_post_music_text_content').slideDown();
        } else {
            document.getElementById('picture').setAttribute('src','10b88d166dea481c94939731ac30ed21.jpg');
            $('#new_post_music_text_content').slideDown();
        }
    }
$(document).ready(function(){
    $('#photo_music_file_upload-m').hover(function(){
    	$('#photo_music_file_example_text1').css("display","none");
    	$('#photo_music_file_example_text2').css("display","");
    },function(){
    	$('#photo_music_file_example_text1').css("display","");
    	$('#photo_music_file_example_text2').css("display","none");
    });
    $('#music_cover').hover(function(){
    	$('#music_cover>.music_ID3').show();
    },function(){
    	$('#music_cover>.music_ID3').hide();
    });
    /* 打开-关闭音乐编辑窗口 */
    $('#new_post_music').click(function(){
        $('#cover').css("display","");
        $('#new_post_music_container').slideDown(250);
    });
    $('#button_music_cancel').click(function(){
        var texq = $('#new_post_music_text_content span').html();
        if (texq === "say something...?" && file == null) {
            $('#new_post_music_container').hide();
            $('#cover').slideUp();
        }
        else{
            $('#are_you_sure_music').slideDown(250);
            $('#leave_music').click(function(){
                file = null;
                $('#new_post_music_text_content span').html('say something...?');
                $('#new_post_music_text_content').slideUp();
                $('#new_post_music_label span').html('#标签');
                $('#new_post_music_content').show();
                document.getElementById('picture').src = '';
                document.getElementById("music_player").src = '';
                
                $('#music_media_wrapper').hide();
                $('#new_post_music_container').hide();
                $('#are_you_sure_music').slideUp(250);
                $('#cover').slideUp();
            });
            $('#let_think_music').click(function(){
                $('#are_you_sure_music').slideUp(250);
            })
        }
    });
});