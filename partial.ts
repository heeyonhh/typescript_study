// 백엔드에서 넘어온 상품 타입 정의
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]>{

// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>){

}

// 옵셔널 Partial 동일 효과
// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>){}

// Partial : 전부다 선택적으로 적용하기

// 4. 유틸리티 타입 구현 Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotourl: string;
}

// 옵셔널
// interface UserProfileUpdate{
//     username?: string;
//     email?: string;
//     profilePhotourl?: string;
// }

// #1 이미 정의되어있는 타입 이용해서 타입 별칭으로 최대한 활용
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotourl?: UserProfile['profilePhotourl']; 
// }

// #2 반복문 in 오퍼레이터로 축약 : 맵드 타입 (파셜이랑 비슷) ( 2번 줄이기 )
// type UserProfileUpdate = {
//  [p in 'username' | 'email' | 'profilePhotourl']?: UserProfile[p]
// }

// type UserProfileKeys = keyof UserProfile

// #3 파셜과 가깝지만 UserProfile로 넘겨받은것
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4
type Subset<T> = {
    [p in keyof T]?: T[p]
}