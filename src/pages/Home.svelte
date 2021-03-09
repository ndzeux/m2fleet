<script>
    import { link } from 'svelte-routing'

    async function loadData(endpoint){
        let f = await fetch(endpoint, { method: "POST" });
        let r = await f.json();
        if(!r.data.length && r.data.length != 0){
            postTitle = "Blog - " + r.data.title
        }
        return r
    }
    let lastFivePosts = loadData(`/all-posts/6`)

    function setTime(int){
        let time = new Date(int * 1000)
        return `${("0" + time.getDate()).slice(-2)}-${("0" + time.getMonth() + 1).slice(-2)}-${time.getFullYear()} ${("0" + time.getHours()).slice(-2)}:${("0" + time.getMinutes()).slice(-2)}`
    }

    function slideStart(){
        var element = document.getElementById('slider');
        window.mySwipe = new Swipe(element, {
            startSlide: 0,
            auto: 10000,
            draggable: true,
            autoRestart: false,
            continuous: true,
            disableScroll: true,
            stopPropagation: true,
            callback: function(index, element) {},
            transitionEnd: function(index, element) {}
        });
    }
    let t, st
    let f = []
    f[0] = f[1] = f[2] = false
    function showPnA(e, a){
        t = e.target
        for(let i = 0; i < 3; i++){
            f[a] = !f[a]
            clearTimeout(st)
            if(f[a]){
                t.parentNode.querySelector("p").style.cssText = "max-height:500px;padding-bottom:48px"   
                st = setTimeout(()=>{
                    t.parentNode.querySelector("a").style.maxHeight = "80px"
                }, 500)
                t.style.cssText = "transform:rotate(-180deg)"
            } else {
                t.parentNode.querySelector("a").style.maxHeight = ""
                st = setTimeout(()=>{
                    t.parentNode.querySelector("p").style.cssText = ""  
                }, 500)
                t.style.cssText = ""
            }
        }
    }
    let year = new Date().getFullYear()

</script>

<svelte:head>
    <title>GPS Fleet Management - Vehicle Tracking</title>
    <script src="/src/js/swipe.js" on:load={slideStart}></script>
</svelte:head>
  
<div class="jumbotron">
    <div class="container row middle-xs">
        <div>
            <h1>Flexible Fleet Solution System</h1>
            <span>To choose a telematics solution, define your objectives, learn as much as you can about potential solutions, talk to providers and test solutions.</span><br>
            <a href="/contact" use:link><button>Consult with Us</button></a><a href="/solutions" use:link><button>Learn it more</button></a>
        </div>
    </div>
</div>
<div id="slider" class="swipe">
    <div class="swipe-wrap">
        <div class="row middle-xs between-xs">
            <img src="/src/img/slides/solutions.png" alt="Slides">
            <div class="ppp col-xs">
                <h4>Solutions</h4>
                M2Fleet provides the world’s most sophisticated GPS fleet management solutions that help organizations develop company-wide management policies to improve driver behavior, enhance driver safety, and on-road productivity.
            </div>
            <a href="/solutions" use:link>
                <button>Read More</button>
            </a>
        </div>
        <div class="row middle-xs between-xs">
            <img src="/src/img/slides/features.png" alt="Slides">
            <div class="ppp col-xs">
                <h4>Features</h4>
                M2Fleet build refers to the management of the company or organization on transport resources or vehicles which includes a variety of activities, including the financing of the vehicle, tracking, fuel monitoring and vehicle maintenance.
            </div>
            <a href="/features" use:link>
                <button>Read More</button>
            </a>
        </div>
        <div class="row middle-xs between-xs">
            <img src="/src/img/slides/rd.png" alt="Slides">
            <div class="ppp col-xs">
                <h4>Request Demo</h4>
                M2Fleet used for vehicle tracking for customers range from Transportation, Logistic and others company manage their own fleet. Request a product demonstration to learn how M2Fleet’s solutions can help you achieve ROI.
            </div>
            <a href="/contact" use:link>
                <button>Read More</button>
            </a>
        </div>
    </div>
