<script>
    import { link } from 'svelte-routing'
    import Share from '../../components/Share.svelte'
</script>

<svelte:head>
    <title>Solutions - Taxi</title>
</svelte:head>

<div class="products row start-xs">
    <div class="menu">
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
        <a class="row middle-xs active" href="/solutions/taxi" use:link>
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
    </div>
    <div class="ppp col-sm col-xs-12">
        <h2>Tracking and dispatch solution for Taxi Companies</h2>
        Taxi companies report that their customers get less waiting time and that the Taxi fleet has less time without customers in the taxi. The service for the Taxi company can be improved by publishing real time position of the taxi that is on its way to pick up customer or if there are available taxis at a taxi stand.
        <div style="text-align:center;padding:16px 0">
            <img src="/src/img/solutions/t4xi.png" alt="Solutions">
        </div>
        <h2>Business problems Taxi companies solve with M2Fleet</h2>
        <h3>Need to quickly locate the calling customer and find the closest available vehicle</h3>
        It is expensive for a taxi company to drive without customers in the vehicle or to have idle time between customers. Without a tracking system it can be challenging to quickly locate the calling customer and assign a suitable taxi.
        <p>Solution: M2Fleet helps the dispatcher to quickly find the address of the calling customer and pick the closest available taxi from a map. Taxi companies can add attributes to the vehicles in M2Fleet so that when a special type of vehicle is needed it is easy to find (e.g. a vehicle with 6 seats). Points of interest (POI) can also be added to the map to make it easier to locate customers without an exact address (e.g. "I am next to the Great Stores shopping mall").</p>
        <h3>Need to Quickly inform the Taxi driver about the next pickup location</h3>
        It can be difficult to tell a taxi driver where to go as he is driving his vehicle and not available to speak on the mobile phone or radio.
        <p>Solution: When the dispatcher has identified the closest, available and most suitable vehicle for a pick-up its possible to assign this vehicle to the job. The location of the customer can automatically be sent to a Garmin device so that the driver can start navigation directly after accepting the new job. The dispatcher can either chat with the driver in the Garmin device or by using text messages from M2Fleet to the drivers mobile phone (to be used when the driver is not driving). The contact details of the customer can be sent to the Taxi driver in case its needed.</p>
        <h3>Need to know how the Taxi fleet is used</h3>
        There are several parties involved in running a Taxi operation (Driver, Owner of the Taxi and Dispatcher). All parties want to have historical information about the fleet in order to run the business in an effective way.
        <p>Solution: In M2Fleet all tracking history can be stored and is available for reporting. You can count the total idle time for the fleet or the total time without customers in the Taxi. The parties can also get distance reports describing where the taxi has been during the day. The reporting data can be emailed to users for improving the overall performance of the fleet and to make sure the parties are paid correctly.</p>
        <h3>Need to inform end customers of the location of the Taxi</h3>
        It can be frustrating for the end customer to wait for the taxi without knowing when it will arrive. Often the customers call back to the dispatcher to get the status to the taxi that has been ordered. In situations where the Taxi company has a Taxi stand a customer can hesitate to go there if there might be no waiting taxis.
        <p>Solution: With M2Fleet the Taxi company can publish the position of the vehicle that has been dispatched in a real time web interface. In the simple end user interface the customer can see if there are available taxis at the taxi stand.</p>
        <h3>Need to minimize the risk for the Taxi driver</h3>
        Taxi drivers are at constant risk of theft or other dangerous situations. In an emergency situation it might be hard for the driver to pick up the phone to get help.
        <p>Solution: In M2Fleet you can get SOS alarms from the driver. The alarms can be displayed in a web interface or sent by SMS and email to supervisors. When an incident occurs the real time position of the incident can be forwarded to a security company or the police in a light weight mobile phone interface. M2Fleet can also generate automatic alarms if a vehicle is leaving a predefined area.</p>



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
        width: 172px;
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
        font-size: 24px;
        line-height: 30px;
        margin: 16px 0 4px 0;
    }
    .ppp h2:first-child{
        margin: 0 0 8px 0;
    }
    .ppp h3{
        margin: 16px 0 8px 0;
    }
    .ppp p{
        margin: 8px 0;
    }
    .ppp img{
        width: 100%;
        max-width: 600px;
    }
</style>