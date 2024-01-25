import React from "react";

function SearchBar() {
    return (
        <div className="search-bar__container">
            <input type="text" placeholder="search..."/>
            <div className="search-bar__in_stock_checkbox">
                <input type="checkbox"/>
                <label>Only show products in bar__in_stock_checkbox</label>
            </div>
        </div>
    );
}

function ProductCategoryRow({name}) {
    return (
        <tr>
            <td colSpan="2">
                <strong>{name}</strong>
            </td>
        </tr>
    );
}

function ProductRow({name, price}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
}

function ProductTable() {
    return (
        <div className="product-table__container">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <ProductCategoryRow name="Sporting Goods" />
                <ProductRow name="Football" price="1"/>
                <ProductRow name="Basketball" price="2"/>

                <ProductCategoryRow name="Electronics" />
                <ProductRow name="Iphone" price="5" />
            </table>
        </div>
    );
}

function FilterableProductTable() {
    return (
        <div className="container">
            <SearchBar />
            <ProductTable />
        </div>
    );
}

export default ProductTable;