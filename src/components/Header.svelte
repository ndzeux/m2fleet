<script>
    import { link } from 'svelte-routing'
    import { fade } from 'svelte/transition'

    let headerWidth, menuWidth
    let visible = false
    let showproducts, showsolutions, showfeatures

    let t, elm, ml, st
    function hoverMenuBtn(e, y, z) {
        if(headerWidth <= 1024){
            return false
        }
        if(e){
            t = e.target
        }
        elm = t.parentNode.querySelector(".menupop")
        if (y) {
            clearTimeout(st)
            showproducts = showsolutions = showfeatures = false
            t.parentNode.querySelectorAll(".hsvg").forEach(a => a.querySelector("svg").style.transform = "")
            if(z == 'p'){
                showproducts = true
                ml = -4
            } else if(z == 's'){
                showsolutions = true
                ml = 168
            } else if(z == 'f'){
                showfeatures = true
                ml = 300
            }
            t.querySelector("svg").style.transform = "rotate(-180deg)"
            if(elm.style.top == ""){
                elm.style.cssText = "display:block;left:" + ml + "px;"
                setTimeout(()=>{
                    elm.style.opacity = "1"
                    elm.style.top = "80px"
                }, 100)
            } else {
                elm.style.cssText = "display:block;left:" + ml + "px;top:80px;opacity:1"
            }
        } else {
            t.parentNode.querySelectorAll(".hsvg").forEach(a => a.querySelector("svg").style.transform = "")
            elm.style.opacity = ""
            elm.style.top = "74px"
            st = setTimeout(()=>{
                showproducts = showsolutions = showfeatures = false
                elm.style.cssText = "display:none"
            }, 300)
        }
    }
    function doHoverMenuBtn(z){
        if(showproducts){
            hoverMenuBtn(false, z, 'p')
        } else if(showsolutions){
            hoverMenuBtn(false, z, 's')
        } else if(showfeatures){
            hoverMenuBtn(false, z, 'f')
        }
    }

    function showMenuMobile(e, z) {  
        if(headerWidth > 1024){
            return false
        }
        t = e.target
        elm = t.parentNode.querySelector(".right") || t.parentNode
        visible = !visible
        if (z) {
            elm.style.right = "0"
            elm.style.opacity = "1"
        } else {
            elm.style.right = "-" + (menuWidth + 30) + "px"
            elm.style.opacity = ""
        }
    }
    $: if (headerWidth > 1024) {
        visible = false
    }

    export let currurl
    $:  if(currurl.indexOf("/") > -1){
            currurl = "/" + currurl.split("/")[1]
        }
</script>

