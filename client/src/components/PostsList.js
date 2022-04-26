import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchPosts } from '../redux/actions/post';
import Loader from './Loader';
import { Box, Wrap, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const PostsList = () => {
    const listPost = useSelector(state => state.posts);
    const [lists, setLists] = useState([]);
    const { posts, loading, error } = listPost;

    const params = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        if(params.category){
            const filtered = posts?.filter((val) => val?.tag?.toLowerCase() === params.category);
            setLists(filtered);
        } else {
            setLists(posts);
        }
    }, [params.category, posts]);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])


    return (
        <Flex
            px={5}
            py={30}
            w="full"
            align="center"
            justify="center"
            minH="100vh"
        >
            <Wrap spacing="30px" justify="center">
                {error && <p>{error}</p>}
                {loading ? (
                    <Loader />
                ) : lists?.length > 0 ? (
                    lists?.map(post => (
                        <Box
                            mx="auto"
                            rounded="lg"
                            shadow="md"
                            bg={('gray.800', 'gray.800')}
                            maxW="md"
                            key={post?._id}
                            boxShadow="dark-lg"
                        >
                            <Post post={post} />
                        </Box>
                    ))
                ) : (
                    'Blog not found!'
                )}
            </Wrap>
        </Flex>
    );
};

export default PostsList;
