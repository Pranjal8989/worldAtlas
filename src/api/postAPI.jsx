import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const GetCountrydata = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// get country by name
export const GetCountrydataByid = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
