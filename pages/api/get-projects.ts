import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings"
import { groq } from "next-sanity";

const projectQuery = groq`
*[_type == "project"]{
    _id,
    ...
  }
`

type Data = {
    projects:Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const projects:Project[] = await sanityClient.fetch(projectQuery)
    
    res.status(200).json({ projects })
  }