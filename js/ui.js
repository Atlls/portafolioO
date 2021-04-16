'use strict';

class Interface {

	constructor() {
		this.init();
	}

	init() {
		this.putProjects();
	}

	async putProjects(){
		const projects = await api.getProjects();

		projects.forEach(typeOfPreject => {
			console.log(typeOfPreject);
		});
	}
}