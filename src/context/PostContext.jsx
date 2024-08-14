import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/config"

const PostContext = createContext();

function PostProvider({children}) {
    const [posts , setPosts] = useState([])

    useEffect(() =>{
        const fetchPosts = async ()=>{
            try{
                setPosts(await api.get('/articles'))
                // setPosts(await api.get('/articles?Page=1&Size=5'))
            }catch(error){
                console.log(error.message)
            }
        }
        fetchPosts();
    } , [])

    return (
        <>
            <PostContext.Provider value={posts}>
                {children}
            </PostContext.Provider>
        </>
    )
}

const usePosts = () => {
    const posts = useContext(PostContext);
    return posts;
}


export default PostProvider
export {usePosts}
