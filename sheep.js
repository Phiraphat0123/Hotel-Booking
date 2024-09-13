
function calculateRealSheep (crowd){

    // จากข้อมูลในฝูงมี 8 =120 ตัวจะมีแกะจริงอยู่  6 =100 ดังนั้นจะต้องหา 2 ตัวที่รวมกันได้ 20 และคัดออก
    // ก็จะเหลือแกะจริงๆอีก 6 ตัว

    let sheep = undefined
    // ดักจำนวนข้อมูลก่อนนำไปคำนวน
    if(crowd.length!=8){
        console.log("โปรเอาแกะมาอีก!!!")
        return;
    }else{

        // ทำการ loop 1 ชั้น เพื่อหาหมาป่าตัวที่ 1
        for(let i =0; i< crowd.length;i++){
            // loop ชั้น 2 เพื่อ หาหมาป่าตัวที่ 2
            for(let j=i+1;j< crowd.length;j++){
                const woof = crowd[i]+crowd[j] //ถ้า 2  ตัวนี้รวมกัน = 20 คือ woof
                if(woof==20){
                    sheep = crowd.filter((animal,index)=>index!=i &&index!=j)
                    console.log(`แกะที่แท้จริงก็คือ!!!: ${sheep}`)
                    return ;
                }
            }
        }
    }

    
}

calculateRealSheep([10,13,25,30,12,18,5,7]) //10,25,30,12,18,5
calculateRealSheep([9,26,1,14,11,41,6,12]) //26,1,14,41,6,12