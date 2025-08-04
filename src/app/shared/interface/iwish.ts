// أضف واجهة جديدة لتمثيل المنتج الذي يأتي مباشرة من API
export interface Product {
    sold: number;
    images: string[];
    subcategory: Subcategory[];
    ratingsQuantity: number;
    _id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    imageCover: string;
    category: Category;
    brand: Category; // قد يكون نوع Brand مختلف، ولكن بناءً على الكود الذي قدمته، يبدو أنه Category
    ratingsAverage: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
    priceAfterDiscount?: number; // أضف هذه الخاصية لأنها موجودة في أحد المنتجات
}

// الواجهات الأخرى تبقى كما هي
export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
}
