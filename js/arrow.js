/* esto */
function callMe1(name){
    console.log(name);
}

/* que también puede ser */
const callMe2=function(name){
    console.log(name);
}

/* se convierte en */
const callMe3=(name)=>{
    console.log(name);
}

const ob={
    msg:"ob msg",
    fun:()=>{
        console.log(this.msg);
    },
    fun2:function(){
        console.log(this.msg);
    }
}
ob.fun2();