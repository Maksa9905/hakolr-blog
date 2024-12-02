import { DEFAULT_LIMIT_PAGINATION } from '#shared/lib';
import axios from 'axios'
import fetch from 'node-fetch'
import { PageContextClient, PageContextServer } from 'vike/types'

export const data = async (pageContext: PageContextClient) => {
    const searchParams = pageContext.urlParsed.search;

    const response = await axios.get('http://localhost:3001/posts', {
        params: {
            page: searchParams.page || 1,
            limit: searchParams.limit || DEFAULT_LIMIT_PAGINATION
        }
    })
    
    return response.data;
}