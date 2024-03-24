let string = "";
$(".btn").on("click",function(){
    value = $(this).html();
    try{
    if(value == "DEL"){
        string = string.substring(0, string.length - 1);
    }else if(value == "="){
        string = eval(string).toFixed(2);
    }else if(value == "C"){
        string = "";
    }else{
        string += value;
    }
    $("#show").val(string);
    }catch(error){
        $("#show").val("Error");
    }
});