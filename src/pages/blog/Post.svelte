<script>
    import { link } from 'svelte-routing'
    import Share from '../../components/Share.svelte'

    let postTitle = "M2Fleet - Blog"

    async function loadData(endpoint){
        let f = await fetch(endpoint, { method: "POST" });
        let r = await f.json();
        if(!r.data.length && r.data.length != 0){
            postTitle = "Blog - " + r.data.title
        }
        return r
    }
    let blogpost = loadData(`/post/${location.pathname.split("blog/")[1]}/public`)
    let lastFivePosts = loadData(`/all-posts/5`)

    function setTime(int){
        let time = new Date(int * 1000)
        return `${("0" + time.getDate()).slice(-2)}-${("0" + time.getMonth() + 1).slice(-2)}-${time.getFullYear()} ${("0" + time.getHours()).slice(-2)}:${("0" + time.getMinutes()).slice(-2)}`
    }

    function changePost(){
        blogpost = loadData(`/post/${location.pathname.split("blog/")[1]}/public`)
        lastFivePosts = loadData(`/all-posts/5`)
    }

</script>

<svelte:head>
    <title>{postTitle}</title>
    <style>
        @import "/post.css";
    </style>
</svelte:head>

<div class="post-area row between-xs top-xs">
    <div class="post col-sm col-xs-12">
    {#await blogpost}
        <span style="display:block;text-align:center;width: calc(100% - 32px);position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">Loading...</span>
    {:then post}
        {#if post.data}
        <h1 on:load="{() => postTitle = post.data.title}">{post.data.title}</h1>
        <span style="display: block;margin-bottom: 16px">{(post.data.created_at == post.data.updated_at ? setTime(post.data.created_at):setTime(post.data.updated_at))}</span>
        {@html post.data.body}
        <Share />
        {:else}        
        <span style="display:block;text-align:center;width: calc(100% - 32px);position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">Articles not found</span>
        {/if}
    {:catch}
        <span style="display:block;text-align:center;width: calc(100% - 32px);position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">Articles not found</span>
    {/await}
    </div>
    <div class="recent">
        <h3>Recents Articles</h3>
        <ul>
            {#await lastFivePosts}
            <li>Loading...</li>
            {:then posts}
            {#if posts.data.length > 0}
            {#each posts.data as post}
            <li class="row">
                <img src="{post.cover}" alt="{post.title}" style="width: 72px;height: 72px">
                <div class="col-xs">
                    <a href="/blog/{post.link}" use:link on:click="{changePost}">{post.title}</a><br>
                    {(post.created_at == post.updated_at ? setTime(post.created_at):setTime(post.updated_at))}<br>
                </div>
            </li>
            {/each}
            {:else}
            <li>No Posts</li>
            {/if}
            {:catch}
            <li>Error getting posts</li>
            {/await}
        </ul>
    </div>
</div>

<style>
    .post-area{
        position: relative;
        min-height: calc(100vh - 64px);
        max-width: calc(1280px);
        margin: 0 auto;
        padding: 16px 16px 80px 16px;
    }
    .post{
        position: relative;
        min-height: calc(100vh - 160px);
        padding-bottom: 32px;
    }
    .recent{
        width: 100%;
        max-width: 360px;
        background: #fafafa;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 12px;
    }
    @media(max-width: 756px){
        .recent{
            max-width: 100%;
        }
    }
    .recent h3{
        margin: 0;
        font-size: large;
    }
    .recent ul{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .recent ul li{
        font-size: 13px;
        color: #666;
        padding: 12px 0;
        border-bottom: 1px solid #ddd;
    }
    .recent ul li:last-child{
        border: 0;
    }
    .recent ul li a{
        font-size: 17px;
    }
    .recent ul li img{
        border: 1px solid #ddd;
    }
</style>