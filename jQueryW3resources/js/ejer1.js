$(principal);

function principal(){
    $("p").click("click", function(){
        $( "<div>This is a click Event</div>").appendTo( "body" );
    });
    
    $("p").dblclick("dblclick", function(){
        $( "<div>This is a double-click Event</div>" ).appendTo( "body" );
    });
}