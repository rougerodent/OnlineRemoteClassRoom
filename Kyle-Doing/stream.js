$(document).ready(function(){
    var data = localStorage.getItem('roomname').split("~");
    document.getElementById("username").value = data[1]
    var domain = "meet.jit.si";
    var options = {
        roomName: data[0],
        // width : 100,
        // height : 100,
        parentNode: document.querySelector('#meet'),
        configOverwrite:{

        },
        interfaceConfigOverwrite:{
            DEFAULT_BACKGROUND: "#3b98ff",
            SHOW_JITSI_WATERMARK: false,
            noSsl: true,
            JITSI_WATERMARK_LINK: '#',
            SHOW_BRAND_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            SHOW_POWERED_BY: false,
            TOOLBAR_BUTTONS: [
                'microphone', 'camera', 'desktop', 'info','fullscreen',
                'fodeviceselection', 'hangup', 'recording',
                'etherpad', 'sharedvideo', 'settings', 'raisehand',
                'videoquality', 'filmstrip', 'feedback', 'stats', 'shortcuts',
                'tileview'
            ]
    }}
    var api = new JitsiMeetExternalAPI(domain,options)
    api.executeCommands({
    toggleShareScreen: [],
    toggleVideo: [],
    toggleAudio: []
});
    api.executeCommand('displayName', data[1]);
    
});
