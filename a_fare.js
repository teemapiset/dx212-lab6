// a_fare.js

const calcFare = (distanceKm) => {
    if (typeof distanceKm !== 'number' || isNaN(distanceKm) || distanceKm < 0) {
        return 0;
    }
    if (distanceKm <= 2) {
        return 10;
    }
    const extraKm = Math.ceil(distanceKm - 2);
    return 10 + (extraKm * 2);
};

// ทดสอบ 3 กรณี
console.log("ระยะทาง 1.5 กม. -> ค่ารถ:", calcFare(1.5));
console.log("ระยะทาง 2 กม. -> ค่ารถ:", calcFare(2));
console.log("ระยะทาง 7.2 กม. -> ค่ารถ:", calcFare(7.2));

/*
  =========================================
  CHECKPOINT A:
  Prompt A1 เป็นคำสั่งกว้างๆ ไร้บริบท ทำให้ AI เขียนผิดภาษา (ออกเป็น Python) 
  และไม่ตรงเงื่อนไข ส่วน Prompt A2 มีองค์ประกอบครบ 5 ส่วน (บทบาท, งาน, บริบท, 
  ข้อจำกัด, รูปแบบ) ทำให้ผลลัพธ์ "ใช้ได้ทันที" เพราะ AI ทราบขอบเขตและเงื่อนไขที่ชัดเจน
  =========================================
*/