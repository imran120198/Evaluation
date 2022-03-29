async function apiCall(url) {


    //add api call logic here
    try{
        let res = await fetch(url);

        let data = await res.json();
        console.log('data:', data)
        return data;

    }
    catch(error){
        console.log('error:', error)

    }


}


function appendArticles(articles, main) {

    //add append logic here

    articles.map((items) => {
        let div = document.createElement("div");
        div.id = "blog";

        let title = document.createElement("p")
        title.textContent = items.title;

        let description = document.createElement("p");
        description.textContent = items.description;

        let image = document.createElement("img");
        image.src = items.urlToImage;

        div.onclick = () => {
            localStorage.setItem("article" , JSON.stringify(items));
            window.location.href = "blog.html"
        }

        div.append(title , description , image)
        main.append(div);
        
    });

}

function  storeSearchterm(term){
    localStorage.setItem("search_term", term);
    window.location.href = "search.html"
}

export { apiCall, appendArticles }

export { storeSearchterm }