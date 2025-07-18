function toggleNavFunction() {
  if(document.getElementById("toggleNav").style.display === "none") {
    document.getElementById("toggleNav").style.display = "block"
    document.getElementById("toggleButtonNav").innerHTML = `
      <svg class="hover:fill-[#F6665B]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>    
    `
  }
  else{
    document.getElementById("toggleNav").style.display = "none";
    document.getElementById("toggleButtonNav").innerHTML = `
      <svg class="hover:fill-[#F6665B]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    `
  }
}

function handleStaffingDropdown(id,aid){
  if(document.getElementById(id).style.display === "flex"){
    document.getElementById(aid).style.transform = "rotate(0deg)";
    document.getElementById(id).style.display = "none"
  }
  else{
    document.getElementById(aid).style.transform = "rotate(180deg)";
    document.getElementById(id).style.display = "flex"
  }
}


document.querySelector("#nav").innerHTML =  `
    <div class="fixed top-0  z-99 bg-white w-screen border-b-1 open-sans text-[#1C2C46] flex justify-end">
      <div class="w-[86%] py-[0.9rem] flex m-auto justify-between items-center">
      <div><img src="./images/navLogo.png" alt="MongosOrange"/></div>
      <div class="h-full w-[58%] items-center hidden md:block" >
        <ul class="flex w-full justify-between items-center">
          <li><a href="#home"><div class="flex hover:text-[#F6665B] group">
          <svg class="group-hover:fill-[#F6665B]" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1C2C46"><path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z"/></svg> 
            Home</div></a></li>
          <li><div class="flex relative group cursor-pointer">It Services <img src="./images/navArrow.png" alt=">"> 
            <ul class=" absolute hidden z-10 group-hover:flex hover:flex flex-col gap-6 left-0 top-5 bg-white font-medium w-[200px] shadow-2xl p-5">
              <li class="hover:text-[#F6665B]"><a href="">Web Development</a></li>
              <li class="hover:text-[#F6665B]"> <a href=""> App Development</a></li>
              <li class="hover:text-[#F6665B]"> <a href="">Cloud Infrastructure</a></li>
              <li class="hover:text-[#F6665B]"><a href="">Open Source</a></li>
              <li class="hover:text-[#F6665B]"><a href="">Custom Software</a></li>
              <li class="hover:text-[#F6665B]"><a href="">E-Commerse</a></li>
            </ul>
          </div></li>
          <li><div class="flex relative group">Staffing <img src="./images/navArrow.png" alt=">">
             <ul class=" absolute hidden z-10 group-hover:flex hover:flex flex-col gap-6 left-0 top-5 bg-white font-medium w-[230px] shadow-2xl p-5">
              <li class="hover:text-[#F6665B]"><a href="">Offshore Staffing</a></li>
              <li class="hover:text-[#F6665B]"> <a href="">On premise Staffing</a></li>
              <li class="hover:text-[#F6665B]"> <a href="">Contract Sourcing</a></li>
              <li class="hover:text-[#F6665B]"><a href="">Staffing Solutions</a></li>
              <li class="hover:text-[#F6665B]"><a href="">Payroll Outsourcing</a></li>
              <li class="hover:text-[#F6665B]"><a href="">Management Consulting</a></li>
            </ul>
          </div></li>
          <li class="hover:text-[#F6665B]"><a href="#"><div class="flex">Openings</div></a></li>
          <li class="hover:text-[#F6665B]"><a href="#"><div class="flex">About Us</div></a></li>
          <li class="hover:text-[#F6665B]"><a href="#"><div class="flex">Contact</div></a></li>
       </ul>
        </div>
      <div id="toggleButtonNav" onclick="toggleNavFunction()" class="md:hidden visible">
      </div>
    </div>
  </div>
  <div style="top: 50px; height: calc(100vh - 50px);" class="md:hidden visible fixed z-99 w-full h-[100%] overflow-y-auto mt-[50px] ">
    <div id="toggleNav"  class="p-10 open-sans text-2xl bg-white shadow-2xl rounded-xl "> 
      <ul class="flex flex-col gap-6 z-5">
        <li><a href="#"><div class="flex hover:text-[#F6665B] group">
        <svg class="group-hover:fill-[#F6665B]" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1C2C46"><path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z"/></svg> 
          Home</div></a></li>
        <li><div onclick="handleStaffingDropdown('servicesDropdown','serviceArrow')" class="flex flex-col group cursor-pointer"><span class="flex">It Services <img id="serviceArrow" src="./images/navArrow.png"  alt=">"></span>
          <ul id="servicesDropdown" class=" hidden flex-col gap-6 rounded right-20 top-5 bg-white font-medium w-[230px] shadow-2xl p-5">
            <li class="hover:text-[#F6665B]"><a href="">Web Development</a></li>
            <li class="hover:text-[#F6665B]"><a href="">App Development</a></li>
            <li class="hover:text-[#F6665B]"><a href="">Cloud Infrastructure</a></li>
            <li class="hover:text-[#F6665B]"><a href="">Open Source</a></li>
            <li class="hover:text-[#F6665B]"><a href="">Custom Software</a></li>
            <li class="hover:text-[#F6665B]"><a href="">E-Commerse</a></li>
          </ul>
        </div></li>
        <li><div onclick="handleStaffingDropdown('staffingDropdown','staffingArrow')" class="flex flex-col group cursor-pointer"><span class="flex">Staffing <img id="staffingArrow" src="./images/navArrow.png"  alt=">"></span>
          <ul id="staffingDropdown" class=" hidden flex-col gap-6 rounded right-20 top-5 bg-white font-medium w-[230px] shadow-2xl p-5">
            <li class="hover:text-[#F6665B]"><a href="">Offshore Staffing</a></li>
            <li class="hover:text-[#F6665B]"> <a href="">On premise Staffing</a></li>
            <li class="hover:text-[#F6665B]"> <a href="">Contract Sourcing</a></li>
            <li class="hover:text-[#F6665B]"><a href="">Staffing Solutions</a></li>
            <li class="hover:text-[#F6665B]"><a href="">Payroll Outsourcing</a></li>
            <li class="hover:text-[#F6665B]"><a href="">Management Consulting</a></li>
          </ul>
        </div></li>
        <li class="hover:text-[#F6665B]"><a href="#"><div class="flex">Openings</div></a></li>
        <li class="hover:text-[#F6665B]"><a href="#"><div class="flex">About Us</div></a></li>
        <li class="hover:text-[#F6665B]"><a href="#"><div class="flex">Contact</div></a></li>
      </ul>
    </div>
  </div>
`

document.getElementById("toggleNav").style.display = "none";
    document.getElementById("toggleButtonNav").innerHTML = `
      <svg class="hover:fill-[#F6665B]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    `