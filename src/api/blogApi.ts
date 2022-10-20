import axios from 'axios';

import { PostType } from 'features/Blog/blogTypes';

export const blogApi = {
  getPosts() {
    return axios.get<PostType[]>('./articles.json');
  },
};
