// 백엔드에서 넘어온 상품 타입 정의
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]>{

}

// 중복 코드가 발생 됨
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
//     brand: string;
//     stock: number;
// }

// 상품 정보를 화면에 그릴때 3가지 값만 가져와야할때가 있는데 그러면 Product를 사용할 수 없음
// function displayProductDetail(shoppingItem: ProductDetail) {

// }

//interface는 일부만 뽑아올수 있음 Pick 으로 변환 : 제네릭 타입(유틸리티 타입)
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>){

}

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

//불필요한 코드를 줄일 수 있음