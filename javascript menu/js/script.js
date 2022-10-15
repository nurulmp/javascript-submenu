(()=>{
	
const openNavMenu=document.querySelector(".open-nav-menu"),
 closeNavMenu=document.querySelector(".close-nav-menu"),
 navMenu=document.querySelector(".nav-menu"),
 menuOverlay=document.querySelector(".menu-overly"),
 mediaSize=991;
	
	openNavMenu.addEventListener("click", toggleNav);
	closeNavMenu.addEventListener("click", toggleNav);

	menuOverlay.addEventListener("click", toggleNav);

	function toggleNav(){
		navMenu.classList.toggle("open");
		menuOverlay.classList.toggle("active");
		ocument.body.classList.toggle("hidden-scrolling");
	}
	navMenu.addEventListener("click",(event)=>{
		if (event.target.hasAttribute("data-toggle") && window.innerWidth<=mediaSize) {
			//prevent default ancor click behavior
			event.preventDefault();
			const menuIteamHasChildren=event.target.parentElement;
			//if menuIteamHasChildren is already ecpanded collapse it
			if (menuIteamHasChildren.classList.contains("active")){
				collapseSubMenu();
			}
			else{
				//collapse exting expanded menuIteamHasChildren
			if(navMenu.querySelector(".menu-iteam-has-childrean.active")){
				collapseSubMenu();
			}
			//expand new menuIteamHasChildren
			menuIteamHasChildren.classList.add("active");
			const subMenu=menuIteamHasChildren.querySelector(".submenu");
			subMenu.style.maxHeight=subMenu.scrollHeight + "px";
		}
		}
	});
	function collapseSubMenu(){
		navMenu.querySelector(".menu-iteam-has-childrean.active .submenu")
		.removeAttribute("style");
		navMenu.querySelector(".menu-iteam-has-childrean.active")
		.classList.remove("active");
	}

	function resizeFix(){
		if (navMenu.classList.contains("open")) {
			toggleNav();
		}	
		if(navMenu.querySelector(".menu-iteam-has-childrean.active")){
				collapseSubMenu();
		}
	}
	window.addEventListener("resize",function(){
		if (this.innerWidth > mediaSize) {
			resizeFix();
		}

	});
})();
