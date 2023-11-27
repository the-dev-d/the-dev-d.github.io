import { GH_AUTH_TOKEN } from '$env/static/private';
export const prerender = true;
export async function load({fetch}) {
    
    let repoAndLanguages;
    try{
        const headers = {'Authorization': `Bearer ${GH_AUTH_TOKEN}`}
        const response = await fetch('https://api.github.com/user/repos', {
            headers
        });
        
        const data: any[] = await response.json();
        
        const repoMap = data.map(val => ( {name: val.name, langURL: val.languages_url} ))
        const repoLangMapPromise =repoMap.map(repo => fetch(repo.langURL, {headers}))
        const responses = await Promise.all(repoLangMapPromise)
        repoAndLanguages = Promise.all(responses.map(res => res.json()));
    }catch(error) {
        repoAndLanguages = null;
    }

    return {
        repoAndLanguages
    }
}