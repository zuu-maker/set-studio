import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Service } from "../../typings";
import { groq } from "next-sanity";

const contentQuery = groq`
*[_type == "service"][0..2]{
    _id,
    ...
  } | order(_createdAt asc)
`;

type Data = {
  service: Service[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const service: Service[] = await sanityClient.fetch(contentQuery);

  res.status(200).json({ service });
}
