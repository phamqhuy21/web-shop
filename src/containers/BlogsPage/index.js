import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Blog from '../../components/Body/BlogPage/Blog/index';
import SideBar from '../../components/Body/BlogPage/SideBar/index';
import BlogItem from '../../components/Body/BlogPage/Blog/BlogItem/index';
import SideBarItem from '../../components/Body/BlogPage/SideBar/SideBarItem/index';
import LinkBlogs from '../../components/Body/LinkTitle/index';
import { fetchBlogs } from '../../actions/blogs';
import './index.css';

function BlogsPage(props) {
    const blogs = useSelector((state) => state.blogs.blogs);
    const dispatch = useDispatch();
    const [param, setParam] = useState({
        title: '',
        id: null,
    });
    const { params } = props.match.params;

    useEffect(() => {
        dispatch(fetchBlogs());
        switch (params) {
            case 'adamstore':
                setParam({
                    title: 'adam store',
                    id: 0,
                });
                break;
            case 'news':
                setParam({
                    title: 'news',
                    id: 1,
                });
                break;
            case 'khuyen-mai':
                setParam({
                    title: 'Khuyến mãi',
                    id: 2,
                });
                break;
            case 'adam-va-bao-chi':
                setParam({
                    title: 'Adam và báo chí',
                    id: 3,
                });
                break;
            case 'uu-dai-doi-tac-adam':
                setParam({
                    title: 'Ưu đãi đối tác Adam',
                    id: 4,
                });
                break;
            case 'sao-viet-va-khach-hang':
                setParam({
                    title: 'Sao Việt và Khách hàng',
                    id: 5,
                });
                break;
            default:
                setParam({
                    title: '',
                    id: null,
                });
                break;
        }
    }, [...params]);

    const showBlogContent = (blogs) => {
        let result = null;
        if (param) {
            if (blogs) {
                if (param.id === 0) {
                    result = blogs.map((blog, index) => {
                        if (blog.posts) {
                            return blog.posts.map((item, index) => {
                                if (item.title) {
                                    return (
                                        <BlogItem
                                            key={index}
                                            title={item.title}
                                        />
                                    );
                                }
                            });
                        }
                    });
                } else if (param.id) {
                    result = blogs
                        .filter((blog) => {
                            return blog.id === param.id;
                        })
                        .map((blog, index) => {
                            if (blog.posts) {
                                return blog.posts.map((item, index) => {
                                    return (
                                        <BlogItem
                                            key={index}
                                            title={item.title}
                                        />
                                    );
                                });
                            }
                        });
                } else {
                    return (
                        <React.Fragment>
                            <h1>NOT FOUND</h1>
                        </React.Fragment>
                    );
                }
            }
        }
        return result;
    };

    const showSideBarTitle = (blogs) => {
        let result = null;
        if (blogs) {
            result = blogs.map((blog, index) => {
                if (blog.type) {
                    return <SideBarItem key={index} title={blog.type} />;
                }
            });
        }
        return result;
    };

    return (
        <React.Fragment>
            <LinkBlogs title={param.title} />
            <div id="container">
                <SideBar>{showSideBarTitle(blogs)}</SideBar>
                <Blog>{showBlogContent(blogs)}</Blog>
            </div>
        </React.Fragment>
    );
}

export default BlogsPage;
