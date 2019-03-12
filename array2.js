function dataHandling2(){
var a = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

a.splice(1,2, 'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung');
a.splice(4,2,'Pria', 'SMA Internasional Metro');
//console.log(a);

var lahir = '';
lahir = a[3].split('/');

var join = lahir.join ('-');
//console.log(join);

var b = lahir.sort(function(a, b){return b-a});
//console.log(b);

var kata = a[1].slice(0,15);
//console.log(kata);



switch(lahir[2]){
case '01':
lahir[2] = 'januari';
 break;
 case '02':
lahir[2] = 'Februari';
 break;
 case '03':
lahir[2] = 'Maret';
 break;
 case '04':
lahir[2] = 'April';
 break;
 case '05':
lahir[2] = 'May';
 break;
 case '06':
lahir[2] = 'juni';
 break;
 case '07':
lahir[2] = 'juli';
 break;
 case '08':
lahir[2] = 'agustus';
 break;
 case '09':
lahir[2] = 'september';
 break;
 case '10':
lahir[2] = 'oktober';
 break;
 case '11':
lahir[2] = 'november';
 break;
 case '12':
lahir[2] = 'desember';
 break;

}

console.log(a);
console.log(lahir[2]);
console.log(b);
console.log(join);
console.log(kata);
}
dataHandling2();