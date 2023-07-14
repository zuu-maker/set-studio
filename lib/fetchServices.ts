import { Service } from "../typings";

export const fetchServices = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/get-services`
  );
  console.log(res);
  const data = await res.json();
  const service: Service[] = data.service;

  return service;
};
