import React, { Component } from 'react';
import ships from './catalogue';
import shipDetails from './details';

const ProductContext = React.createContext();

class ProdProvider extends Component {
    state = {
        shipsArray: [],
        details: shipDetails,
        cart: [], 
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        ships.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(() => {
            return { shipsArray: tempProducts }
        });
    }

    getItem = (id) => {
        const product = this.state.shipsArray.find(item  => item.id === id);
        return product;
    }

    handleDetails = (id) => {
        const productInfo = this.getItem(id);
        this.setState(() => {
            return {details: productInfo}
        })
        console.log(this.state)
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.shipsArray];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        let cost = Number(product.cost_in_credits);
        product.total = cost;
        this.setState(() => {
            return {
                shipsArray: tempProducts,
                cart: [...this.state.cart,product]
            }
        }, () => {
            this.addTotals();
        });
    }

    increase = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.cost_in_credits;
        
        // set values in state
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals();
        })
    }

    decrease = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        let product = tempCart[index];
        
        product.count = product.count - 1;
        product.total = product.count * product.cost_in_credits;
        

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.cost_in_credits;
            // product.total = parseFloat(product.total).toLocaleString();
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals();
            })
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.shipsArray];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item  => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0

        this.setState(() => {
            return {
                cart: [...tempCart],
                shipsArray: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        })

    }

    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
            }
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => ( subTotal += item.total ));
        let tax = subTotal * 0.025;
        let total = subTotal + tax;
        // total = parseFloat(total.toFixed(2));
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider 
                value={{
                        ...this.state,
                        handleDetails: this.handleDetails,
                        addToCart: this.addToCart,
                        increase: this.increase,
                        decrease: this.decrease,
                        removeItem: this.removeItem,
                        clearCart: this.clearCart
                    }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProdConsumer = ProductContext.Consumer;

export { ProdProvider, ProdConsumer };