import React, {useEffect, useState} from 'react'
let URL = 'https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/'

const Main = () =>{
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            let response = await fetch('https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts')
            let data = await response.json()
            console.log(data)
            setPosts(data.data.posts)
        }
        fetchPosts()
    }, [])
    return(
        <div>
            <h1>Posts</h1>
            {
                posts.map((element) =>{
                    return(
                        <div>
                            <h3>{element.title}</h3>
                            <span className='subhead1'>username:</span>
                            <span className='content'>{element.author.username}</span>
                            <span className='subhead1'>location:</span>
                            <span className='content'>{element.location}</span>
                            <span className= 'subhead1'>description:</span>
                            <span className='content'>{element.description}</span>
                            <span className= 'subhead1'>price:</span>
                            <span className='content'>{element.price}</span>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Main