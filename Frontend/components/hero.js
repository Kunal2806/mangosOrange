document.querySelector("#hero").innerHTML = `
  <div class="relative flex gap-5 h-[576px] w-full justify-center items-center">
    <div class="md:relative z-10 bg-white md:bg-transparent p-8 md:p-0 rounded-xl md:shadow-none shadow-2xl absolute flex flex-col gap-[49px] poppins font-bold text-[36px] text-[#1C2C46]">
      <p>Your Partner for <br>
        <span id="staffText" class="inline-block text-[#F6665B]">Staffing</span> and 
        <span id="supportText" class="text-[#F6665B]">IT Support</span>
      </p>
      <p class="text-[20px] font-normal">We help you find the right talent and<br>
        support your IT needs—quickly and efficiently.
      </p>
      <div class="flex gap-15">
        <div class=" parentButtonAnimate1 overflow-hidden relative h-[52px] w-[144px] open-sans font-bold text-[15px] text-white flex items-center justify-center border border-[#F6665B] bg-[#F6665B] rounded-2xl hover:cursor-pointer hover:shadow-xl">
          <span class="z-10">Join Us Now</span>
          <span class="buttonBgAnimate1 absolute z-0 top-0 w-[100%] h-[100%] -right-[100%] text-[#F6665B] bg-white "></span>
        </div>
        <div class=" parentButtonAnimate2 overflow-hidden relative h-[52px] w-[144px] open-sans font-bold text-[15px] flex items-center justify-center border border-[#F6665B] bg-white rounded-2xl hover:cursor-pointer hover:shadow-xl text-[#F6665B] ">
          <span class="z-10">Read More</span>
          <span class="buttonBgAnimate2 absolute z-0 top-0 w-[100%] h-[100%] -right-[100%]  bg-[#F6665B]"></span>
        </div>
      </div>
    </div>
    <div class="md:relative absolute h-[509px] rounded-2xl overflow-hidden">
      <img class="opacity-70" src="./images/heroImg 1.png" alt="mongosOrangeBanner" />
    </div>
  </div>
`;

gsap.from("#hero", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

document.querySelectorAll(".parentButtonAnimate1").forEach(button => {
  const textSpan1 = button.querySelector("span:not(.buttonBgAnimate1)");

  button.addEventListener("mouseenter", () => {
    gsap.to(button.querySelector(".buttonBgAnimate1"), {
      x: "-100%",
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(textSpan1, {
      color: "#F6665B",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button.querySelector(".buttonBgAnimate1"), {
      x: "0%",
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(textSpan1, {
      color: "white",
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

document.querySelectorAll(".parentButtonAnimate2").forEach(button => {
  const textSpan2 = button.querySelector("span:not(.buttonBgAnimate2)");

  button.addEventListener("mouseenter", () => {
    gsap.to(button.querySelector(".buttonBgAnimate2"), {
      x: "-100%",
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(textSpan2, {
      color: "white",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button.querySelector(".buttonBgAnimate2"), {
      x: "0%",
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(textSpan2, {
      color: "#F6665B",
      duration: 0.3,
      ease: "power2.out"
    });
  });
});