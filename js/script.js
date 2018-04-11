
var i = 1;

function ChangeImage( )
{
    
    
    
    var slider = document.getElementById('slider');
    
    slider.src = "img/img"+i+".jpg";
    
    i++;
    if( i == 8 )
    {
        i = 1;
    }
    
    window.setTimeout( 'ChangeImage( )' , 2000 );
    

}