<header class="row" bind:clientWidth={headerWidth}>
    <div class="container row middle-xs between-xs">
        <div class="left">
            <a href="/" use:link>
                <img src="/src/img/m2fleet-icon.png" alt="m2fleet icon">
            </a>
        </div>
        <div class="right row" bind:clientWidth={menuWidth}
            style="{headerWidth <= 1024 ? 'position:fixed;right:-' + menuWidth + 'px;transition:right .3s, opacity .3s;':''}">
            <a href="/" class="row middle-xs center-xs {(currurl == "/" ? "active":"")}" on:click={e => showMenuMobile(e, false)} use:link>Home</a>
            <a href="/products" class="row middle-xs center-xs hsvg {(currurl == "/products" ? "active":"")}" on:click={e => showMenuMobile(e, false)} on:mouseover="{e => hoverMenuBtn(e, true, 'p')}" on:mouseout="{e => hoverMenuBtn(e, false, 'p')}" use:link>
                Products <svg viewBox="0 0 24 24"
                    style="width:22px;height:22px;margin-left:4px;pointer-events:none;transition:transform .3s;">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" fill="currentColor"></path>
                </svg>
            </a>
            <a href="/solutions" class="row middle-xs center-xs hsvg {(currurl == "/solutions" ? "active":"")}" on:click={e => showMenuMobile(e, false)} on:mouseover="{e => hoverMenuBtn(e, true, 's')}" on:mouseout="{e => hoverMenuBtn(e, false, 'p')}" use:link>
                Solutions <svg viewBox="0 0 24 24"
                    style="width:22px;height:22px;margin-left:4px;pointer-events:none;transition:transform .3s;">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" fill="currentColor"></path>
                </svg>
            </a>
            <a href="/features" class="row middle-xs center-xs hsvg {(currurl == "/features" ? "active":"")}" on:click={e => showMenuMobile(e, false)} on:mouseover="{e => hoverMenuBtn(e, true, 'f')}" on:mouseout="{e => hoverMenuBtn(e, false, 'p')}" use:link>
                Features <svg viewBox="0 0 24 24"
                    style="width:22px;height:22px;margin-left:4px;pointer-events:none;transition:transform .3s;">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" fill="currentColor"></path>
                </svg>
            </a>
            <a href="/resources" class="row middle-xs center-xs {(currurl == "/resources" ? "active":"")}" on:click={e => showMenuMobile(e, false)} use:link>Resources</a>
            <a href="/blog" class="row middle-xs center-xs {(currurl == "/blog" ? "active":"")}" on:click={e => showMenuMobile(e, false)} use:link>Blogs</a>
            <a href="/contact" class="row middle-xs center-xs {(currurl == "/contact" ? "active":"")}" on:click={e => showMenuMobile(e, false)} use:link>Contact</a>
            <div class="menupop" style="display:none" on:mouseover={() => doHoverMenuBtn(true)} on:mouseout={() => doHoverMenuBtn(false)}>
                <div class="arrow1">
                    <div class="arrow2"></div>
                </div>
                {#if showproducts}
                <a href="/products" class="row middle-xs" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                        <path fill="currentColor" d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path>
                    </svg> Products
                </a>
                <a href="/products/vehicle-tracking-&amp;-management" class="row middle-xs" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                        <path fill="currentColor" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                    </svg> Vehicle Tracking &amp; Management
                </a>
                <a href="/products/electronic-seal" class="row middle-xs" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                        <path fill="currentColor" d="M22 19H2V21H22V19M4 15C4 15.5 4.2 16 4.6 16.4C5 16.8 5.5 17 6 17V6C5.5 6 5 6.2 4.6 6.6C4.2 7 4 7.5 4 8V15M13.5 6H10.5C10.5 5.6 10.6 5.2 10.9 4.9C11.2 4.6 11.5 4.5 12 4.5C12.4 4.5 12.8 4.6 13.1 4.9C13.3 5.2 13.5 5.6 13.5 6M7 6V17H17V6H15C15 5.2 14.7 4.5 14.1 3.9S12.8 3 12 3C11.2 3 10.5 3.3 9.9 3.9C9.3 4.5 9 5.2 9 6H7M18 17C18.5 17 19 16.8 19.4 16.4C19.8 16 20 15.5 20 15V8C20 7.5 19.8 7 19.4 6.6C19 6.2 18.5 6 18 6V17Z"></path>
                    </svg> Electronic Seal
                </a>
                <a href="/products/advance-security-solutions" class="row middle-xs" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                        <path fill="currentColor" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"></path>
                    </svg> Advance Security Solutions
                </a>
                <a href="/products/wireless-camera-system" class="row middle-xs" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                        <path fill="currentColor" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"></path>
                    </svg> Wireless Camera System
                </a>
            {/if}
            {#if showsolutions}
                <a class="row middle-xs" href="/solutions" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px"><path fill="currentColor" d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path></svg>
                    Solutions
                </a>
                <a class="row middle-xs" href="/solutions/transportation" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" fill="currentColor"></path></svg>
                    Transportation
                </a>
                <a class="row middle-xs" href="/solutions/utility" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px"><path d="M22 19H2V21H22V19M4 15C4 15.5 4.2 16 4.6 16.4C5 16.8 5.5 17 6 17V6C5.5 6 5 6.2 4.6 6.6C4.2 7 4 7.5 4 8V15M13.5 6H10.5C10.5 5.6 10.6 5.2 10.9 4.9C11.2 4.6 11.5 4.5 12 4.5C12.4 4.5 12.8 4.6 13.1 4.9C13.3 5.2 13.5 5.6 13.5 6M7 6V17H17V6H15C15 5.2 14.7 4.5 14.1 3.9S12.8 3 12 3C11.2 3 10.5 3.3 9.9 3.9C9.3 4.5 9 5.2 9 6H7M18 17C18.5 17 19 16.8 19.4 16.4C19.8 16 20 15.5 20 15V8C20 7.5 19.8 7 19.4 6.6C19 6.2 18.5 6 18 6V17Z" fill="currentColor"></path></svg>
                    Utility
                </a>
                <a class="row middle-xs" href="/solutions/car-rental" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px"><path d="M16,6H6L1,12V15H3A3,3 0 0,0 6,18A3,3 0 0,0 9,15H15A3,3 0 0,0 18,18A3,3 0 0,0 21,15H23V12C23,10.89 22.11,10 21,10H19L16,6M6.5,7.5H10.5V10H4.5L6.5,7.5M12,7.5H15.5L17.46,10H12V7.5M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" fill="currentColor"></path></svg>
                    Car Rental
                </a>
                <a class="row middle-xs" href="/solutions/taxi" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                        <path fill="currentColor" d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H15V3H9V5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z"></path>
                    </svg> Taxi
                </a>
                <a class="row middle-xs" href="/solutions/asset-tracking" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                        <path fill="currentColor" d="M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z"></path>
                    </svg> Asset Tracking
                </a>
                <a class="row middle-xs" href="/solutions/cold-chain-logistics" use:link>
                    <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                        <path fill="currentColor" d="M17.55,11.2C17.32,10.9 17.05,10.64 16.79,10.38C16.14,9.78 15.39,9.35 14.76,8.72C13.3,7.26 13,4.85 13.91,3C13,3.23 12.16,3.75 11.46,4.32C8.92,6.4 7.92,10.07 9.12,13.22C9.16,13.32 9.2,13.42 9.2,13.55C9.2,13.77 9.05,13.97 8.85,14.05C8.63,14.15 8.39,14.09 8.21,13.93C8.15,13.88 8.11,13.83 8.06,13.76C6.96,12.33 6.78,10.28 7.53,8.64C5.89,10 5,12.3 5.14,14.47C5.18,14.97 5.24,15.47 5.41,15.97C5.55,16.57 5.81,17.17 6.13,17.7C7.17,19.43 9,20.67 10.97,20.92C13.07,21.19 15.32,20.8 16.93,19.32C18.73,17.66 19.38,15 18.43,12.72L18.3,12.46C18.1,12 17.83,11.59 17.5,11.21L17.55,11.2M14.45,17.5C14.17,17.74 13.72,18 13.37,18.1C12.27,18.5 11.17,17.94 10.5,17.28C11.69,17 12.39,16.12 12.59,15.23C12.76,14.43 12.45,13.77 12.32,13C12.2,12.26 12.22,11.63 12.5,10.94C12.67,11.32 12.87,11.7 13.1,12C13.86,13 15.05,13.44 15.3,14.8C15.34,14.94 15.36,15.08 15.36,15.23C15.39,16.05 15.04,16.95 14.44,17.5H14.45Z"></path>
                    </svg> Cold Chain Logistics
                </a>
            {/if}
            {#if showfeatures}
            <a class="row middle-xs" href="/features" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path>
                </svg> Features
            </a>
            <a class="row middle-xs" href="/features/real-time-tracking" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                </svg> Real Time Tracking
            </a>
            <a class="row middle-xs" href="/features/job-dispatch" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"></path>
                </svg> Job Dispatch
            </a>
            <a class="row middle-xs" href="/features/rules-&amp;-alerts" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3M7,7V5H5V19H19V5H17V7H7M11,9H13V13.5H11V9M11,15H13V17H11V15Z"></path>
                </svg> Rules &amp; Alerts
            </a>
            <a class="row middle-xs" href="/features/vehicle-maintenance" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z"></path>
                </svg> Vehicle Maintenance
            </a>
            <a class="row middle-xs" href="/features/fuel-consumption" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M18,10A1,1 0 0,1 17,9A1,1 0 0,1 18,8A1,1 0 0,1 19,9A1,1 0 0,1 18,10M12,10H6V5H12M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7 15.5,7.93 15.5,9A2.5,2.5 0 0,0 18,11.5C18.36,11.5 18.69,11.42 19,11.29V18.5A1,1 0 0,1 18,19.5A1,1 0 0,1 17,18.5V14C17,12.89 16.1,12 15,12H14V5C14,3.89 13.1,3 12,3H6C4.89,3 4,3.89 4,5V21H14V13.5H15.5V18.5A2.5,2.5 0 0,0 18,21A2.5,2.5 0 0,0 20.5,18.5V9C20.5,8.31 20.22,7.68 19.77,7.23Z"></path>
                </svg> Fuel Consumption
            </a>
            <a class="row middle-xs" href="/features/camera-integration" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"></path>
                </svg> Camera Integration
            </a>
            <a class="row middle-xs" href="/features/temperature-sensor" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M11.5,1A1.5,1.5 0 0,0 10,2.5V14.5C9.37,14.97 9,15.71 9,16.5A2.5,2.5 0 0,0 11.5,19A2.5,2.5 0 0,0 14,16.5C14,15.71 13.63,15 13,14.5V13H17V11H13V9H17V7H13V5H17V3H13V2.5A1.5,1.5 0 0,0 11.5,1M0,15V17C0.67,17 0.79,17.21 1.29,17.71C1.79,18.21 2.67,19 4,19C5.33,19 6.21,18.21 6.71,17.71C6.82,17.59 6.91,17.5 7,17.41V15.16C6.21,15.42 5.65,15.93 5.29,16.29C4.79,16.79 4.67,17 4,17C3.33,17 3.21,16.79 2.71,16.29C2.21,15.79 1.33,15 0,15M16,15V17C16.67,17 16.79,17.21 17.29,17.71C17.79,18.21 18.67,19 20,19C21.33,19 22.21,18.21 22.71,17.71C23.21,17.21 23.33,17 24,17V15C22.67,15 21.79,15.79 21.29,16.29C20.79,16.79 20.67,17 20,17C19.33,17 19.21,16.79 18.71,16.29C18.21,15.79 17.33,15 16,15M8,20C6.67,20 5.79,20.79 5.29,21.29C4.79,21.79 4.67,22 4,22C3.33,22 3.21,21.79 2.71,21.29C2.35,20.93 1.79,20.42 1,20.16V22.41C1.09,22.5 1.18,22.59 1.29,22.71C1.79,23.21 2.67,24 4,24C5.33,24 6.21,23.21 6.71,22.71C7.21,22.21 7.33,22 8,22C8.67,22 8.79,22.21 9.29,22.71C9.73,23.14 10.44,23.8 11.5,23.96C11.66,24 11.83,24 12,24C13.33,24 14.21,23.21 14.71,22.71C15.21,22.21 15.33,22 16,22C16.67,22 16.79,22.21 17.29,22.71C17.79,23.21 18.67,24 20,24C21.33,24 22.21,23.21 22.71,22.71C22.82,22.59 22.91,22.5 23,22.41V20.16C22.21,20.42 21.65,20.93 21.29,21.29C20.79,21.79 20.67,22 20,22C19.33,22 19.21,21.79 18.71,21.29C18.21,20.79 17.33,20 16,20C14.67,20 13.79,20.79 13.29,21.29C12.79,21.79 12.67,22 12,22C11.78,22 11.63,21.97 11.5,21.92C11.22,21.82 11.05,21.63 10.71,21.29C10.21,20.79 9.33,20 8,20Z"></path>
                </svg> Temperature Sensor
            </a>
            <a class="row middle-xs" href="/features/rfid-receiver-&amp;-reader" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.41L11.59 21.41A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M6.5 8A1.5 1.5 0 1 1 8 6.5A1.5 1.5 0 0 1 6.5 8M11.59 15.41L7.59 11.41L9 10L13 14M15.59 14.41L10.09 8.91L11.5 7.5L17 13Z"></path>
                </svg> RFID Receiver &amp; Reader
            </a>
            <a class="row middle-xs" href="/features/mobile-application" use:link>
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                    <path fill="currentColor" d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1Z"></path>
                </svg> Mobile Application
            </a>
            {/if}
            </div>
        </div>
        {#if headerWidth <= 1024}
        <button class="row middle-xs center-xs" on:click={e => showMenuMobile(e, true)}>
            <svg style="width:32px;height:32px;pointer-events:none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
        </button>
        {/if}
    </div>
</header>

{#if visible}
<div class="overlay" transition:fade={{ duration: 300 }} on:click={e => showMenuMobile(e, false)}></div>
{/if}

<style>
    header {
        position: sticky;
        z-index: 9999;
        top: 0;
        background: #fff;
        height: 64px;
        box-shadow: 0 2px 4px rgba(0,0,0,.1);
    }
    header > div {
        padding: 0 16px;
    }
    header .left{
        width: 120px;
        background: #0babeb;
        min-height: 44px;
    }
    header img{width: 100%;margin-bottom: -7px;}
    header .right{
        position: relative;
        height: 64px;
    }
    header .right > a{
        color: #555;
        height: 100%;
        box-sizing: border-box;
        padding: 0 20px;
        border-bottom: 2px solid #fff;
        transition: color .3s;
    }
    header .right > a:hover{
        color:  #0babeb
    }
    header .right > .active{
        color: #0babeb;
        border-color: #0babeb;
    }
    header button{
        margin-right: -3px;
        padding: 0 3px;
        background: #fff;
        border: 3px solid #fff;
        border-radius: 6px;
        cursor: pointer;
        outline: none;
        transition: border .3s;
    }
    header button:focus{
        border: 3px solid #0099ff;
    }
    .overlay{
        position: fixed;z-index: 2;
        top: 0;right: 0;bottom: 0;left: 0;
        background: rgba(0,0,0,.4);
    }
    .menupop{
        position: absolute;z-index: 99;
        top: 74px;
        min-width: 240px;
        background: #fff;
        border: 1px solid #eee;
        border-radius: 6px;
        opacity: 0;
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        transition: top .3s, left .7s, opacity .3s;
    }
    .menupop .arrow1{
        position: absolute;
        content: '';
        left: calc(50% - 10px);
        top: -22px;
        border-left: 11px solid transparent;
        border-right: 11px solid transparent;
        border-bottom: 11px solid #eee;
        border-top: 11px solid transparent;
    }
    .menupop .arrow2{
        position: absolute;
        content: '';
        left: calc(50% - 10px);
        top: -9px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
        border-top: 10px solid transparent;
    }
    .menupop::after{
        position: absolute;
        top: -16px;
        content: '';
        left: 0;
        right: 0;
        height: 15px;
        background: rgba(0,0,0,0);
    }
    .menupop a{
        color: #555;
        padding: 12px;
        border-top: 0px solid #ddd;
        transition: color .3s;
    }
    .menupop a:hover{
        color:  #0099ff
    }
    .menupop a+a{
        border-top: 1px solid #ddd;
    }

    /* media */
    @media(max-width: 1024px){
        header .right{
            position: fixed;z-index: 9999;
            background: #fff;
            display: block;
            top: 0;bottom: 0;
            width: 80%;
            height: 100vh;
            max-width: 300px;
            opacity: .5;
        }
        header .right a{
            height: auto;
            display: block;
            text-align: left;
            padding: 16px 20px;
            margin-left: 0;
            border-bottom: 1px solid #ddd;
        }
        header .right a svg{display: none;}
        header .right .active{
            border-color: #ddd;
        }
    }
</style>