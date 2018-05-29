function Person() {
    this.age = 0;

    // setInterval(() => {
    //     this.age++
    //     console.log('this.age: ', this.age)
    // }, 1000);

    setInterval(function() {
        this.age++
        console.log('this.age: ', this.age)
    }, 1000);
}

const p = new Person()