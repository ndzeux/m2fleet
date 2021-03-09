<script>
    import { fly, fade } from 'svelte/transition'
	import { link } from "svelte-routing"

    let showdelete, showoverlay
    function setTime(int){
        let time = new Date(int * 1000)
        return `${("0" + time.getDate()).slice(-2)}-${("0" + time.getMonth() + 1).slice(-2)}-${time.getFullYear()} ${("0" + time.getHours()).slice(-2)}:${("0" + time.getMinutes()).slice(-2)}`
    }

    async function getdata(endpoint){
        const res = await fetch(`/all-posts${(endpoint ? '/'+endpoint:'')}`, { method: "POST" })
        const data = await res.json()
        return data
    }
    let filedata = getdata()

    let pl
    function showDelete(z){
        showdelete = !showdelete
        showoverlay = !showoverlay
        pl = z
    }

    function closeall(){
        showdelete = (showdelete ? !showdelete:showdelete)
        showoverlay = false 
    }

    let t
    function exedel(e){
        t = e.target
        t.innerHTML = "deleting..."
        let data = {
            link: pl
        }
        fetch('/delete-post', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(r => r.json()).then(res => {
            t.innerHTML = "Yes"
            if(res.status == "failed"){
                alert(res.message)
                return false
            }
            closeall()
            filedata = getdata()
        })
    }

    let query = ""
    let searchPost = async (e) => {
        e.target.querySelector("button").innerText = "Loading..."
        filedata = await getdata(`${query == "" ? "9":query}`)
        e.target.querySelector("button").innerText = "Search"
    }
</script>

<svelte:head>
    <title>Dashboard - Manage Posts</title>
</svelte:head>

<div class="header row middle-xs between-xs">
    <h1>Blog Post</h1>
    <a href="/dashboard/create-post" use:link>
        <button class="row middle-xs">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
            </svg>
            Create Post
        </button>
    </a>
</div>
{#if showdelete}
<div class="pop" in:fly={{ y: 100 }} out:fly={{ y: 100 }}>
    <p style="margin:0 0 12px 0">Delete this post ?</p>
    <button on:click={e => exedel(e)}>Yes</button><button on:click={closeall}>no</button>
</div>
{/if}
{#if showoverlay}
<div class="overlay" transition:fade on:click={closeall}></div>
{/if}

<div class="search">
    <form on:submit|preventDefault="{e => searchPost(e)}">
        <input type="text" autocomplete="off" bind:value="{query}" placeholder="enter here..." /><button>Search</button>
    </form>
</div>
<div class="posts row">
    {#await filedata}
    <div class="no-files" style="margin-top: calc(50vh - 116px)">
        Loading...
    </div>
    {:then posts}
    {#if posts.data.length == 0}
    <div class="no-files" style="margin-top: calc(50vh - 116px)">
        <svg style="width:54px;height:54px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
        </svg>
        <br>
        No posts, make your first post
    </div>
    {:else}
    {#each posts.data as post}
    <div class="box col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="post">
            <b><a href="/blog/{post.link}" use:link>{post.title}</a>{(post.status == "draft" ? " (Draft)":"")}</b><br>
            <span class="meta">{(post.created_at == post.updated_at ? setTime(post.created_at):setTime(post.updated_at))}</span>
            <button><a href="/dashboard/update-post/{post.link}" use:link>Update</a></button><button on:click={() => showDelete(post.link)}>Delete</button>
        </div>
    </div>
    {/each}
    {/if}
    {:catch err}
    <div class="no-files" style="margin-top: calc(50vh - 116px)">
        {err.message}
    </div>
    {/await}
</div>

<style>
    h1{
        margin: 0;
        font-size: 32px;
        line-height: 40px;
    }
    @media(max-width: 600px){
        h1{
            font-size: 24px;
            line-height: 32px;
        }
    }
    .header button{
        background: #0babeb;
        color: #fff;
        padding: 4px 6px;
        border: 1px solid #0babeb;
        border-radius: 4px;
        cursor: pointer;
        transition: background .3s, color .3s;
    }
    .header button:hover{
        background: #fff;
        color: #0babeb;
    }
    .posts{
        padding: 12px 0;
        position: relative;
        margin: -8px -.5rem 0 -.5rem;
    }
    .search{
        text-align: right;
    }
    @media(max-width: 400px){
        .search{
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
    .no-files, .pop{
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .pop{
        width: calc(100% - 64px);
        max-width: 300px;
        position: fixed;
        z-index: 99;
        background: #fff;
        padding: 16px;
        border: 1px solid #ddd;
    }
    .pop button{
        padding: 8px;
        min-width: 60px;
        color: #fff;
        background: #0babeb;
        border: 1px solid #0babeb;
        cursor: pointer;
        transition: background .3s, color .3s;
    }
    .pop button:hover{
        background: #fff;
        color: #0babeb;
    }
    .pop button+button{
        background: #fff;
        border: 0;
        color: #444;
        margin-left: 6px;
    }
    .overlay{
        position: fixed;
        top: 0;right: 0;bottom: 0;left: 0;
        background: rgba(0,0,0,.4);
        z-index: 9;
    }
    .posts > .box{
        padding: 8px
    }
    .post{
        position: relative;
        padding: 8px 8px 48px 8px;
        border: 1px solid #ddd;
        color: #777;
        height: calc(100% - 56px);
    }
    .post a{
        overflow-wrap: break-word;
    }
    .post button{
        background: #f39c12;
        color: #fff;
        padding: 0;
        border: 1px solid #f39c12;
        border-radius: 4px;
        position: absolute;
        cursor: pointer;
        right: 80px;bottom: 8px;
        transition: background .3s, color .3s;
    }
    .post button a{
        display: block;
        color: inherit;
        padding: 8px;
    }
    .post button:hover{
        background: #fff;color: #f39c12;
    }
    .post button+button{
        padding: 8px;
        background: #e74c3c;
        border: 1px solid #e74c3c;
        right: 8px;
    }
    .post button+button:hover{
        background: #fff;color: #e74c3c;
    }
</style>