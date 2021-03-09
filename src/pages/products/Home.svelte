<script>
    import { link } from 'svelte-routing'
    import Share from '../../components/Share.svelte'
</script>

<svelte:head>
    <title>Products</title>
</svelte:head>

<div class="products row start-xs">
    <div class="menu">
        <a href="/products" class="row middle-xs active" use:link>
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
    </div>
    <div class="ppp col-sm col-xs-12">
        <h1>M2M Solution for every company, everywhere</h1>
        M2Fleet makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.
        <br><br>
        <div class="data row start-xs">
            <div class="box col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div style="text-align:center;min-height:180px" class="row middle-xs center-xs">
                    <img src="/src/img/products/4pps.png" alt="products">
                </div>
                <h2>Keep track of your assets wherever they go</h2>
                Gain real-time insight into the location of your organization's valuable assets, from vehicles, to people, shipments, equipment and more. Integrate M2Fleet Platform services into your applications, quickly and cost-effectively, to keep the data you need at your fingertips and increase your decision making power. here to see detail
            </div>
            <div class="box col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div style="text-align:center;min-height:180px" class="row middle-xs center-xs">
                    <img src="/src/img/products/m2fleet_dispatch_jobsya.jpg" alt="products">
                </div>
                <h2>Vehicle Routing Solution</h2>
                M2Fleet Route optimizes business resource usage. Every organization faces planning problems: provide products or services with a limited set of constrained resources (employees, assets, time and money). M2Fleet Route optimizes such planning to do more business with less resources. M2Fleet Route combines optimization heuristics and meta-heuristics with very efficient score calculation. here to see detail
            </div>
            <div class="box col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div style="text-align:center;min-height:180px" class="row middle-xs center-xs">
                    <img src="/src/img/products/m2fleet_n4v1a.png" alt="products">
                </div>
                <h2>GPS & Navigation Base on Android</h2>
                Global Mobile Map Viewing and Navigation for Online and Offline using OSM Map. here to see detail
            </div>
        </div>
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
        font-size: 24px;
        line-height: 32px;
        margin: 0 0 8px 0;
    }
    .ppp h2{
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 4px;
    }
    .ppp img{
        width: 100%;
        max-width: 300px;
    }
    .ppp .data{
        margin: 0 -16px;
    }
    .ppp .box{
        padding: 0 16px;
        margin-bottom: 16px;
    }
</style>