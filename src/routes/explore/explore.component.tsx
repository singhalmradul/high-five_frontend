import { useDispatch, useSelector } from 'react-redux';
import Posts from '../../components/posts/posts.component';
import { POST_TYPE } from '../../store/posts/posts.types';
import { selectPosts } from '../../store/posts/posts.selector';
import { fetchPostsStart } from '../../store/posts/posts.action';
import { useEffect } from 'react';

const Explore = () => {

	const dispatch = useDispatch();

	const posts = useSelector(selectPosts);


	useEffect(() => {
		dispatch(fetchPostsStart(POST_TYPE.EXPLORE_POSTS));
		// eslint-disable-next-line
	}, []);

	return (
		<div className='home'>
			<Posts posts={posts} />
		</div>
	);
};

export default Explore;
