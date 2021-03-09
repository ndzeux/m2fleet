<script>
	import { Router, Route, link as links } from "svelte-routing"

	import Header from './components/Header.svelte'
	import Chat from './components/Chat.svelte'
	
	import Home from "./pages/Home.svelte"
	import Products from "./pages/products/Home.svelte"
	import Products1 from "./pages/products/P1.svelte"
	import Products2 from "./pages/products/P2.svelte"
	import Products3 from "./pages/products/P3.svelte"
	import Products4 from "./pages/products/P4.svelte"
	import Solutions from "./pages/solutions/Home.svelte"
	import Transportation from "./pages/solutions/S1.svelte"
	import Utility from "./pages/solutions/S2.svelte"
	import CarRental from "./pages/solutions/S3.svelte"
	import Taxi from "./pages/solutions/S4.svelte"
	import AssetTracking from "./pages/solutions/S5.svelte"
	import ColdChainLogistics from "./pages/solutions/S6.svelte"
	import Features from "./pages/features/Home.svelte"
	import RealTimeTracking from "./pages/features/F1.svelte"
	import JobDispach from "./pages/features/F2.svelte"
	import RulesnAlers from "./pages/features/F3.svelte"
	import VehicleMaintenance from "./pages/features/F4.svelte"
	import FuelConsumption from "./pages/features/F5.svelte"
	import CameraIntegration from "./pages/features/F6.svelte"
	import TemperatureSensor from "./pages/features/F7.svelte"
	import RfidReceivernReader from "./pages/features/F8.svelte"
	import MobileApplication from "./pages/features/F9.svelte"
	import Blog from "./pages/blog/Home.svelte"
	import BlogPost from "./pages/blog/Post.svelte"
	import Contact from "./pages/Contact.svelte"
	import Resources from "./pages/Resources.svelte"
	
	import Dashboard from "./pages/dashboard/Home.svelte"
	import Post from "./pages/dashboard/posts/Home.svelte"
	import CreatePost from "./pages/dashboard/posts/Create.svelte"
	import UpdatePost from "./pages/dashboard/posts/Update.svelte"
	import FileManager from "./pages/dashboard/file-manager/Home.svelte"
	
	import Login from "./pages/dashboard/Login.svelte"

	export let url = ""
	
	let link = location.pathname
	function detectUrl(){
		requestAnimationFrame(()=>{
			if(link != location.pathname){
				link = location.pathname;
				window.scrollTo(0,0)
			}
        });
	}
	window.onpopstate = () => {
		link = location.pathname
	}

	let checkLogin = async () => {
		if(link.indexOf("/dashboard") == -1){
			return false
		}
		const f = await fetch(`/check-login`, { method: "POST" })
		const r = await f.json()
		if(r.status == "failed"){
			location.assign('/login')
		}
		return r
	}

	$: if(link.indexOf("/dashboard") > -1){
		checkLogin()
	}

	let appWidth = 0

	let menu, menuBtn, menuWidth, sh
	let showMenu = () => {
		sh = !sh
		if(sh){
			menuBtn.style.left = (menuWidth - 1) + "px"
			menu.style.left = 0;
		} else {
			menuBtn.style.left = "0"
			menu.style.left = "-300px";
		}
	}
	let closeMenu = () => {
		if(sh && appWidth <= 756){
			sh = !sh
			menuBtn.style.left = "0"
			menu.style.left = "-300px";
		}
	}

	window.addEventListener("resize", () => {
		if(link.indexOf('/dashboard') > -1){
			if(appWidth > 756){
				sh = false
				showMenu()
			} else if(appWidth <= 756) {
				sh = true
				showMenu()
			}
		}
	})
</script>

