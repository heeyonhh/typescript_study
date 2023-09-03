interface AddressBook {
    name: string;
    phone: number;
    address: string;
    company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
    name: '재택근무',
    phone: 123123123,
    company: '내방'
}

const chingtao: Omit<AddressBook, 'address' | 'company'> = {
    name: '중국집',
    phone: 123123123,
}