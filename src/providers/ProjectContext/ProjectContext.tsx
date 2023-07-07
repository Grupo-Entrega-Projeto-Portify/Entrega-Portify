import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import {
	IProject,
	ICreateProjectInput,
	IUpdateProjectInput,
	IProjectContext,
	IProjectProviderProps,
} from "./types";
import { UserContext } from "../UserContext/UserContext";

export const ProjectContext = createContext({} as IProjectContext);

export const ProjectProvider = ({ children }: IProjectProviderProps) => {
	const [projects, setProjects] = useState<IProject[]>([]);
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (user) {
			fetchProjects();
		}
	}, [user]);

	const fetchProjects = async (portfolioId: number) => {
		try {
			const response = await api.get(`/portfolios/${portfolioId}/projects`);
			setProjects(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const createProject = async (projectData: ICreateProjectInput) => {
		try {
			const token = localStorage.getItem("@TOKEN");
			const response = await api.post("/projects", projectData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const createdProject = response.data;
			setProjects((prevProjects) => [...prevProjects, createdProject]);
		} catch (error) {
			console.log(error);
		}
	};

	const updateProject = async (
		projectId: number,
		projectData: IUpdateProjectInput
	) => {
		try {
			const token = localStorage.getItem("@TOKEN");
			await api.put(`/projects/${projectId}`, projectData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setProjects((prevProjects) =>
				prevProjects.map((project) =>
					project.id === projectId ? { ...project, ...projectData } : project
				)
			);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteProject = async (projectId: number) => {
		try {
			const token = localStorage.getItem("@TOKEN");
			await api.delete(`/projects/${projectId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setProjects((prevProjects) =>
				prevProjects.filter((project) => project.id !== projectId)
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ProjectContext.Provider
			value={{
				projects,
				fetchProjects,
				createProject,
				updateProject,
				deleteProject,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};
