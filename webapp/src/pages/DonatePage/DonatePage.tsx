import { useEffect, useState } from "react";
import { Product } from "../../core/models/product";
import { fetchProducts } from "../../core/services";

export const DonatePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then((products) => setProducts(products));
    }, []);

    return <>
        {
            products.map((product: Product) => <div>{product.title}</div>)
        }
    </>;
};
