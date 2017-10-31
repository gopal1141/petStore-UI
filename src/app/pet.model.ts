import { Category } from "./category.model";

export class Pet {
  public id?: string;
  public name: string;
  public category: Category;
  public photoURL?: string;
  public status: string;

  constructor(id: string, name: string, category: Category, photourl: string, status: string) {
    this.name = name;
    this.category = category;
    this.photoURL = photourl;
    this.id = id;
    this.status = status;
  }
}
