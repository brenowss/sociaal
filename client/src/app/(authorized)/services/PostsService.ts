import { posts } from './mock/posts';
import HttpClient from './utils/HttpClient';

class PostsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:5050');
  }

  async listPosts() {
    // return this.httpClient.get(`/`);

    return posts;
  }
}

export default new PostsService();
