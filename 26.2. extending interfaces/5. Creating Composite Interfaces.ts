interface Product {
    name: string;
    price: number;
 }
 
 interface DiscountedProduct extends Product {
    discount: number;
 }
 
 interface ProductWithReviews extends Product {
    reviews: string[];
 }
 
 interface FeaturedProduct extends DiscountedProduct, ProductWithReviews {
    featured: boolean;
 }
 
 const product: FeaturedProduct = {
    name: "Smartphone",
    price: 599,
    discount: 50,
    reviews: ["Great product!", "Highly recommended."],
    featured: true
 };
 
 console.log(product.featured); 
 console.log(product.reviews);