
function waffelzutaten(){
    var Mehl=parseInt(document.getElementById("Mehl").value)
    var Zucker=parseInt(document.getElementById("Zucker").value)
    var Butter=parseInt(document.getElementById("Butter").value)
    var Milch=parseInt(document.getElementById("Milch").value)
    var pudcerzucker=parseInt(document.getElementById("pudcerzucker").value)
    var Valinezucker=parseInt(document.getElementById("Valinezucker").value)
    var Backpulver=parseInt(document.getElementById("Backpulver").value)
    var Nutella=parseInt(document.getElementById("Nutella").value)*5

    var lmehl=[];
    var lZucker=[];
    var lButter=[];
    var lMilch=[];
    var lpudcerzucker=[];
    var lValinezucker=[];
    var lBackpulver=[];
    var lNutella=[];


    var textin =document.getElementById("Names").value.replace(/(\r\n|\n|\r)/gm, " ").split(" ")
    Names =removespace(textin);
    


    for(round=0;Names.length>0;round++){
        if(Mehl>0){
            Mehl--
        }else{
            if(Names.length!=0){
                lmehl.push(Names[0])
                Names.shift(Names[0])
            }
           
        }
        if(Zucker>0){
            Zucker--
        }else{
            if(Names.length!=0){
                lZucker.push(Names[0])
                Names.shift(Names[0])
                Zucker=1;
            }
            
        }
        if(Butter>0){
            Butter--
        }else{
            if(Names.length!=0){
                lButter.push(Names[0])
                Names.shift(Names[0])
            }
           
        }
        if(Milch>0){
            Milch--
        }else{
            if(Names.length!=0){
                lMilch.push(Names[0])
                Names.shift(Names[0])
            }
           
        }
        if(Nutella>0){
            Nutella--
        }else{
            if(Names.length>2){
            if(Names.length!=0){
                lNutella.push(`${Names[0]},${Names[1]},${Names[2]},${Names[3]}`)
                Names.shift(Names[0])
                Names.shift(Names[0])
                Names.shift(Names[0])
                Names.shift(Names[0])
            }
                Nutella=5
            }
        }
        if(pudcerzucker>0){
            pudcerzucker--
        }else{
            if(Names.length!=0){
                lpudcerzucker.push(Names[0])
                Names.shift(Names[0])
                pudcerzucker=20;
            }
            
        }
        if(Backpulver>0){
            Backpulver--
        }else{
            if(Names.length!=0){
                lBackpulver.push(Names[0])
                Names.shift(Names[0])
                Backpulver=20;
            }
            
        }

        if(Valinezucker>0){
            Valinezucker--
        }else{
            if(Names.length!=0){
                lValinezucker.push(Names[0])
                Names.shift(Names[0])
                Valinezucker=20;
            }
            
        }
        
    }
    var finaltext=`Mehl: \n ${allnames(lmehl)}\n\n Zucker: \n ${allnames(lZucker)}\n\n Butter: \n ${allnames(lButter)}\n\n Milch: \n ${allnames(lMilch)}\n\n Nuttela: \n ${nuttelaname(lNutella)}\n\n pudcerzucker: \n ${allnames(lpudcerzucker)}\n\n Backpulver: \n ${allnames(lBackpulver)}\n\n Valinezucker: \n ${allnames(lValinezucker)}\n\n`
    
    document.getElementById("massage").innerHTML=finaltext
    document.getElementById("massage").hidden=false
}
function removespace(textin){
    for(i=0; i<textin.length;i++){
        if(textin[i]===""){
            textin.splice(i, 1);
            i--
        }
    }
    return textin
}
function allnames(p){
    var msg="";
    for(k=0;p.length>k;k++){
        msg=msg+" "+p[k]+";"
    }
    return msg
}

function nuttelaname(n){
    var msgn=""
    for(f=0;f<n.length;f++){
        msgn=`${msgn} \n Nuttela${f+1}:${n[f]} `
    }
    return msgn

}