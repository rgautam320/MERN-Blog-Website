import React from 'react';
import { NavLink } from 'react-router-dom';
import { chakra, useColorModeValue, Flex, Button, Link, Box } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';

import Logo from '../images/Logo.png';
import AddPostForm from './AddPostForm';

const Header = () => {
    const bg = useColorModeValue('white', 'gray.800');
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <chakra.header bg={bg} w="full" px={5} py={1} shadow="md" mx="auto">
                <Flex align="center" justify="space-between" mx="auto" maxW="1420px">
                    <Flex>
                        <Box py={3}>
                            <NavLink to="/">
                                <img src={Logo} alt="Logo" className="logo" />
                            </NavLink>
                        </Box>
                    </Flex>
                    <Flex align="center">
                        <Link
                            display="block"
                            color={useColorModeValue('gray.800', 'white')}
                            fontWeight="bold"
                            fontSize="lg"
                            href={'/posts'}
                            px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }}
                        >
                            Posts
                        </Link>
                        <Button ml="10" colorScheme="teal" size="sm" onClick={onOpen}>
                            New Post
                        </Button>
                    </Flex>
                </Flex>
            </chakra.header>

            <AddPostForm isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Header;
