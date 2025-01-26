import typeorm, { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm"
import { User } from "./user.entity";
import { Project } from "./project.entity";

@Entity()
export class UserProject {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.userProjects, { onDelete: 'CASCADE' })
    user: typeorm.Relation<User>;

    @ManyToOne(() => Project, (project) => project.userProjects, { onDelete: 'CASCADE' })
    project: typeorm.Relation<Project>;

    @Column()
    roles: string; // Additional field
}