import {gql} from '@apollo/client'

export const GET_USER_PIC = gql`
    query UserPic{
        userPicture
    }
`

export interface UserPic {
    userPicture: string;
}