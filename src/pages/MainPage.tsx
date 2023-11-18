import axios from 'axios';
import Slider from "../components/Slider";
import { getPosts } from '../features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, useEffect, useRef, useState, MutableRefObject } from 'react';
import { useOutletContext } from "react-router-dom";
import AnimatedDiv from '../components/AnimatedDiv';
import VideosModal from "../components/VideosModal";
import MiniGallery from '../components/MiniGallery';
import Pagination from '../components/Pagination';
import { Post } from '../types';
import _ from 'lodash'

const News = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const posts = useSelector((state: any) => state.post.posts);
    const [articleText, setArticleText] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4);
    const [name] = useOutletContext() as [string, () => void];

    const paginatePosts = (allPosts: Post[], page: number, limit: number) => {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        return allPosts.slice(startIndex, endIndex);
    };


    const filteredPosts = name !== undefined && name.trim() !== ''
        ? posts.filter((post: any) => post.title.toLowerCase().includes(name.toLowerCase()))
        : paginatePosts(posts, page, limit);
    const animatedDiv: MutableRefObject<HTMLDivElement | null> = useRef(null);




    useEffect(() => {
        dispatch(getPosts());

    }, []);





    // async function getInfo(externalSiteURL: string) {
    //     console.log(externalSiteURL);
    //     setArticleText('');
    //     await axios.get(externalSiteURL)
    //         .then(response => {
    //             const htmlContent = response.data;
    //             const parser = new DOMParser();
    //             const doc = parser.parseFromString(htmlContent, 'text/html');
    //             const elementsWithDataUrl = doc.querySelectorAll(`[data-url="${externalSiteURL}"]`);
    //             for (const element of elementsWithDataUrl) {
    //                 const articleTextElement = element.querySelector('mw-content-ltr mw-parser-output');
    //                 if (articleTextElement) {
    //                     setArticleText(articleText+articleTextElement.textContent as string);
    //                     break;
    //                 }
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Помилка запиту:', error);
    //         });


    // }








    return (
        <div className="w-full">
            <Slider posts={posts} />

            <section className="flex flex-col flex-wrap md:flex-row    w-full mt-20  text-center md:text-left text-black ">


                <div className='flex flex-col flex-wrap w-[100%] md:w-[60%] '>
                    <h2 className="divider gradient text-xl" >Кавалери Медалі Пошани українського походження</h2>

                    <div className="mb-6 mt-20  w-full grid grid-cols-1  md:grid-cols-2 ">

                        {filteredPosts.map((post: Post, idx: number) => (
                            <div className="mb-6 flex flex-wrap w-[100%]" key={idx} >
                                <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 xl:w-[30%]">
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src={post.image_url} className="w-full" alt={'Картинка відсутня, джерело ' + post.source_id} />
                                        <a href={post.link}>
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 xl:mb-0 xl:w-[70%] ">
                                    <h5 className="mb-3 text-lg font-bold">{post.title}</h5>
                                    <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                            stroke="currentColor" className="mr-2 h-5 w-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                        </svg>
                                        <strong><a href={post.link}>{post.source_id}</a></strong>
                                    </div>
                                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                                        <small>Опубліковано <u>{post.pubDate}</u>
                                        </small>
                                    </p>
                                    <p className="text-neutral-500 dark:text-neutral-300">
                                        {post.description}<br />
                                    </p>
                                    <button className='h-20 w-20 font-bold hover:scale-150 underline transition duration-500 cursor-pointer' onClick={async () => {
                                        if (animatedDiv.current) {
                                            animatedDiv.current.classList.remove('visible-div');
                                            // getInfo(post.link);
                                            setArticleText(post.content);
                                            await new Promise(resolve => setTimeout(resolve, 500));
                                            animatedDiv.current.classList.add('visible-div');

                                        }

                                    }}>Детальніше</button>


                                </div>
                            </div>
                        ))}

                        <AnimatedDiv animatedDivRef={animatedDiv} articleText={articleText} />


                    </div>



                </div>
                <div className='flex flex-col flex-wrap w-[100%] md:w-[30%] ml-[10%]  '>
                    <h2 className="divider gradient text-xl" >Відео</h2>

                    <VideosModal videosName='' />
                    <h2 className="divider gradient text-xl" >Галерея</h2>
                    <MiniGallery />
                </div>





            </section>
            <Pagination page={page} setPage={setPage} totalPages={Math.ceil(posts.length / limit)} />

        </div>
    )
}

export default News;
