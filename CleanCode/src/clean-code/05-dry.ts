class Product{
    constructor(
        public name: string
    ){}
}

(() => {
    const prod = new Product("Mi producto")
    console.log(prod)
})()
