import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pages from "../../data/pages"

export default function Page() {
    const [page, setPage] = useState({});
    const { pageId } = useParams();

     useEffect(() => {
        for(let i=0; i<pages.length; i++){
            if(pages[i].id == pageId){
                setPage({page: pages[i]})
            }
        }
    }, [pageId]);
   
    
    return (
        <div className='container'>
            <div className='row justify-content-center mt-5 page'>
                <h1 className="mt-5 text-center text-white">{page.page?.title}</h1>
                <p className="pageContent" dangerouslySetInnerHTML={{ __html: page.page?.content }}></p>
            </div>
        </div>
    );
}