</div>
<div class="posts row center-xs">
    <div class="post col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="box">
            <img src="/src/img/posts/why.png" alt="Post">
            <h3>Why Your Bussiness Needs M2Fleet System</h3>
            <p>
                Vehicles, trailers, cargo and even employees, it is a significant investment for your company with IoT technology, we can help you to maintain and monitor the asset. M2Fleet provide a variety of benefits to the customer for increasing efficiency of fleet operational cost.
            </p>
            <a href="/solutions" use:link>
                Read More
                <svg style="width:18px;height:18px;margin-bottom:-4px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                </svg>
            </a>
            <button on:click={e => showPnA(e, 0)}>
                <svg style="width:32px;height:32px;pointer-events:none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
            </button>
        </div>
    </div>
    
    <div class="post col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="box">
            <img src="/src/img/posts/seal.png" alt="Post">
            <h3>Electronic Seal, E-Seal for Container</h3>
            <p>
                Intelegent lock Tracker, Electronic seal required by export and import / customs activity to reduce time and cost. The technology for monitoring shipment and secure the cargo by locked the container with e-seal.
            </p>
            <a href="/products/electronic-seal" use:link>
                Read More
                <svg style="width:18px;height:18px;margin-bottom:-4px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                </svg>
            </a>
            <button on:click={e => showPnA(e, 1)}>
                <svg style="width:32px;height:32px;pointer-events:none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
            </button>
        </div>
    </div>

    <div class="post col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="box">
            <img src="/src/img/posts/job.png" alt="Post">
            <h3>Job Dispatch & Proof of Delivery System</h3>
            <p> 
                We offer the service to support the company for proof of delivery system “POD” and integration with your TMS or Job System using REST API. By installing job dispatch module for POD system.
            </p>
            <a href="/features/job-dispatch" use:link>
                Read More
                <svg style="width:18px;height:18px;margin-bottom:-4px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                </svg>
            </a>
            <button on:click={e => showPnA(e, 2)}>
                <svg style="width:32px;height:32px;pointer-events:none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
            </button>
        </div>
    </div>
</div>
<div class="jumbo2 row middle-xs center-xs">
    <div class="box">
        <h2>Migrate Your Fleet Monitoring System with Us</h2>
        <a href="/contact" use:link>
            <button>Migrate Now</button>
        </a>
    </div>
