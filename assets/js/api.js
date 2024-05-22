async function fetchData() {
    const res = await fetch("assets/project/listProjects.json");
    const data = await res.json();

    const container = document.getElementById("portfolio-container");
    
    data.forEach(project => {
        const elm = document.createElement('div')

        elm.innerHTML = `
        <div class="portfolio-box">
        <img src="${project.image}" alt="">
        <div class="portfolio-layer">
          <h4>${project.title}</h4>
          <a href="projects.html?id=${project.id}"><i class="bx bx-link-external"></i></a>
        </div>  
      </div>
        `

        container.appendChild(elm)
    });
}

fetchData()

async function fetchById() {

    const urlParam = new URLSearchParams(window.location.search);
    const projectId = urlParam.get('id');
    const res = await fetch("assets/project/listProjects.json");
    const data = await res.json();

    const project = data.find(project => project.id === projectId);

    const title = document.getElementById('title')
    const image = document.getElementById('image')
    const desc = document.getElementById('desc')
    const skill = document.getElementById('skills')
    const label = document.getElementById('label-cont')
    const content = document.getElementById('contribute')
    const btn = document.getElementById('btn-box')

    title.innerHTML = project.title
    image.innerHTML = `<img src="${project.image}" alt="${project.title}">`
    desc.innerHTML = project.description

    if(project.contribute.length > 0) {
        label.innerHTML = "Contributions:"
    }

    project.contribute.forEach(element => {
        content.innerHTML += `<li>${element}</li>`
    });


    project.tools.forEach(element => {
      skill.innerHTML += `<div class="skill">${element}</div>`
    });

    if(project.linklive.length > 0){
        btn.innerHTML = `
            <a href="${project.linklive}" class="btn">LIVE DEMO</a>
            <a href="${project.linksc}" class="btn">SOURCE CODE</a>
        `
    } else {
        btn.innerHTML = `
            <a href="${project.linksc}" class="btn">SOURCE CODE</a>
        `
    }
}

fetchById()