const isAdult = (age)=>{
    if (age>=18){
       return true;
    }else return false;
}

const canDrink = (age) =>age>=21;
const isSenior= (age)=>age>=65;

//export {isAdult,canDrink};
export {isAdult,canDrink,isSenior as default };


//export default (age)=>age>=65;
