type FLIGHT_STATE = | {
  success: boolean;
  flights: FLIGHT[]
}

type FLIGHT = | {
  citySource: CITY;
  cityDestiny: CITY;
  dateSource: Date;
  dateDestiny: Date;
  price: number;
  availability: number;
}

type FLIGHT_FORM = {
  citySource: string;
  cityDestiny: string;
  date: string;
  people: number;
};
