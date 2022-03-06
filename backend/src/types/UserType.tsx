import {Firestore, Timestamp} from 'firebase/firestore'

export type UserType = {
    firstName: string
    lastName: string
    created: Timestamp
    updated: Timestamp
}