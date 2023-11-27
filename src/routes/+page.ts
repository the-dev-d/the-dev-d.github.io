import { PUBLIC_API } from '$env/static/public';

 export const load = async ({fetch, data}) => {
     const base = PUBLIC_API;
     const res = await fetch(base+'/os/');

     return {
        ...data,
         menu: res.json()
     }
 }
