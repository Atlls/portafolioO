'use strict';

class Interface {

	constructor() 
	{
		this.init();
	}

	init() 
	{
		this.putProjects();
	}

	// Inyecta las cajas de los tipos de proyectos y sus respectivas card's de proyecto a partir de un archivo json.
	async putProjects()
	{
		const projects = await api.getProjects();

		// Variable de inyeción.
		let out = '';

		projects.forEach( objProjects => 
		{
			// Denominación de los proyecto.
			out += `
				<div class="container grey darken-3">
					<div class="row">
						<div class="col s12 center-align white-text">
							<h5>${objProjects[0]}</h5>
						</div>
					</div>
					<div class="row">
			`;

			// Procesar inyección de cartas de proyecto
			objProjects.forEach( (project,i) =>
			{
				// Saltar el 0 porque de 1 en adelante están los objetos de las cartas a inyectar.
				if(i > 0)
				{
					out += `
						<div class="card col m6 grey hoverable z-depth-1">
							<div class="card-image">
								<img class="activator" src="${project.img}" alt="">
								<span class="card-title activator right-align">${project.titulo}</span>
							</div>
							<div class="card-reveal">
								<div class="row">
									<div class="col s10">
										<h6>${project.titulo}</h6>
										<p>${project.descripcion}</p>
									</div>
									<div class="col s2 iconos">
										<span class="card-title"><i class="fas fa-times-circle small"></i></span>
										<a href="${project.link}"><i class="fas fa-arrow-alt-circle-right small"></i></a>
									</div>
								</div>
						    </div>
						</div>
					`;
				}
			});

			// Cierre del último elemento y row
			out += `
					</div>
				</div>
			`;

			console.log(out);
		});

		// Cierre del container.
		out += `
			</div>
		`;

		// Inyectar al HTML
		document.querySelector('main').innerHTML = out;
	}
}