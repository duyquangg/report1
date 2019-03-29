function myProfile(){
     var name = "Quang";
     var year = 1998;
     console.log("Tôi là " + name + " , tôi sinh năm " + year);
 }
myProfile(); 

//Hàm không có tham số là hàm mà kết quả thực thi của nó luôn luôn không thay đổi.
function myProfile(){
    var name = "Quang";
    var year = 1998;
    console.log("Tôi là " + name + " , tôi sinh năm " + year);
}
myProfile(); 
console.log("---------------------------------");
myProfile(); 
console.log("---------------------------------");
myProfile(); 
console.log("---------------------------------");



/* Hàm có tham số là loại hàm mà khi gọi hàm ta phải truyền giá trị vào cho nó.
Tùy vào giá trị được truyền mà hàm sẽ thực thi và cho ra kết quả khác nhau. */
function myProfile(x,y){
    var name = x;
    var year = y;
    console.log("Tôi là " + name + " , tôi sinh năm " + year);
}
myProfile("Nguyễn Huy Hoàng", 1998); //Tôi là Trình Giảo Kim sinh năm 1993
myProfile("Nguyễn Duy Quang", 1999); //Tôi là La Thành sinh năm 1989
myProfile("Nguyễn Quang Duy", 2000); //Tôi là Tần Thúc Bảo sinh năm 1985
