

const ism=prompt("Ism kiriting!")
const harf=prompt("Harf kiriting!")

if(ism.toLowerCase().includes(harf.toLowerCase())){
    alert(ism+ " ismida "+ harf+  " harfi  mavjud ")
  
}else{
    alert(ism+ " ismida "+ harf+ " harfi mavjud emas ")
}