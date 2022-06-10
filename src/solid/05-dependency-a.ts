import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebDataBaseService } from './05-dependency-c';


// Main
(async () => {

    const postService = new PostService(new WebDataBaseService());

    

    const posts = await postService.getPosts();

    console.log({ posts })


})();