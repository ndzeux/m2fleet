<script>
    import { link } from 'svelte-routing'
    import Share from '../../components/Share.svelte'
</script>

<svelte:head>
    <title>Products - Electronic Seal</title>
</svelte:head>

<div class="products row start-xs">
    <div class="menu">
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
        <a href="/products/electronic-seal" class="row middle-xs active" use:link>
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
        <div class="top row middle-xs">
            <div style="text-align:center;width:100%;max-width:360px">
                <img src="/src/img/products/container.jpeg" alt="products">
            </div>
            <div class="first-md last-xs col-xs">
                <h2>Background</h2>
                <p>Electronic seal required by export and import / customs activity to reduce time and cost. This technology will monitoring shipment and secure it.</p>
                <p>Technology should have main features to full fill customs requirement, i.e ( GPS Location capability, Lock and remote open / closed)</p>
                <p>M2Fleet is fleet tracking provider that already implement GPS Eseal and integrate this device with M2Fleet Apps Platform.</p>
            </div>
        </div>
        <h2>3 Features GPS Eseal</h2>
        <div class="middle row">
            <div class="box col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h4>Real Time Crack</h4>
                GPS Eseal will send location to server every one minutes and real time monitoring using M2Fleet web application.
            </div>
            <div class="box col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h4>Lock</h4>
                GPElectronic Seal is lock and featuring with GPS, and could operate remotely using SMS, Application or by RFID
            </div>
            <div class="box col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h4>Reporting</h4>
                Reporting system for trip and idle, vehicle journey, GPS Eseal operationwhere the GPS Eseal Lock, unloack, Arrived at Wharehous and etc.
            </div>
        </div>
        <br>
        <div class="bottom row start-xs middle-xs">
            <div style="text-align:center;width: 200px">
                <img src="/src/img/products/eseal.jpeg" alt="products">
            </div>
            <div class="first-md last-xs">
                <h3>Device Specification</h3>
                - Simple Design<br>
                - Big Capacity Battery and Long Working Time (12000 mAh)<br>
                - Remote online monitor using SMS / Apps<br>
                - Real time position monitoring<br>
                - Safety Monitoring Alarms for illegal unlock.<br>
                - Dimension 195 x 114 x 37 (mm)<br>
                - Waterproof IP 67<br>
                - Working Temperature -20 to 60 (Celsius)<br>
                <h3>Benefit</h3>
                - Full fill Customs Requirement<br>
                - Easy Shipment Monitring<br>
                - Scure & Remote Controling<br>
                - Effective and Efficient , Time and Cost Reduce<br>
                - Reporting System
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
    .ppp h2{
        margin: 12px 0 0 0;
    }
    .ppp h4{
        margin: 12px 0 8px 0;
    }
    .ppp img{
        width: 100%;
    }
    .ppp .top > div{padding: 0;}
    .ppp .middle{
        margin: 0 -12px;
    }
    .ppp .middle .box{
        padding: 0 12px;
    }
    @media(max-width: 1080px){
        .ppp .top{
            flex-direction: column;
        }
    }
</style>