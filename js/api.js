'use strict';

class API {

	constructor()
	{
		console.log('Obj. Init');
	}

	async getProjects()
	{
		const res = await fetch('projects.json');
		const data = await res.json();
		
		return data;
	}
}