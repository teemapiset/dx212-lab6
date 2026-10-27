const menuItems = [
    { id: 1, name: "ข้าวมันไก่", price: 40 },
    { id: 2, name: "ข้าวหมูแดง", price: 45 },
    { id: 3, name: "ก๋วยเตี๋ยวเรือ", price: 50 },
    { id: 4, name: "สเต็กเนื้อ", price: 150 }
];

/**

 * @param {Array} items - อาเรย์ของเมนูอาหาร
 * @param {number} budget - งบประมาณสูงสุด
 */
const filterMenuByBudget = (items, budget) => {
    if (typeof budget !== 'number' || budget < 0) {
        return [];
    }
    return items.filter(item => item.price <= budget);
};

console.log("--- กรณีที่ 1: งบ 40 บาท ---");
console.log(filterMenuByBudget(menuItems, 40)); 

console.log("--- กรณีที่ 2: งบ 50 บาท ---");
console.log(filterMenuByBudget(menuItems, 50)); 

console.log("--- กรณีที่ 3: งบ 0 บาท (กรณีขอบ) ---");
console.log(filterMenuByBudget(menuItems, 0)); 

console.log("--- กรณีที่ 4: งบติดลบ -50 บาท (กรณีขอบ) ---");
console.log(filterMenuByBudget(menuItems, -50));