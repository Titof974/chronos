import "reflect-metadata";
import { DataSource } from "typeorm"
import { User } from "./entities/user.entity";
import { Project } from "./entities/project.entity";
import { UserProject } from "./entities/userProject.entity";
const dataSource = new DataSource({
    "type": "sqlite",
    "database": "database.sqlite",
    "synchronize": true,
    "logging": true,
    "entities": [__dirname + '/entities/*.entity.{js,ts}']
});

await dataSource.initialize();

const userRepository = dataSource.getRepository(User)
let newUser = new User();
newUser.name = "testUser";
newUser.email = "testEmail";
newUser = await userRepository.save(newUser);

let projectRepository = dataSource.getRepository(Project)
let newProject = new Project();
newProject.name = "testProject";
newProject.shortName = "TP0";
newProject = await projectRepository.save(newProject);

let userProjectRepository = dataSource.getRepository(UserProject)
let userProject = new UserProject();
userProject.user = newUser;
userProject.project = newProject;
userProject.roles = "operator";
userProject = await userProjectRepository.save(userProject);