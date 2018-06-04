
var board = 
[   0, 0, 0, 0, 
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
];

var selected = -1;
var completed = 0;

function ChangeBoard( index )
{

    var cell_slct = document.getElementById('cell_'+selected );
    var cell_idx  = document.getElementById('cell_'+index );
    var i;    
   
    if( board[index] == 0 )
    {
       
        if( selected == -1 )// nenhuma celula selecionada ainda
        {
            board[index] = 1;
            cell_idx.style.borderColor = 'black'
            selected = index;
        }
        else if( cell_slct.style.backgroundColor == cell_idx.style.backgroundColor )// selecionou duas celulas com cores iguais
        {
            
            cell_slct.style.borderColor = cell_slct.style.backgroundColor = 'white';
            cell_idx.style.borderColor  = cell_idx.style.backgroundColor  = 'white';
            
            selected = board[selected] = board[index] = -1;
            
            if( ++completed == 8 )
            {
                completed = 0;
                for( i = 0 ; i < board.length ; i++ )
                {
                    board[i] = 0;
                }
                
                Colorize( );
            }
            
        }
        else// selecionou celulas com cores direferentes
        {
            cell_slct.style.borderColor = 'white';
            selected = -1;
        }
        
        
    }
    else if( board[index] == 1 )// deselecionar a celula
    {
        board[index] = 0;
        cell_idx.style.borderColor = 'white';
        selected = -1;
    }
    
}


function Colorize( )
{
   
    var cell_a, cell_b;
    var cells = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var colors = ['red','green','blue','gray','purple','orange','brown','yellow'];
    var idx ;
    var i;
    
    for( i = 0 ; i < 8 ; i++ )
    {
        
        idx = Math.floor( Math.random( ) * cells.length );
        cell_a = document.getElementById( 'cell_'+cells[idx] );
        cells.splice(idx,1);
        
        idx = Math.floor( Math.random( ) * cells.length );
        cell_b = document.getElementById( 'cell_'+cells[idx] );
        cells.splice(idx,1);

        if( cell_a != null && cell_b != null )
        {
            cell_a.style.backgroundColor = colors[i];
            cell_b.style.backgroundColor = colors[i];
        }
       
    }
    
}