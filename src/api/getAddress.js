import axios from "axios"

export const api = axios.create({
  baseURL: "https://ipgeolocation.abstractapi.com/v1"
});

export const fetchFromIp = async ip => {
  console.log(ip);
  let url = `?api_key=${import.meta.env.VITE_GEO_API_KEY}&ip_address=` + (ip ? ip : '')
  const res = await api.get(url);
  return res.data
}
