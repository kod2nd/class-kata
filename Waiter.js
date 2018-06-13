class Waiter {
    constructor(name){
        this.name = name
        this.orders = []
    };

    welcomeGuests() {
        return 'Welcome! what can i do for you today?'
    };
    

    takeOrder(orders) {
        this.orders = orders;
        return this
    }

    repeatOrder(item){
        const orderStr = this.orders.map(item => {return " " + item})
        console.log("You have ordered" + orderStr)
    }
}

const bob = new Waiter('Bob');
console.log(bob);
bob.takeOrder(['Soup', 'Fish', "Pizza"]);
console.log(bob);
bob.repeatOrder();