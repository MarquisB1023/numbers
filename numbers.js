class number {
    constructor(data){
        this.data = data;
    }
    numberCount(){
        return this.data.split('')
    }
    hasNumber(interval){

       return this.data.indexOf(interval) !== -1;
    }
    intervalCount(interval){
        let count = 0;
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i] === interval){
                count ++;
            }
        }
        return count;
    }
    stats(){
        const obj ={};
        const numbers = this.split('');
        numbers.forEach(numbers => {
            if(obj [numbers] ==undefined){
                obj[numbers]= 0;
            }
            object[numbers]++;
        })
      return obj;

    }
}



const data = window.prompt('Enter random numbers','1,34,56,7,3')
const s1 = new number(data)
console.log(s1.numberCount());
console.log(s1.hasNumber('x'));
console.log(s1.hasNumber('q'));
console.log(s1.intervalCount('x'));
console.log(s1.intervalCount('q'));