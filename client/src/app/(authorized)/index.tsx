'use client';

import { redirect } from 'next/navigation';

import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import Wrapper from './wrapper';
import Post from './components/Post';
import { useEffect, useState } from 'react';
import PostsService from './services/PostsService';
import { setPosts } from '../../redux/features/postsSlice';

export default function Home() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.authReducer.value.user);
  const posts = useAppSelector((state) => state.postsReducer.value.posts);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  console.log('user', user);
  if (!user) {
    // redirect
    redirect('/auth');
  }

  async function fetchContacts() {
    try {
      setIsLoading(true);
      const postsList = await PostsService.listPosts();
      dispatch(
        setPosts({
          posts: postsList,
        })
      );
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Wrapper>
      <main>
        {posts &&
          posts.map((post) => (
            <Post
              key={post._id}
              postDate={new Date().toISOString()}
              // postImage={post.picturePath}
              postText={post.description}
              userImage={post.userPicturePath}
              userName={post.firstName + ' ' + post.lastName}
              comments={post.comments}
            />
          ))}
      </main>
    </Wrapper>
  );
}
