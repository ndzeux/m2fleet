<script>
    import { fly } from "svelte/transition"
    let t, f
    function send(e){
        showalert = false
        t = e.target
        f = t.parentNode.parentNode
        t.innerHTML = `        
        <svg width="44" height="32" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <circle cx="15" cy="15" r="15">
                <animate attributeName="r" from="15" to="15"
                        begin="0s" dur="0.8s"
                        values="15;9;15" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                <animate attributeName="r" from="9" to="9"
                        begin="0s" dur="0.8s"
                        values="9;15;9" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="0.5" to="0.5"
                        begin="0s" dur="0.8s"
                        values=".5;1;.5" calcMode="linear"
                        repeatCount="indefinite" />
            </circle>
            <circle cx="105" cy="15" r="15">
                <animate attributeName="r" from="15" to="15"
                        begin="0s" dur="0.8s"
                        values="15;9;15" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
            </circle>
        </svg>
        `
        let data = {
            name: f.querySelector("input[name='name']").value,
            email: f.querySelector("input[name='email']").value,
            subject: f.querySelector("input[name='subject']").value,
            text: f.querySelector("textarea[name='text']").value,
            captcha: f.querySelector("input[name='captcha']").value
        }
        if(data.captcha !== captcha){
            showalert = true
            setTimeout(()=>{
                document.querySelector(".alert span").innerText = "Captcha salah"
            }, 100)
            t.innerHTML = "Send"
            return false
        }
        fetch("/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(r => r.json()).then(res => {
            showalert = true
            if(res.status == "failed"){
                setTimeout(()=>{
                    document.querySelector(".alert span").innerText = res.message
                }, 100)
                t.innerHTML = "Send"
                return false
            }
            setTimeout(()=>{
                document.querySelector(".alert").style.background = "#16a085"
                document.querySelector(".alert").style.border = "1px solid #119177"
                document.querySelector(".alert button").style.background = "#119177"
                document.querySelector(".alert span").innerText = res.message
                f.reset()
                t.innerText = "Send"
            }, 100)
        })
    }
    let captcha
    function generateCaptcha(){
        let result = ''
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0;i < 6;i++){
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        captcha = result
        return result
    }
    let showalert
    function closealert(){
        showalert = false
    }
</script>

<svelte:head>
    <title>Contact</title>
</svelte:head>

<div class="contact">
    {#if showalert}
    <div class="alert" in:fly={{ y: -200, duration: 500 }} out:fly={{ y: -100, duration: 1000 }}>
        <span>Gagal</span>
        <button on:click={closealert}>Close</button>
    </div>
    {/if}
    <form>
        <h2>Contact</h2>
        If you have bussiness inquiries or other questions, please fill out the following form for contact us, Thank you.
        <div class="inp">
            <label for="name">Name</label>
            <input type="text" name="name" autocomplete="off">
        </div>
        <div class="inp">
            <label for="name">Email</label>
            <input type="email" name="email" autocomplete="off">
        </div>
        <div class="inp">
            <label for="name">Subject</label>
            <input type="text" name="subject" autocomplete="off">
        </div>
        <div class="inp">
            <label for="text">Text</label>
            <textarea name="text" rows="20" style="width: 90%;max-width: 600px;resize:none"></textarea>
        </div>
        <div class="inp">
            <span class="captcha">{generateCaptcha()}</span>
            <input type="text" name="captcha" autocomplete="off" placeholder="captcha">
        </div>
        <div class="btn">
            <button class="row middle-xs center-xs" type="submit" on:click|preventDefault={e => send(e)}>Send</button>
        </div>
    </form>
</div>

<style>
    .contact{
        width: calc(100% - 32px);
        max-width: 600px;
        margin: 0 calc((100vw - 1296px) / 2);
        padding: 0 16px 24px 16px;
    }
    @media(max-width: 1296px){
        .contact{
            margin: 0;
        }
    }
    .contact h2{
        margin: 16px 0 0 0;
    }
    .inp label{
        display: block;
        font-weight: bold;
        margin: 12px 0 6px 0;
    }
    .inp .captcha{
        background: #222;
        color: #fff;
        font-size: 36px;
        padding: 12px 5px;
        display: inline-block;
        margin: 12px 0 6px 0;
    }
    .inp input, .inp textarea{
        display: block;
        padding: 8px 12px;
        border: 1px solid #ddd;
        transition: border .3s;
    }
    .inp input:focus, .inp textarea:focus{
        border: 1px solid #0babeb;
    }
    .btn{
        margin-top: 16px;
    }
    .btn button{
        background: #0babeb;
        border: 1px solid #0babeb;
        color: #fff;
        font-weight: bold;
        width: 120px;height: 44px;
        border-radius: 8px;
        cursor: pointer;
        transition: background .3s, color .3s;
    }
    .btn button:hover{
        background: #fff;
        color: #0babeb;
    }
    .alert{
        position: fixed;
        z-index: 99;
        left: calc((100vw - 1264px) / 2);top: 80px;
        width: calc(100% - 66px);
        max-width: 360px;
        background: #e74c3c;
        border: 1px solid #df3725;
        color: #fff;
        padding: 16px;
    }
    .alert button{
        background: #df3725;
        color: #fff;
        border: 0;
        height: 58px;
        padding: 0 16px;
        margin: -16px;
        margin-left: 16px;
        cursor: pointer;
        float: right;
    }
    @media(max-width: 1296px){
        .alert{
            left: 16px;
        }
    }
</style>