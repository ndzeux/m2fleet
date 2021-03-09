<script>
    import { link } from 'svelte-routing'
    import Share from '../../components/Share.svelte'
</script>

<svelte:head>
    <title>Products - Vehicle Tracking Management</title>
</svelte:head>

<div class="products row start-xs">
    <div class="menu">
        <a href="/products" class="row middle-xs" use:link>
            <svg viewBox="0 0 24 24" style="width:20px;height:20px;margin-right:4px">
                <path fill="currentColor" d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path>
            </svg> Products
        </a>
        <a href="/products/vehicle-tracking-&amp;-management" class="row middle-xs active" use:link>
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
    </div>
    <div class="ppp col-sm col-xs-12">
        <img src="/src/img/products/4pps.png" alt="products">
        <h1>Mobile Asset Management</h1>
        <b>Keep track of your assets wherever they go</b><br>
        Gain real-time insight into the location of your organization's valuable assets, from vehicles, to people, shipments, equipment and more. Integrate M2Fleet Platform services into your applications, quickly and cost-effectively, to keep the data you need at your fingertips and increase your decision making power.
        <br><br>
        <a href="/solutions" use:link><button>Learn More</button></a>
    </div>
</div>

<Share />

<style>
    .products{
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding-bottom: 64px;
    }
    .menu{
        width: 260px;
        padding: 16px;
    }
    .menu a{
        color: #444;
        padding: 8px 0;
        transition: color .3s;
    }
    .menu a:hover{
        color: #0babeb;
    }
    .menu .active{
        color: #0babeb;
    }
    .ppp{
        padding: 16px;
    }
    .ppp h1{
        font-size: 36px;line-height: 40px;
        margin: 16px 0 8px 0;
    }
    .ppp b{
        font-size: 22px;
        margin: 4px 0 8px 0;
    }
    .ppp img{
        width: 100%;
        max-width: 500px;
    }
    .ppp button{
        background: #203040;
        border: 1px solid #203040;
        padding: 15px 20px;
        border-radius: 8px;
        color: #fff;
        transition: background 0.3s, color 0.3s;
        cursor: pointer;
    }
    .ppp button:hover{
        background: #fff;   
        color: #203040;
    }
</style>