</div>
<div class="footer">
    <div class="info row">
        <div class="left col-lg-6 col-md-6 col-sm-5 col-xs-12">
            <h3>Fleet Management Solution</h3>
            To choose a telematics solution, define your objectives, learn as much as you can about potential solutions, talk to providers, customers, and test solutions before you buy.
            <br>
            <a href="/resources" use:link>
                <button>Download</button>
            </a>
            <span class="sosmed">
                <svg style="width:20px;height:20px;margin-bottom:-4px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg> Telp: 021-80879546
            </span>
            <span class="sosmed">
                <svg style="width:20px;height:20px;margin-bottom:-4px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                </svg> Whatsapp: +628111751214
            </span>
            <span class="sosmed">
                <svg style="width:20px;height:20px;margin-bottom:-5px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                </svg> Email: sales@m2fleet.co.id
            </span>
        </div>
        <div class="right col-lg-6 col-md-6 col-sm-7 col-xs-12">
            <h3 style="margin-bottom: 10px">Recents Articles</h3>
            <div class="row" style="margin: 0 -.5rem">
                {#await lastFivePosts}
                <div class="ev col-xs-12 row start-xs between-xs">Loading</div>
                {:then posts}
                {#if posts.data.length > 0}
                {#each posts.data as post}
                <div class="ev col-lg-6 col-md-6 col-sm-12 col-xs-12 row start-xs between-xs">
                    <div class="date row middle-xs center-xs">
                        <img src="{post.cover}" alt="{post.title}" style="width: 72px;height: 72px">
                    </div>
                    <div class="ent col-xs" style="color: #aaa;font-size: 13px">
                        <a href="/blog/{post.link}" use:link style="color: #fff;font-size: 16px">{post.title}</a><br>
                        {(post.created_at == post.updated_at ? setTime(post.created_at):setTime(post.updated_at))}<br>
                    </div>
                </div>
                {/each}
                {:else}
                <div class="ev col-xs-12 row start-xs between-xs">No Posts</div>
                {/if}
                {:catch}
                <div class="ev col-xs-12 row start-xs between-xs">Error getting posts</div>
                {/await}
            </div>
        </div>
    </div>
    <div class="copyright">
        &copy; M2Fleet.co.id 2014 - {year}
    </div>
</div>

<style>
    .jumbotron{
        position: relative;
        background: #444 url(/src/img/jumbo.png) center no-repeat;
        background-size: cover;
        height: calc(100vw / 1.777);
        max-height: 70vh;
        min-height: 360px;
        color: #fff;
        text-shadow: #444;
    }
    .jumbotron:before{
        content: '';
        position: absolute;
        top: 0;right: 0;bottom: 0;left: 0;
        background: linear-gradient(to right, rgba(13, 29, 46, 1.0), rgba(13, 29, 46, 0.8), transparent);
    }
    .jumbotron h1{
        margin: -28px 0 0 0;
        font-size: 54px;
    }
    .jumbotron span{
        display: block;
        font-size: 22px;line-height: 32px;
        margin: 12px 0 24px 0;
    }
    .jumbotron button{
        background: rgba(255, 255, 255, 1);
        color: #225588;
        border-radius: 4px;
        border: 1px solid #fff;
        padding: 16px 20px;
        font-weight: bold;
        letter-spacing: .5px;
        font-size: 18px;
        cursor: pointer;
        transition: background .3s, color .3s;
    }
    .jumbotron a+a button{
        margin-left: 16px;
        background: rgba(0,0,0,0);
        color: #fff
    }
    .jumbotron button:hover{
        background: rgba(35, 67, 102, 1);
        color: #fff;
    }
    .container{
        position: relative;z-index: 1;
        height: 100%;
        padding: 0 16px;
    }
    .container > div{
        width: 100%;
        max-width: 700px;
    }
    
    .swipe {
        overflow: hidden;
        visibility: hidden;
        position: relative;
    }
    .swipe-wrap {
        overflow: hidden;
        position: relative;
    }
    .swipe-wrap > div {
        float: left;
        width: 100%;
        position: relative;
        width: 100%;
        padding: 16px calc((100vw - 1280px) / 2);
    }
    .swipe-wrap > div img{
        width: 180px;height: 180px;
    }
    .swipe-wrap > div .ppp{
        color: #225588;
        padding: 0 32px;
    }
    .swipe-wrap > div .ppp h4{
        font-size: 24px;
        line-height: 36px;
        margin: 0;
    }
    .swipe-wrap > div button{
        background: #fff;
        border: 1px solid #225588;
        color: #225588;
        font-weight: bold;
        padding: 12px 16px;
        border-radius: 8px;
        cursor: pointer;
        transition: background .3s, color .3s;
    }
    .swipe-wrap > div button:hover{
        background: #225588;
        color: #fff;
    }
    .swipe-wrap > div button a{color: inherit;}
    .posts{
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 16px;
    }
    .post{
        padding: 24px 16px;
        text-align: left;
    }
    .post .box{
        position: relative;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 0 16px 16px 16px;
    }
    .post .box img{
        border-radius: 12px 12px 0 0;
        width: calc(100% + 32px);
        margin: 0 -16px;
    }
    .post .box h3{
        color: #225588;
        margin: 12px 0 0 0;
        font-size: 22px;
        line-height: 32px;
    }
    .post .box p{
        position: relative;
        z-index: 2;
        margin-top: 8px;
    }
    .post .box a{
        position: absolute;
        bottom: 16px;left: 16px;
    }
    .post .box button{
        position: relative;z-index: 1;
        display: none;
        background: rgba(0,0,0,0);
        border: 0;
        color: #225588;
        text-align: center;
        width: 100%;
        margin: -24px 0 -32px 0;
        cursor: pointer;
    }
    .jumbo2{
        margin-top: 48px;
        background: linear-gradient(to bottom, rgba(37, 71, 123, 0.95), rgba(0, 128, 178, 0.95));
        height: 400px;
        padding: 32px;
    }
    .jumbo2 h2{
        font-size: 44px;
        line-height: 60px;
        color: #fff;
    }
    .jumbo2 button{
        background: #fff;
        border: 1px solid #fff;
        padding: 16px;
        border-radius: 8px;
        color: #225588;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: .5px;
        cursor: pointer;
        transition: background .3s, color .3s;
    }
    .jumbo2 button:hover{
        background: #225588;
        color: #fff;
    }
    .footer{
        color: #fff;
        background: #0b2032;
        padding: 32px calc((100vw - 1280px) / 2);
    }
    .footer .info{
        padding-bottom: 32px;
    }
    .footer .info h3{
        font-size: 24px;
        line-height: 32px;
        margin: 0 0 8px 0;
    }
    .footer .info .left button{
        background: #203040;
        border: 0;
        color: #fff;
        padding: 12px;
        border-radius: 8px;
        margin: 16px 0;
        cursor: pointer;
        transition: background .3s, color .3s;
    }
    .footer .info .left button:hover{
        background: #fff;
        color: #203040;
    }
    .footer .info .left .sosmed{
        display: block;
        margin-bottom: 16px
    }
    .footer .info .right .ev{
        margin-bottom: 16px;
    }
    .footer .info .right .date{
        background: #fff;
        color: #0b2032;
        width: 80px;height: 80px;
        margin-right: 8px;
    }
    .footer .copyright{
        border-top: 1px solid #304050;
        padding-top: 32px;
    }



    
    @media(max-width: 1296px){
        .swipe-wrap > div{
            padding: 16px;
        }
        .footer{
            padding: 32px 16px;
        }
    }
    @media(max-width: 800px){
        .jumbotron h1{
            font-size: 44px;line-height: 54px;
        }
        .jumbotron span{
            font-size: 20px;
        }
        .swipe-wrap > div{
            flex-direction: column;
        }
        .swipe-wrap > div .ppp{
            padding: 16px;
        }
    }
    @media(max-width: 680px){
        .jumbotron h1{
            margin-top: 0;
            font-size: 36px;line-height: 46px;
        }
        .jumbotron span{
            margin: 12px 0 0 0;
        }
        .jumbotron button{
            padding: 12px;
        }
    }
    @media(max-width: 600px){
        .posts{
            padding: 0 8px;
        }
        .post .box p{
            max-height: 0;
            overflow: hidden;
            transition: max-height 1s, padding 1s;
        }
        .post .box a{
            z-index: 999;
            bottom: 44px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 1s;
        }
        .post .box button{
            display: block;
            transition: transform .5s;
        }
        .jumbo2 h2{
            font-size: 36px;
            line-height: 50px;
        }
    }
    @media(max-width: 425px){
        .jumbotron h1{
            font-size: 32px;line-height: 42px;
        }
        .jumbotron span{
            font-size: 16px;line-height: 24px;
        }
        .jumbotron button{
            font-size: 16px;
            letter-spacing: normal;
        }
        .jumbo2 h2{
            font-size: 32px;
        }
    }
    @media(max-width: 355px){
        .jumbotron h1{
            font-size: 24px;line-height: 32px;
        }
        .jumbotron a+a button{
            margin: 12px 0 0 0;
            display: block;
        }
    }
</style>