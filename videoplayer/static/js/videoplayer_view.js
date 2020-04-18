/* Javascript for videoplayer-xblock. */
function videoPlayerXBlockInitView(runtime, element) {
    /* Weird behaviour :
     * In the LMS, element is the DOM container.
     * In the CMS, element is the jQuery object associated*
     * So here I make sure element is the jQuery object */
    // if(element.innerHTML) element = $(element);

    // videojs(video.get(0), {playbackRates:[0.75,1,1.25,1.5,1.75,2]}, function() {});
    // debugger;
    initApp();
}

function initApp() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
        // Everything looks good!
        initPlayer();
    } else {
        // This browser does not have the minimum set of APIs we need.
        console.error('Browser not supported!');
    }
}

function initPlayer() {
    // Create a Player instance.
    var video = document.getElementById('video');
    document.querySelectorAll("#video").forEach((video) => {
        let videoLink = video.getAttribute("data-videolink");
        let player = new shaka.Player(video);

        // // Attach player to the window to make it easy to access in the JS console.
        // window.player = player;

        // Listen for error events.
        player.addEventListener('error', onErrorEvent);

        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(videoLink).then(function () {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch(onError);  // onError is executed if the asynchronous load fails.
    });
}

function onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail);
}

function onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
}

// document.addEventListener('DOMContentLoaded', initApp);
