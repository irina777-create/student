//Студент має ім'я, прізвище, рік народження — це властивості.
// Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
//Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів.Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
// Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
// Масив – це властивість, present та absent –методи.
//Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів.
// Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо
// метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
// Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
// Масив – це властивість, present та absent – методи.
//
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
//
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.
class student{
    constructor(name,firstName,year,graids){
        this.name=name;
        this.firstName=firstName;
        this.year=year;
        this.graids=graids;
        this.attamens=[];
        this.attamens.length=25;
        this. attamensDayCount=0;
    }
present(){
    if (this.attamensDayCount ‹ this.attamens.length) {
        this.attamens.splice(this.attamensDayCount, 1 , true);
        this.attamensDayCount ++;
    }else {
        console.log(`Відвідування занять повне`)
}
absent()  {
        if (this.attamensDayCount ‹ this.attamens.length) {
            this.attamens.splice(this.attamensDayCount, 1 , false);
            this.attamensDayCount ++;
        }else {
            console.log(`Відвідування занять повне`)
}

getAverageGraids(){
    function average(graids) {
        return graids.reduce((a, b) => (a + b)) / attamens.length;

}
getAverageAttamens(){
        function (attamens) {
         return   attamens.indexOf(a,b)/2 ;
        }
        }




summary(){
      this.attamensDayCount() ;
      if(this.AverageGraids>90 && AverageAttamens>0.9 ){
      consol.log(`Молодець`)
      }else if(this.AverageGraids>90 || AverageAttamens>0.9 ) {
          consol.log(`Добре, але можна краще`)
      }else{
          console.log(`Редиска!`)
          }
    }







