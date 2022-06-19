import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Content } from "../../typings"
import { groq } from "next-sanity";

const contentQuery = groq`
*[_type == "content"][0]{
  _id,
  ...
}
`

type Data = {
    content:Content[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const content:Content[] = await sanityClient.fetch(contentQuery)
    
    res.status(200).json({ content })
  }