import { DataBaseService} from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private databaseService:DataBaseService) {        
    }

    async getPosts() {
        
        this.posts = await this.databaseService.getPosts();

        return this.posts;
    }
}