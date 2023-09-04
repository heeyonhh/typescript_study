## 유틸리티 타입 : 이미 정의해 놓은 타입을 변환할때 사용하기 좋은 타입 문

- Pick : 특정 타입 선택

      // 백엔드에서 넘어온 상품 타입 정의
      interface Product {
          id: number;
          name: string;
          price: number;
          brand: string;
          stock: number;
      }
      
      // 상품 목록을 받아오기 위한 API 함수
      function fetchProducts(): Promise<Product[]>{}
      
      // 중복 코드가 발생 됨
      // interface ProductDetail {
      //     id: number;
      //     name: string;
      //     price: number;
      //     brand: string;
      //     stock: number;
      // }
      
      // 상품 정보를 화면에 그릴때 3가지 값만 가져와야할때가 있는데 그러면 Product를 사용할 수 없음
      // function displayProductDetail(shoppingItem: ProductDetail) {}
      
      //interface는 일부만 뽑아올수 있음 Pick 으로 변환 : 제네릭 타입(유틸리티 타입)

      function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>){}
      
      type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

- Omit : 오밋 타입은 특정 타입에서 지정된 속성만 제거 (pick과 반대)

      interface AddressBook {
      name: string;
      phone: number;
      address: string;
      company: string;
      }
      const phoneBook: Omit<AddressBook, 'address'> = {
      name: '재택근무',
      phone: 12342223333,
      company: '내 방'
      }
      const chingtao: Omit<AddressBook, 'address'|'company'> = {
      name: '중국집',
      phone: 44455557777
      }

- Partial : 전부다 선택적으로 적용하기 (옵셔널과 비슷)

      interface Address {
        email: string;
        address: string;
      }
      
      type MayHaveEmail = Partial<Address>;
      const me: MayHaveEmail = {}; // 가능
      const you: MayHaveEmail = { email: 'test@abc.com' }; // 가능
      const all: MayHaveEmail = { email: 'capt@hero.com', address: 'Pangyo' }; // 가능
