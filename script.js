   function convertTime (dia,mes,anoN){
       let calc1 = dia
       let calc2 = mes*30
       let calc3 = 2022*365-anoN*365
       let result= calc1+calc2+calc3
       return result
   }
   console.log(convertTime(15,06,2000))