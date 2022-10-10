//Closure-function bundled together with its lexical environemnt
//Example-1

function z(){
    var b=500;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();