// Question #1
let myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้


// 1) เพิ่ม Object ใหม่เข้าไปใน myTodo ซึ่งมี id เป็น 5 และมี todo เป็น "Walk the dog" 
myTodo.push({ id: 5, todo: "Walk the dog" });
// console.log(myTodo);

// 2) แก้ไขชื่อ Object ที่มี id เป็น 4 เพื่อให้ todo ของ Object นั้นมีค่าเป็น "Go to the gym"
myTodo[3].todo = "Go to the gym"
// console.log(myTodo[3].todo);

// 3) ลบ Object สุดท้ายใน Array ออก
myTodo.pop(3);
// console.log(myTodo);

// 4) นำ myTodo มาแสดงบนหน้าจอ Console
// console.log(myTodo[3]);

// 5) ให้นำข้อมูลใน Object สุดท้ายมาแสดงบนหน้าจอ Console
console.log(myTodo[3]);