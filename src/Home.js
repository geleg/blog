import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch'

const Home = () => {

    const {data:blogs, isKraunasi, error} = useFetch('http://localhost:8000/blogs')


    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isKraunasi && <div>Kraunasi...</div>}
            {blogs && <BlogList blogs={blogs} title={'Visi irasai'} />}
 
        </div>
     );
}
 
export default Home;