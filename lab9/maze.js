var incounter = 0;
var outcounter = 0;

function main(){

    const cssClassName = "youlose";
    const gameOverText = "Sorry, you lost. :[";
    const gameWonText = "You Win! :]";

    $(".boundary").mouseover(function(){
        if(incounter > 0){
            $(".boundary").addClass(cssClassName);
            $('#status').text(gameOverText);
            outcounter = 0;
            incounter = 0;
        }
        
    });

    $("#start").mouseover(function(){
        if(outcounter == 0 && incounter == 0){
            $(".boundary").removeClass(cssClassName);
            $('#status').text('Click the "S" to begin.');
            incounter++;

        }else{
            $(".boundary").addClass(cssClassName);
            $('#status').text(gameOverText);
            outcounter = 0;
            incounter = 0;
        }
        
    });

    $("#end").mouseover(function(){
        if(incounter > 0){
            let boundary = $(".boundary");
            if(!(boundary.hasClass(cssClassName))){
                $('#status').text(gameWonText);
            }else {
                $('#status').text(gameOverText);
            }
        }
        outcounter = 0;
        incounter = 0;
    });


    $("#start").mouseout(function(){
        if(incounter > 0){
            outcounter++;
        }
    });
}

$(document).ready(main);