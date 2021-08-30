import React,{Component} from 'react'
import Menu from './MenuComponent';
import Dish from './DishdetailComponent'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import {DISHES} from "../shared/dishes";

class Main extends Component {
    constructor(props){
        super(props);
        this.state= {
            dishes:DISHES,
            selectedDish:null
        };

    }

    onDishSelect(dishId) {
        this.setState({selectedDish:dishId});
    }
    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} />
                onClick={(dishId) => this.onDishSelect(dishId)}
                <Dish dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        // <Navbar dark color="primary">
        //     <div className="container">
        //         <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        //     </div>
        // </Navbar>
        );
    }

}


export default Main;
