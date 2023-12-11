//Quản lý Thư viện sách

const libary=[
    {
        name : "Đắc nhân tâm",
        author : "Dale Carnegie",
        number : 100,
        location : 6,
    },{
        name : "Conan",
        author : "Aoyama Gōshō",
        number : 200,
        location : 10,
    },{
        name : "Tý Quậy",
        author : "Đào Hải",
        number : 300,
        location : 20,
    },{
        name : "naruto",
        author : "Kishimoto Masashi",
        number : 150,
        location : 50,
    },{
        name : "shin",
        author : "Usui Yoshito",
        number : 200,
        location : 60,
    },{
        name : "boruto",
        author : "Kishimoto Masashi",
        number : 50,
        location : 12,
    },{
        name : "7 viên ngọc rồng",
        author : "Hoàng Nghị Du",
        number : 15,
        location : 30,
    },{
        name : "Doraenmon",
        author : "Fujiko F. Fujio",
        number : 100,
        location : 4,
    }
]
    // function add(name,author,number,location){
    //     let newbook = {
    //         name : name,
    //         author : author,
    //         number : number,
    //         location : location,
    //     }
    //     libary.push(newbook)
    //     return libary
    // }
    // console.log(add("Truyện tiếu lâm","Đạt",40,6))

    // const remove = libary.filter((element) => element.location != 4)
    // console.log(remove)

    // function uplocation(name,author,number,location){
    //             const upbook = libary.find(libary => libary.name === name)
    //             if (upbook){
    //                 upbook.name=name
    //                 upbook.author=author
    //                 upbook.number=number
    //                 upbook.location=location
    //             }
    //             else{
    //                 console.log("Sách không tồn tại")
    //             }
    //             return libary
    //         }
    //         console.log(uplocation("Doraenmon","Fujiko F. Fujio",100,5))


//Quản lý Tài khoản Ngân hàng

        // const atm = [
        //     {
        //         number : 0963344569,
        //         name : "Đạt",
        //         surplus : 100,
        //         history : 2020,
        //     },{
        //         number : 0938273872,
        //         name : "Mạnh",
        //         surplus : 400,
        //         history : 2013,
        //     },{
        //         number : 0598225160,
        //         name : "Tuấn",
        //         surplus : 120,
        //         history : 2015,
        //     },{
        //         number : 06922591655,
        //         name : "Dũng",
        //         surplus : 150,
        //         history : 2023,
        //     }
        // ]

//Quản lý Khách hàng

// const people = [
//     {
//         name : "Dũng",
//         email : "abc@gmail.com",
//         number : 0859654852,
//         address : "Cầu giấy",
//     },{
//         name : "Đạt",
//         email : "xyz@gmail.com",
//         number : 0236548950,
//         address : "Long biên",
//     },{
//         name : "Tuấn",
//         email : "cvb@gmail.com",
//         number : 0569520325,
//         address : "Phúc Thọ",
//     },{
//         name : "Mạnh",
//         email : "kin@gmail.com",
//         number : 0265489536,
//         address : "Đông Anh",
//     }
// ]

// function add(name, email,number,adress) {
//         let newperson = {
//             name: name,
//             email: email,
//             number: number,
//             adress: adress,
//         };
//         people.push(newperson);
//         return people
//     }
//     console.log(add("Dung","hyn@gmail.com",0569654521,"HBT"));
    
//     const rmps = people.filter((element) => element.number !== "0265489536")
//     console.log(rmps)
    
//     function fix(name,email,number,adress){
//             const fixperson=people.find(people => people.name === name)
//             if (fixperson){
//                 fixperson.name=name
//                 fixperson.email=email
//                 fixperson.number=number
//                 fixperson.adress=adress
//             }
//             else{
//                 console.log("không tồn tại")
//             }
//             return people
//         }
//         console.log(fix("Dũng","abc@gmail.com",0859654852,"Thanh Xuân"))
    
    // const searchperson = people.filter((element) => element.address === "Đông Anh")
    // console.log(searchperson)

// Quản lý Hội viên phòng tập gym

const gymer = [
    {
        name : "Đạt",
        Age : 20,
        episodepackage : 1000,
        Date : 20/10/2021,
    },{
        name : "Dũng",
        Age : 15,
        episodepackage : 2000,
        Date : 1/2/2025,
    },{
        name : "Tuấn",
        Age : 18,
        episodepackage : 900,
        Date : 20/5/2026,
    },{
        name : "Mạnh",
        age : 16,
        episodepackage : 5000,
        date : 25/12/2024,
    }
    ]
    // function add(name, age,episodepackage,date) {
    //             let newperson = {
    //                 name: name,
    //                 age: age,
    //                 episodepackage: episodepackage,
    //                 date: date,
    //             };
    //             gymer.push(newperson);
    //             return gymer
    //         }
    //         console.log(add("Dung",20,4000,26/4/2021));
            
    //         const rmps = gymer.filter((element) => element.episodepackage !== 5000)
    //         console.log(rmps)
            
            // function fix(name,age,episodepackage,date){
            //         const fixperson=gymer.find(gymer => gymer.name === name)
            //         if (fixperson){
            //             fixperson.name=name
            //             fixperson.age=age
            //             fixperson.episodepackage=episodepackage
            //             fixperson.date=date
            //         }
            //         else{
            //             console.log("không tồn tại")
            //         }
            //         return people
            //     }
            //     console.log(fix("Dũng",15,9000,1/2/2025))
            
           function sumrevenue(){
            let sum = 0
            gymer.forEach((element) => {
                sum += element.episodepackage
            })
            return sum
           }
           console.log(sumrevenue(gymer))
        

