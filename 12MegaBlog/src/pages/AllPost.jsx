import React ,{useState,useEffect}from 'react'
import { Container,PostCard } from '../components'
import appwriteService from '../appwrite/config'
// we will not get all the post direct so we have to take usestate
function AllPost() {
    const [posts,setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts) => setPosts)

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=> (
                    <div key = {post.$id} className='p-2 w-1/4'>
                            <PostCard post = {post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost