/* Javascript for videoplayer-xblock. */
function videoPlayerXBlockInitStudio(runtime, element) {

    $(element).find('.action-cancel').bind('click', function() {
        runtime.notify('cancel', {});
    });

    $(element).find('.action-save').bind('click', function() {
        var data = {
            'display_name': $('#video_edit_display_name').val(),
            'url': $('#video_edit_url').val(),
            'allow_download': $('#video_edit_allow_download').val(),
            'source_text': $('#video_edit_source_text').val(),
            'source_url': $('#video_edit_source_url').val(),
            'start_time': $('#video_edit_start_time').val(),
            'end_time': $('#video_edit_end_time').val()
        };
        
        runtime.notify('save', {state: 'start'});
        
        var handlerUrl = runtime.handlerUrl(element, 'save_video');
        $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
            if (response.result === 'success') {
                runtime.notify('save', {state: 'end'});
                // Reload the whole page :
                // window.location.reload(false);
            } else {
                runtime.notify('error', {msg: response.message})
            }
        });
    });
}