import typeorm, { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { UserProject } from "./userProject.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    email: string

    @OneToMany(() => UserProject, (userProject) => userProject.user)
    userProjects: typeorm.Relation<UserProject>[];
}