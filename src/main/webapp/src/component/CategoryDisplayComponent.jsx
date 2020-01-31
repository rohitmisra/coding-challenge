import React, { Component } from 'react';

class CategoryDisplayComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            catalog: [],
            message: null
        }
        this.refreshCatalog = this.refreshCatalog.bind(this)
    }

    componentDidMount() {
        this.refreshCatalog();
    }

    refreshCatalog() {
        fetch("http://localhost:8080/api/v1/category/productTree")
            .then(response => response.json())
            .then(data => {
                this.setState({ catalog: data });
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div className="container">
                <h3>All Products</h3>
                <div className="container">
                    {
                        this.state.catalog.map(
                            category =>
                                <div class="card" key={category.id}>
                                    <div class="card-body">
                                        <h5 class="card-title">{category.name}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">{category.description}</h6>
                                        <p class="card-text">
                                            {
                                                category.products.map(
                                                    product => {
                                                        return (
                                                            <div class="card" key={product.id}>
                                                                <div class="card-body">
                                                                    <h5 class="card-title">{product.name}</h5>
                                                                    <h6 class="card-subtitle mb-2 text-muted">{product.description}</h6>
                                                                    <p class="card-text">{product.price}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )
                                            }

                                        </p>
                                    </div>
                                </div>)

                    }

                </div>
            </div>
        );
    }
}

export default CategoryDisplayComponent;
