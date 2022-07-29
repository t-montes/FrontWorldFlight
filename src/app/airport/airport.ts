import { Country } from 'src/app/enums/country.enum';

export class Airport {
  code: string;
  name: string;
  country: Country;
  city: string;
  address: string;

  constructor(
    code: string,
    name: string,
    country: Country,
    city: string,
    address: string
    ) {
    this.code = code;
    this.name = name;
    this.country = country;
    this.city = city;
    this.address = address;
  }
}
