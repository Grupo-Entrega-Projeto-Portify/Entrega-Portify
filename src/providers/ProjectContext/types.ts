export interface IProjectProviderProps {
	children: React.ReactNode;
}

export interface IProjectContext {
	projects: IProject[];
	createProject: (
		projectData: ICreateProjectInput
	) => Promise<void>;
	updateProject: (
		projectId: number,
		projectData: IUpdateProjectInput
	) => Promise<void>;
	deleteProject: (projectId: number) => Promise<void>;
	fetchProjects: (portfolioId: number) => Promise<void>;
}

export interface IProject {
	id: number;
	portfolioId: number;
	name: string;
	repository: string;
	link: string;
	description: string; 
	coverUrl: string;
}

export interface ICreateProjectInput {
	portfolioId: number;
	name: string;
	repository: string;
	link: string;
	description: string; 
	coverUrl: string;
}

export interface IUpdateProjectInput {
	name: string;
	repository?: string;
	link?: string;
	description: string; 
	coverUrl: string;
}
