// let a = Number(prompt("Yoshingizni kiriting"))

// if (a > 12){
//     console.log(`sizni yoshingiz menikidan katta ${a} > 12`);
// }

// else{
//     console.log(`sizni yoshingiz menikidan kichig ${a} < 12`);
// }


// alert("Bizni Dokonimizga hush kelibsiz: Bizni dokonimizda olma, gilos shaftoli, banan olsa boladi")

// let a = Number(prompt("Nechi kilo olma olasiz? kilosi = 15000"));
// let aa = a * 15000
// let b = Number(prompt("Nechi kilo banan  olasiz? kilosi = 32000"));
// let bb = a * 15000
// let c = Number(prompt("Nechi kilo shaftoli bormi shaftoli  olasiz? kilosi = 7700"));
// let cc = a * 15000
// let d = Number(prompt("Nechi kilo gilos olasiz? kilosi = 35000"));
// let dd = a * 15000
// let s = aa + bb + cc + dd;

// alert(` Sizdan ${s} So'm`)

// let malumot = {
//     yosh:12,
//     addres:'humo 43dom 15kvartira',
//     maishiyTexnika:'noutbuk',
//     func: function(mynum, numinmyparents){
//          console.log(`My Phone ${mynum} and Phone number my parents ${numinmyparents}`);
//     }
// }

// malumot.func(+998958373478, +998953463747);

// console.log(malumot());

let ishchi = {
    ism:"Bola",
    familiya:"Bolaev",
    fullName: function(){
        return this.ism + " " + this.sharfi + " " + this.familiya
    }
}

ishchi.sharfi = 'Bolanev'

console.log(ishchi.fullName());
delet = 'Bolanev'
