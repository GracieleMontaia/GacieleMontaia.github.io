
var tabuleiro = 
[   0, 0, 0, 0, 
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
];

var selected = -1;


function AlterarTabuleiro( index )
{
    var i;
    
    if( tabuleiro[index] == 1 )
    {
        tabuleiro[index] = 0;
        document.getElementById( 'cell_'+index ).style.borderColor = 'white';
        selected = -1;
        
    }
    else if( tabuleiro[index] == 0 )
    {
       
        if( selected == -1 )
        {
            tabuleiro[index] = 1;
            document.getElementById( 'cell_'+index ).style.borderColor = 'black';
            selected = index;
        }
        else if( document.getElementById('cell_'+selected ).style.backgroundColor == 
                 document.getElementById('cell_'+index ).style.backgroundColor)
        {
            
            document.getElementById('cell_'+selected ).style.backgroundColor = 'white';
            document.getElementById('cell_'+selected ).style.borderColor = 'white';
            document.getElementById('cell_'+index ).style.backgroundColor = 'white';
            document.getElementById('cell_'+index ).style.borderColor = 'white';

            selected = tabuleiro[selected] = tabuleiro[index] = -1;
            
            i = 0;
            
            while( i < tabuleiro.length && tabuleiro[i] == -1 )
            {
                i++;
            }
            
            if( i == tabuleiro.length )
            {
                Colorir( );
                
                for( i = 0 ; i < tabuleiro.length ; i++ )
                {
                    tabuleiro[i] = 0;
                }
                
                selected = -1;
            }
            
           
            
           
        }
        else
        {
            document.getElementById('cell_'+selected ).style.borderColor = 'white';
            selected = -1;
        }
        
        
    }
    
}


function Colorir( )
{
    
    var cellName = 'cell_';
    var cell_a, cell_b
    var cells = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var cores = ['red','green','blue','gray','purple','orange','brown','yellow'];
    var idx ;
    var i;
    
    for( i = 0 ; i < 8 ; i++ )
    {
        
        idx = Math.floor( Math.random( ) * cells.length );
        cell_a = document.getElementById( cellName+cells[idx] );
        cells.splice(idx,1);
        
        idx = Math.floor( Math.random( ) * cells.length );
        cell_b = document.getElementById( cellName+cells[idx] );
        cells.splice(idx,1);

        if( cell_a != null && cell_b != null )
        {
            cell_a.style.backgroundColor = cores[i];
            cell_b.style.backgroundColor = cores[i];
        }
       
    }
    
}