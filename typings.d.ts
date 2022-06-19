export interface Project extends ProjectBody{
    _id:string
    _createdAt:string
    _updatedAt:string
    _rev: string
    _type:'project'
}

export type ProjectBody = {
    title:String
    slug:string
    description:string
    link:string
    thumbNail:string
}

export interface Content extends ContentBody{
    _id:string
    _createdAt:string
    _updatedAt:string
    _rev: string
    _type:'content'
}

export type ContentBody = {
    topTitle:string
    bottomTitle:string
    intro:string
    developmentTitle:string
    developmentDescription:string
}

export interface Service extends ServiceBody{
    _id:string
    _createdAt:string
    _updatedAt:string
    _rev: string
    _type:'service'
}

export type ServiceBody = {
    title:string
    description:string
}