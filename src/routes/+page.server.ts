export const prerender = true;

export async function load({fetch}) {

    console.log("loading");
    
    const headers = {'Authorization': 'Bearer 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'}
    const response = await fetch('https://api.github.com/user/repos', {
        headers
    });
    const data: any[] = await response.json();
    const repoMap = data.map(val => ( {name: val.name, langURL: val.languages_url} ))
    const repoLangMapPromise =repoMap.map(repo => fetch(repo.langURL, {headers}))
    const responses = await Promise.all(repoLangMapPromise)
    const resJsonsPromise = responses.map(res => res.json());

    return {
        repoAndLanguages: Promise.all(resJsonsPromise)
    }
}