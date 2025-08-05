import {Home, Flowing, Profile} from '~/Pages'
import { DefaultLayout, HeaderOnly } from '~/Component/layout'

const publicRoute = [
    {path:'/', component: Home, layout: DefaultLayout},
    {path:'/flow', component: Flowing, layout: null},
    {path:'/profile', component: Profile, layout: HeaderOnly}
]

const privateRoute = [
    
]

export {
    publicRoute, 
    privateRoute
}