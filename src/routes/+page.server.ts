export const prerender = true;
export const ssr = false;

export async function load({fetch}) {

    console.log("loading on server");
    
    const headers = {'Authorization': 'Bearer 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'}
    const response = await fetch('https://api.github.com/user/repos', {
        headers
    });
    
    if(response.status == 401) {
        repoAndLanguages: false;
    }
    
    const data: any[] = await response.json();
    const repoMap = data.map(val => ( {name: val.name, langURL: val.languages_url} ))
    const repoLangMapPromise =repoMap.map(repo => fetch(repo.langURL, {headers}))
    const responses = await Promise.all(repoLangMapPromise)
    const resJsonsPromise = responses.map(res => res.json());

    return {
        repoAndLanguages: Promise.all(resJsonsPromise)
    }
}