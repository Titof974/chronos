import typeorm, { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { UserProject } from "./userProject.entity"

@Entity()
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    shortName: string

    @Column({ nullable: true })
    description!: string

    @OneToMany(() => UserProject, (userProject) => userProject.project)
    userProjects: typeorm.Relation<UserProject>[];
}