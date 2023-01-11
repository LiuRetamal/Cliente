$(principal);

function principal(){
    $('a.printPage').click(function(){
        window.print();
        return false;
    });
}
