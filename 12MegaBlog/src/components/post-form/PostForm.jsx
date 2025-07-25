import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button,Input,Select,RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm({post}) {
    // useform also give watch capibility to monitor the filed
    const {register,handleSubmit,watch,setValue,control,getValues}=useForm(
        {
            defaultValues:{ // we have to give default valuse if the user has come here to edit
                title:post?.title||'',
                slug:post?.slug ||'',
                content:post?.content ||'',
                status:post?.status ||'active',

            }
        }
    )

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)
    

    const submit = async(data) =>{
        if(post){
           const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) :null //way to upload a file
            
           if(file){
            // this is how to delete a post 
            appwriteService.deleteFile(post.featureImage)
           }
           const dbPost = await appwriteService.updatePost(post.$id,{
            ...data,
            featureImage:file ? file.$id : undefined,

           })
           if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }

     }
     else{
        const file = await appwriteService.uploadFile(data.image[0]);
        
        if(file){
            const fileId = file.$id
            data.featureImage=fileId
           const dbPost= await appwriteService.createPost({
                ...data,
                userId:userData.$id,
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }
     }

    }


    /// slug transform :- 
    const slugTransform = useCallback((value)=>{
        if(value && typeof value === 'string'){
            // const slug = value.toLowerCase().replace(/ /g,'-')
            // setValue('slug',slug)
            // return slug
            // other methord 
            return value.trim()
            .toLowerCase()
            .replace(/^[a-zA\d\s]+/g,'-')// these are nigates
            // .replace(/\s/g,'-')

        }
        return ''
    },[])

    React.useEffect(()=>{
        // one of the methord for subscription is watch methord
        const Subscription = watch((value,{name})=>{
            if(name ==='title'){
                setValue('slug',slugTransform(value.title,{shouldValidate:true}))
            }
        })

        return ()=>{
            Subscription.unsubscribe()
        }
    },[watch,slugTransform,setValue])

 return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm