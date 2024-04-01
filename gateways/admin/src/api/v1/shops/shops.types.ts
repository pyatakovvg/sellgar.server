export interface ICompany {
  uuid: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IShop {
  uuid: string;
  name: string;
  company: ICompany;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
