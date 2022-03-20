//you can safely keep all your interfaces and import them in their required components

//tsx with object state

export interface Address {
  street: string;
  number: string;
  zip: number;
}

export interface User {
  name: string;
  age: number;
  country: string;
  //notice that an interface can contain another interface just like the Address, therefore, do not nest objects in your interfaces
  address: Address;
  admin: boolean;
}
