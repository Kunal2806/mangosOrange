const route = {
    home: `
        <section id="hero"></section>
        <section id="solutionWeOffer"></section>
        <section id="whyUs"></section>
        <section id="clients"></section>
    `
}
function loadRoute (){
    const hash = location.hash.replace('#','') || 'home';
    const content = route[hash];
    if(content){
        const main = document.getElementById('main');
        main.innerHTML = content;
        
        const script = {
            home: [
                './components/hero.js',
                './components/solutionWeOfffer.js',
                './components/whyUs.js',
                './components/clients.js',
            ]
        }

        script[hash].forEach((src) => {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        });
    } else{
        document.getElementById("main").innerHTML = `<h1>404 not found</h1>`
    }
}
window.addEventListener('load',loadRoute);
window.addEventListener('hashchange',loadRoute);

