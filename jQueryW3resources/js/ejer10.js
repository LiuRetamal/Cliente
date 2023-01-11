$(principal);

function principal(){
    $('p').each(function(){
        let pdata = $(this);
        pdata.html( pdata.text().replace(/(^\w+)/,'<b>$1</b>') ); // /(^\w+)/ Primera palabra en una frase 
        //$1 primer grupo de captura en negrita <b>
    });
}