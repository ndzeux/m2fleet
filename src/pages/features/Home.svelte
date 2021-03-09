<script>
    import { link } from 'svelte-routing'
    import Share from '../../components/Share.svelte'
</script>

<svelte:head>
    <title>Features</title>
</svelte:head>

<div class="products row start-xs">
    <div class="menu">
        <a class="row middle-xs active" href="/features" use:link>
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
    </div>
    <div class="ppp col-sm col-xs-12">
        <h2>Dozen Features</h2>
        M2Fleet build refers to the management of the company or organization on transport resources or vehicles which includes a variety of activities, including the financing of the vehicle, tracking, fuel monitoring and vehicle maintenance. This solution can help companies reduce risk, increase efficiency, reduce fuel costs and maintenance and ensure the health and safety of the vehicle.
        <h2>Most Popular Features</h2>
        <div class="data row start-xs">
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/real-time-tracking" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f1.png" alt="Features">
                    </div>
                    <h3>Real Time Tracking</h3>
                    You can follow vehicles-assets on a map in real time. Up-to-date vehicle locations and status information keeps you in control. You can configure alerts for important signals or unexpected vehicle usage, or send them over email, SMS
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/job-dispatch" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f2.png" alt="Features">
                    </div>
                    <h3>Job Dispatch</h3>
                    Optimize and improve your business with our powerful and easy job management tool. Take advantage of your mobile devices and have your jobs under control
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/rules-&-alerts" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f3.png" alt="Features">
                    </div>
                    <h3>Rules & Alerts</h3>
                    Configure various business Rules & Alerts to notify every event base on devices or your own business rules and send via SMS, Email, Map Alerts which can be sent to you, your fleet manager or any configured mobile number / email for events like arrival, departure, or violation of any rule.
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/vehicle-maintenance" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f4.png" alt="Features">
                    </div>
                    <h3>Vehicle Maintenance</h3>
                    You can log your vehicle maintenance activities accumulator feature for counting vehicle data information such a Km, engine hours or time period services and notify to fleet manager.
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/fuel-consumption" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f5.png" alt="Features">
                    </div>
                    <h3>Fuel Consumption</h3>
                    Real monitoring fuel consumption by install fuel sensor extension, the sensor will read the actual consumption and sent using GPS devices to the server
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/reporting" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f6.png" alt="Features">
                    </div>
                    <h3>Reporting</h3>
                    Dozen of report already provide when implement our solution such driver journal, trip & idle, tracking, maintenance and also customize the user needed.
                </a>
            </div>
        </div>
        <br>
        <h2>Extension Features</h2>
        <div class="data row start-xs">
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/camera-integration" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f7.png" alt="Features">
                    </div>
                    <h3>Camera Integration</h3>
                    Capturing the picture inside/outside of vehicle using the camera extension devices. Some of the company need to apply this feature for their purpose
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/temperature-sensor" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f8.png" alt="Features">
                    </div>
                    <h3>Temperature Sensor</h3>
                    The temperature sensor enables temperature measurement applications for preventing losses especially in refrigerated Container Tracking for the Chilled Supply Chain Industry and other temperature sensitive assets                    
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/fuel-sensor" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f9.png" alt="Features">
                    </div>
                    <h3>Fuel Sensor</h3>
                    Fuel sensor integration to monitor fuel consumption for the actual usage of fuel / g4soline on the vehicle and sent to the server using GPS Devices
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/rfid-receiver-&-reader" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f10.png" alt="Features">
                    </div>
                    <h3>RFID Receiver & Reader</h3>
                    Provides complete solution to help you identify, monitor, track, locate and manage key objects using individual or combined RFID and GPS systems to ensure seamless end-to-end tracking and visibility
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="#/" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f11.png" alt="Features">
                    </div>
                    <h3>API Integration</h3>
                    Our solution could integrate with feeder system by using API Integration for customizing the client need.
                </a>
            </div>
            <div class="box col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href="/features/mobile-application" use:link>
                    <div style="text-align:center">
                        <img src="/src/img/features/f12.png" alt="Features">
                    </div>
                    <h3>Mobile Application</h3>
                    Mobile application enabled to monitor your fleet anywhere, any-time
                </a>
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
        width: 200px;
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
        font-size: 20px;
        margin: 12px 0;
    }
    .ppp h2:first-child{
        margin: 0 0 4px 0;
    }
    .ppp img{
        height: 200px;
        width: auto;
        max-width: 300px;
        transform: scale(0.9);
        transition: transform .3s;
    }
    .ppp img:hover{
        transform: scale(1);
    }
    .ppp .data{
        margin: 0 -16px;
    }
    .ppp .box{
        padding: 0 16px;
        margin-bottom: 16px;
    }
    .ppp .box a{
        color: inherit;
    }
    .ppp .box a h3{
        margin: 0;
    }
</style>