<div id="app" on:click={detectUrl} bind:offsetWidth="{appWidth}">
	<Header currurl={link} />
	<Router url="{url}">
		<Route path="*"><span style="display:block;text-align:center;width: calc(100% - 32px);position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">Halaman Tidak Ditemukan</span></Route>
		<Route path="/"><Home /></Route>
		<Route path="/products"><Products /></Route>
		<Route path="/products/vehicle-tracking-&-management"><Products1 /></Route>
		<Route path="/products/electronic-seal"><Products2 /></Route>
		<Route path="/products/advance-security-solutions"><Products3 /></Route>
		<Route path="/products/wireless-camera-system"><Products4 /></Route>
		<Route path="/solutions"><Solutions /></Route>
		<Route path="/solutions/transportation"><Transportation /></Route>
		<Route path="/solutions/utility"><Utility /></Route>
		<Route path="/solutions/car-rental"><CarRental /></Route>
		<Route path="/solutions/taxi"><Taxi /></Route>
		<Route path="/solutions/asset-tracking"><AssetTracking /></Route>
		<Route path="/solutions/cold-chain-logistics"><ColdChainLogistics /></Route>
		<Route path="/features"><Features /></Route>
		<Route path="/features/real-time-tracking"><RealTimeTracking /></Route>
		<Route path="/features/job-dispatch"><JobDispach /></Route>
		<Route path="/features/rules-&-alerts"><RulesnAlers /></Route>
		<Route path="/features/vehicle-maintenance"><VehicleMaintenance /></Route>
		<Route path="/features/fuel-consumption"><FuelConsumption /></Route>
		<Route path="/features/camera-integration"><CameraIntegration /></Route>
		<Route path="/features/temperature-sensor"><TemperatureSensor /></Route>
		<Route path="/features/rfid-receiver-&-reader"><RfidReceivernReader /></Route>
		<Route path="/features/mobile-application"><MobileApplication /></Route>
		<Route path="/blog"><Blog /></Route>
		<Route path="/blog/*"><BlogPost /></Route>
		<Route path="/resources"><Resources /></Route>
		<Route path="/contact"><Contact /></Route>
		{#await checkLogin()}
		<span style="display:block;text-align:center;width: calc(100% - 32px);position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);background:#fff;">Loading...</span>
		{:then isLogin}
		{#if isLogin.status == "success" && link.indexOf("/dashboard") > -1}
		<div class="dashboard row">
			<div class="menu" bind:this="{menu}" bind:offsetWidth="{menuWidth}">
				<a href="/dashboard" use:links on:click="{closeMenu}" class="row middle-xs" style="{(link == "/dashboard" || link == "/dashboard/" ? 'color:#0babeb':'')}">
					<svg style="width:22px;height:22px;margin-right:3px" viewBox="0 0 24 24">
						<path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
					</svg>
					Welcome
				</a>
				<a href="/dashboard/post" use:links on:click="{closeMenu}" class="row middle-xs" style="{(link.indexOf("/dashboard/post") > -1 || link.indexOf("/dashboard/create-post") > -1 || link.indexOf("/dashboard/update-post") > -1 ? 'color:#0babeb':'')}">
					<svg style="width:18px;height:18px;margin-right:5px" viewBox="0 0 24 24">
						<path fill="currentColor" d="M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z" />
					</svg>
					Manage Posts
				</a>
				<a href="/dashboard/file-manager" use:links on:click="{closeMenu}" class="row middle-xs" style="{(link.indexOf("/dashboard/file-manager") > -1 ? 'color:#0babeb':'')}">
					<svg style="width:18px;height:18px;margin-right:6px" viewBox="0 0 24 24">
						<path fill="currentColor" d="M7,15L11.5,9L15,13.5L17.5,10.5L21,15M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z" />
					</svg>
					File Manager
				</a>
			</div>
			<button bind:this="{menuBtn}" class="mid-mobile row middle-xs center-xs" on:click={showMenu}>
				<svg style="width:32px;height:32px;pointer-events:none" viewBox="0 0 24 24">
					<path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
				</svg>
			</button>
			<div class="right col-sm col-xs-12">
				<Route path="/dashboard"><Dashboard /></Route>
				<Route path="/dashboard/post"><Post /></Route>
				<Route path="/dashboard/create-post"><CreatePost /></Route>
				<Route path="/dashboard/update-post/:link" let:params><UpdatePost plink="{params.link}" /></Route>
				<Route path="/dashboard/file-manager"><FileManager /></Route>
			</div>
		</div>
		{/if}
		{/await}
		<Route path="/login"><Login /></Route>
	</Router>
	{#if link.indexOf('/dashboard') == -1}
	<Chat />
	{/if}
</div>

<style>
	#app{
		position: static!important;
	}
	.dashboard{
		width: 100%;
		max-width: 1248px;
		margin: 0 auto;
		height: calc(100vh - 64px);
	}
	.dashboard .menu{
		position: relative;
		left: 0;
		width: 50%;
		max-width: 300px;
		background: #fff;
		box-sizing: border-box;
		margin-left: -1px;
		border-right: 1px solid #ddd;
		border-left: 1px solid #ddd;
		height: calc(100vh - 64px);
	}
	.dashboard .menu a{
		padding: 12px 16px;
		border-bottom: 1px solid #ddd;
		color: #444;
		transition: color .3s;
	}
	.dashboard .menu a:hover{
		color: #0babeb;
	}
	.mid-mobile{
		display: none;
		background: #fff;
		border: 1px solid #ddd;
		margin: 0;
		border-radius: 0 100% 100% 0;
		padding: 16px 16px 16px 8px;
		transition: left .3s;
		cursor: pointer;
	}
	@media(max-width: 756px){
		.dashboard .menu{
			position: fixed!important;z-index: 999;
			top: 64px;
			left: -300px;
			transition: left .3s;
		}
		.mid-mobile{
			display: flex;
			position: absolute;z-index: 99;
			bottom: 16px;
			left: 0;
		}
	}
	.dashboard .right{
        padding: 12px 16px 16px 16px;
        position: relative;
        height: calc(100vh - 80px);
        overflow: auto;
	}
</style>