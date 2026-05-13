using products.management as product from '../db/product';

service ProductService{

    entity products as projection on product.Products;

}