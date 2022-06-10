
    type Size = ''|'S'|'M'|'L'|'XL'
    class Product {
        
        constructor(
            public name:string ='',
            public price:number = 0,
            public size:Size = ''
        ) {
        }
        
        isProductReady():boolean {
            for (const key in this){
                switch(typeof this[key]) {
                    case 'string':
                        if((<string><unknown>this[key]).length<=0) {
                            throw Error("Product "+key+" is empty");
                        }
                        break;
                    case 'number':
                        if((<number><unknown>this[key])<=0) {
                            throw Error("Product "+key+" is zero");
                        }
                        break;                   
                        default:
                            throw Error("Product "+key+" is not valid");
                    }
            }
            return true;
        }


        toString() {
            // No Dry

            // if(this.name.length<=0) {
            //     throw Error("Product name is empty");
            // }
            // if(this.price<=0) {
            //     throw Error("Product price is zero");
            // }
            // if(this.size.length<=0) {
            //     throw Error("Product size is empty");
            // }

            if(!this.isProductReady()) {
                return;
            }
 

            return `${this.name} (${this.price}) , size: ${this.size}`;
        }
    } 	


    (() => {
        let product = new Product('Camisa',15,'M');
        console.log(product.toString());
    })();
