// This file was @generated using pocketbase-typegen

export type IsoDateString = string

export type RecordIdString = string

export type UserIdString = string

export type BaseRecord = {
    id: RecordIdString
    created: IsoDateString
    updated: IsoDateString
    "@collectionId": string
    "@collectionName": string
}

export enum Collections {
	Prices = "prices",
	Profiles = "profiles",
	Tags = "tags",
}

export type PricesRecord = {
	price: number
	name: string
	description?: string
	tag: RecordIdString
}

export type ProfilesRecord = {
	userId: UserIdString
	name?: string
	avatar?: string
}

export type TagsRecord = {
	name: string
}

export type CollectionRecords = {
	prices: PricesRecord
	profiles: ProfilesRecord
	tags: TagsRecord
}