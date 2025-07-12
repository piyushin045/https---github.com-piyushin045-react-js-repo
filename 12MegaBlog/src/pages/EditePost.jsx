import { use, useEffect, useState } from "react"
import React from 'react'
import { Container,PostFrom } from "../components"
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from "react-router-dom"

function EditePost() {
    const [post,setPost] = useState(null)
    const {slug} = useParams() // IS USED TO TAKE THE VALUE FROM THE URL
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }
    },[slug,navigate])

    return post ? (
        <div className="py-8">
            <Container>
                <PostFrom post={post} />
            </Container>
        </div>
    ) : null
}

export default EditePost