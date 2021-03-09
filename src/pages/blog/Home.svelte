<script>
    import { navigate } from 'svelte-routing'
    let postsArea, showLM
    let amount = 9
    async function loadData(endpoint){
        let f = await fetch(endpoint, { method: "POST" });
        let r = await f.json();
        return r
    }
    let allposts = loadData(`/all-posts/${amount}`)
    let heightImg = 0

    async function updatePostList(){
        await allposts.then(r => {
            if(r.data.length == 0){
                if(!postsArea.querySelector(".mid")){
                    postsArea.innerHTML = "<div class='mid'></div>"
                }
                postsArea.querySelector(".mid").innerText = 'No Posts'
                return false
            }
            r.data.forEach((p, i) => {
                let img = new Image();
                img.addEventListener("load", function(){
                    heightImg = (heightImg < this.naturalHeight ? this.naturalHeight:heightImg)
                });
                img.src = p.cover;
                if(i + 1 > amount - 9 || !showLM){
                    if(postsArea.querySelector(".mid")){
                        postsArea.innerHTML = `
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="img row middle-xs center-xs" style="height: ${heightImg}px">
                                <img src="${p.cover}" alt="${p.title}">
                            </div>
                            <a href="/blog/${p.link}" use:link>${p.title}</a>
                        </div>
                        `
                    } else {
                        postsArea.innerHTML += `
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="img row middle-xs center-xs" style="height: ${heightImg}px">
                                <img src="${p.cover}" alt="${p.title}">
                            </div>
                            <a href="/blog/${p.link}" use:link>${p.title}</a>
                        </div>
                        `
                    }
                }
                showLM = true
            })
            if(r.data.length < amount){
                showLM = false
            }
        })
    }
    updatePostList()
    let loadMore = async (e) => {
        e.target.innerText = "Loading..."
        amount += 9
        allposts = loadData(`/all-posts/${amount}`)
        await updatePostList()
        e.target.innerText = "Load More"
    }
    let query = ""
    let searchPost = async (e) => {
        e.target.querySelector("button").innerText = "Loading..."
        postsArea.innerHTML = ""
        allposts = loadData(`/all-posts/${query == "" ? "9":query}`)
        await updatePostList()
        e.target.querySelector("button").innerText = "Search"
    }
    function openPost(e){
        postsArea.querySelectorAll("a").forEach(a => {
            if(a == e.target){
                navigate(a.href)
            }
        })
    }

</script>

<svelte:head>
    <title>Blog</title>
    <style>
        @import "/post.css";
    </style>
</svelte:head>

<div class="blog">
    <div class="search">
        <form on:submit|preventDefault="{e => searchPost(e)}">
            <input type="text" autocomplete="off" bind:value="{query}" placeholder="enter here..." /><button>Search</button>
        </form>
    </div>
    <div class="row center-xs" bind:this="{postsArea}" on:click|preventDefault={e => openPost(e)}>
        <div class="mid">Loading...</div>
    </div>
    {#if showLM}
    <button on:click="{e => loadMore(e)}">Load More</button>
    {/if}
</div>

<style>
    .blog{
        width: calc(100% - 32px);
        max-width: 1280px;
        margin: 0 auto;
        padding-bottom: 64px;
        padding: 16px 16px 32px 16px;
    }
    .blog .search{
        text-align: right;
    }
    @media(max-width: 400px){
        .blog .search{
            text-align: center;
        }
    }
    .search input{
        border: 1px solid #ddd;
        padding: 6px 12px;
    }
    .search button{
        background: #0babeb;
        padding: 6px 16px;
        color: #fff;
        border: 1px solid #0babeb;
        cursor: pointer;
        transition: background .3s, color .3s;
    }
    .search button:hover{
        background: #fff;
        color: #0babeb;
    }
    .mid{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .blog > button{
        display: block;
        width: 150px;
        margin: 32px auto 16px auto;
        background: #fff;
        border: 1px solid #ddd;
        padding: 16px 0;
        border-radius: 32px;
        cursor: pointer;
    }
</style>