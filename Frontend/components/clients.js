const clientImg = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLuOSRw_LnJJXQm6xEXdi-flN3F3bB7yF2A&s",
];

document.querySelector("#clients").innerHTML = `
  <div class="flex flex-col justify-center w-full my-10">
    <div class="flex justify-center items-center flex-col"> 
      <p class="poppins font-semibold text-[24px] text-[#1C2C46]"> Our Clients </p>
      <div class="w-28 border-b-2 border-[#F6665B] mt-1"></div>
    </div>

    <div class="overflow-x-auto max-w-full hideScrollbar scroll-grab active:cursor-grabbing">
      <div id="clientLogo" class="flex gap-[10px] pt-10 w-max">
      </div>
    </div>
  </div>
`;

const clientLogodivs = document.getElementById("clientLogo");

clientImg.forEach((url, index) => {
  const logodivs = document.createElement('img');
  logodivs.loading = "lazy";
  logodivs.className = "md:w-[250px] w-[200px] h-[200px] md:h-[250px] shadow-xl object-contain object-center grayscale hover:grayscale-0 hover:scale-105 transition duration-300 ease-in-out cursor-pointer";
  logodivs.src = url;
  logodivs.alt = `Client logo ${index + 1}`;
  logodivs.dataset.index = index;
  clientLogodivs.appendChild(logodivs);
});

const scrollContainer = document.querySelector('.scroll-grab');
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDown = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});
scrollContainer.addEventListener('mouseleave', () => isDown = false);
scrollContainer.addEventListener('mouseup', () => isDown = false);
scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 1.5;
  scrollContainer.scrollLeft = scrollLeft - walk;
});

const scrollStep = 210;
const scrollInterval = 1500;

setInterval(() => {
  if (!isDown) {
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (scrollContainer.scrollLeft + 1 >= maxScroll) {
      scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      setTimeout(updateActiveDot, 400); 
    } else {
      scrollContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
  }
}, scrollInterval);
