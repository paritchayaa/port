var nextrow = 0 ;
let input = document.getElementById('text1');

function postFunction()
{

let inputtext = input.value;
if(nextrow == 0 && inputtext != ''){
    document.getElementById('topic1').innerHTML= inputtext ;
    document.getElementById('text1').value = '';
    nextrow = 1;
    }
    else if(nextrow == 1 && inputtext != ''){
        document.getElementById('comment1').innerHTML= inputtext ;
        document.getElementById('text1').value = '';
        nextrow = 2;
        }

        else if(nextrow == 2 && inputtext != ''){
            document.getElementById('comment2').innerHTML= inputtext ;
            document.getElementById('text1').value = '';
            nextrow = 0;
        }
        console.log(input);
        }

        function clearFunction()
        {
            document.getElementById('topic1').innerHTML="";
            document.getElementById('comment1').innerHTML="";
            document.getElementById('comment2').innerHTML="";
            nextrow = 0;
        }