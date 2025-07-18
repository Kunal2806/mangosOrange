document.querySelector("#whyUs").innerHTML = `
    <div class=" w-full flex md:flex-row flex-col justify-evenly items-center py-20 gap-y-20">
        <div class="flex flex-col justify-center open-sans">
            <p class="font-normal text-[40px]">why MangosOrange</p>
            <p class="font-bold text-[64px] text-[#F6665B]"><span id="beneficersCount">0</span> +</p>
            <p class="pl-2 font-light text-[32px]">Beneficers</p>
        </div>
        <div class="flex relative" id="trigger">
            <div class="md:static absolute bottom-15 right-12.5 z-4 grid grid-cols-1 gap-10">
                <div class=" border-r-4 md:border-r-0 md:border-l-4 border-[#D9D9D9] flex gap-2 px-5 items-center">
                    <p class="font-bold md:text-[32px] text-[30px] text-[#F6665B]"><span id="clientsCount">0</span> +</p>
                    <p class="font-normal md:text-[20px] text-[15px]">Happy Clients</p>
                </div>
                <div class="border-r-4 md:border-r-0 md:border-l-4 border-[#D9D9D9] flex gap-2 px-5 items-center">
                    <p class="font-bold md:text-[32px] text-[30px] text-[#F6665B]"><span id="locationCount">0</span> +</p>
                    <p class="font-normal md:text-[20px] text-[15px]">Locations</p>
                </div>
                <div class="border-r-4 md:border-r-0 md:border-l-4 border-[#D9D9D9] flex gap-2 px-5 items-center">
                    <p class="font-bold md:text-[32px] text-[30px] text-[#F6665B]"><span id="centreCount">0</span> +</p>
                    <p class="font-normal md:text-[20px] text-[15px]">Centre</p>
                </div> 
            </div>
            <video class=" w-full md:w-[400px]" autoplay muted playsinline >
            <source src="./images/zigzag_line_graph.mp4" type="video/mp4">
            </video>
        </div>
    </div>
`

function animateCount(id, targetValue) {
    const obj = {val: 0};
    ScrollTrigger.create({
        trigger: id,
        start: "top 80%",
        once: true,
        onEnter: () =>{
            gsap.to(obj,{  
            val: targetValue,      
            duration: 2,
            ease: "power1.out",
            onUpdate : function() {
                    const round = Math.floor(obj.val);
                    document.querySelector(id).innerText = round.toLocaleString();
                },
            })
        }
    })
}

animateCount("#beneficersCount",10000);
animateCount("#clientsCount",100);
animateCount("#locationCount",12);
animateCount("#centreCount",15);