//1. Viết chương trình nhận hai số làm đầu vào và hiển thị tổng của chúng.
// function number(a,b){
//     let sum = a + b
//     return sum
// }
// console.log(number(2,5))

//2. Viết chương trình nhận một chuỗi làm đầu vào và hiển thị độ dài của chuỗi.

// function chain(string){
// return string.length
// }
// console.log(chain("Dat"))

// 3. Viết chương trình nhận một số làm đầu vào và hiển thị bình phương của số đó.

// function number (n){
//     return n*n
// }
// console.log(number(7))
// 4. Viết chương trình nhận một danh sách các số làm đầu vào và hiển thị số lớn nhất trong danh sách.
// const arrnumber = [1,2,4,,5,6,8,56,99]
//     let max = -Infinity
//     let arr = ""
//     for(let i = 0;i<arrnumber.length;i++){
//         if(arrnumber[i]>max){
//             max = arrnumber[i]
//             arr = max
//         }
//     }
// console.log(arr)
// 5. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và hiển thị chuỗi ngắn nhất trong danh sách.

// const chain = (string) => {
//     let chainmin = Infinity
//     let space = []
//     for(let i = 0 ; i < string.length ; i++){
//         if(chainmin>string[i].length){
//             chainmin = string[i].length
//             space=string[i]
//         } 
//     }
//     return space
// }
// console.log(chain(["Dung","Dat","Manh","Tuan"]))

// 6. Viết chương trình nhận một danh sách các số làm đầu vào và sắp xếp danh sách theo thứ tự tăng dần.

// const chain = (string) => {
//     let temp = 0
//     for (let i = 0; i < string.length; i++) {
//         for (let j = i+1; j < string.length; j++) {
//             if (string[i] > string[j]){
//                  temp = string[i]
//                 string[i] = string[j]
//                 string[j] = temp
//             }  
//         }
//     }
//     return string
// }
// console.log(chain([14, 5, 7, 6, 3]))


//7. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và sắp xếp danh sách theo thứ tự alphabet

    // const persons = ["Minh", "Đạt","Dũng","Tuấn","Trường","Mạnh", "Anh","Thảo",]
    // persons.sort((a,b)=>a.localeCompare(b))
    // console.log("persons",persons)

//10. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và trả về số chuỗi chứa chữ 'a'.

    // const kt2 = (s) => {
    //     for (let i = 0; i < s.length; i++) {
    //         if (s[i] === "a") {
    //             return true;
    //         }
    //     }
    //     return false;
    // };
    
    // const kt = (arr) => {
    //     let dem = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (kt2(arr[i]) === true) {
    //             dem++;
    //         }
    //     }
    //     return dem;
    // };
    // console.log(kt(["Dung", "Dat", "Manh"]))


//1. Viết chương trình nhận một danh sách các số làm đầu vào và trả về số lớn thứ hai trong danh sách.VD: [70, 11, 20, 4, 100] 👉 70

// function timSoLonThuHai(danhSachSo) {
//     danhSachSo.sort(function(a, b) {
//         return b - a
//     })
//     const soLonThuHai = danhSachSo[1];
//     return soLonThuHai;
// }

// console.log(timSoLonThuHai([70, 11, 20, 4, 100]));

// //5 Viết chương trình nhận một danh sách các số nguyên làm đầu vào và trả về tổng con tăng liên tiếp lớn nhất trong danh sách.

// function tongConTangLienTiepLonNhat(danhSachSo) {
//     let tongHienTai = 0;
//     let tongLonNhat = 0;

//     for (let i = 0; i < danhSachSo.length; i++) {
//         // Nếu số hiện tại và tổng hiện tại là dương, tiếp tục thêm vào tổng
//         if (danhSachSo[i] > 0 && tongHienTai + danhSachSo[i] > 0) {
//             tongHienTai += danhSachSo[i];
//         } else {
//             // Nếu không, đặt tổng hiện tại bằng số hiện tại
//             tongHienTai = danhSachSo[i];
//         }

//         // Cập nhật tổng lớn nhất
//         if (tongHienTai > tongLonNhat) {
//             tongLonNhat = tongHienTai;
//         }
//     }

//     return tongLonNhat;
// }

// // Nhập danh sách số từ người dùng
// let danhSachSo = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy: ").split(',').map(Number);

// // Tìm tổng con tăng liên tiếp lớn nhất và in ra kết quả
// let ketQua = tongConTangLienTiepLonNhat(danhSachSo);
// console.log("Tổng con tăng liên tiếp lớn nhất là:", ketQua);

//4. Viết chương trình nhận một danh sách các số làm đầu vào và trả về tổng của các số chia hết cho cả 3 và 5.

// const arrNumber = [12,5,7,8,9,45,65,7,8]
//     const reArrNumber = (arr) => {
//             const newArr = arr.filter(element => element % 3 === 0 || element % 5 === 0)
//             return newArr
//     }
//     const tinh = (arr) => {
//         let sum = 0
//         reArrNumber(arr).forEach((element) => {
//                   sum += element     
//         })
//         return sum
//     }
//     console.log(tinh(arrNumber))


//ARRY-OBJECT
//reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascript ( dùng forEach hoặc reduce )
//     const arr=[9,7,8,6,5]
//     function chain(arrNumber) {
//     const arrnewNumber = []
//     arr.forEach(element => {
//         arrnewNumber.unshift(element)
//     });
//     return arrnewNumber
// }

// console.log("Mảng sau khi đảo ngược:",chain(arr))
/// 1.3 uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng. 
  
// const xoabo = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// };
// console.log(xoabo([5,7,6,8,9,7,3,6]));

//TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng. 
const string = (arrstring) => {
    const loai = arrstring.trim().replace(/\s+/g, " ");
    return loai;
};
console.log(string("   cafe chồn  "));