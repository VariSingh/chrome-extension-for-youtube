var embedVideo = function(){

var ele = document.getElementsByTagName("cite");

   
    if(typeof(ele)!='undefined'){
        var url = ele[0].innerHTML;

  var vid = getId(url);
    console.log(vid);
    if(vid!='error'){
        var htmllink = '<iframe width="560" height="315" src="//www.youtube.com/embed/' + vid + '" frameborder="0" allowfullscreen></iframe>';

        var destElement = document.getElementsByClassName("xpdopen")[0];
        destElement.innerHTML = htmllink;
    }
   


    }


}


    
embedVideo();



document.addEventListener("DOMNodeInserted", function(e) {
  console.log("DOM inserted");
  embedVideo();
}, false);














    function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}



