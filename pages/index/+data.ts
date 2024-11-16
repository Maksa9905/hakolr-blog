import axios from 'axios'
import fetch from 'node-fetch'
import { PageContextClient, PageContextServer } from 'vike/types'

export const data = async (pageContext: PageContextClient) => {
    // const searchParams = pageContext.urlParsed.search;
    // console.log(searchParams.name ? searchParams : {...searchParams, name: 'Максим'})

    // const response = await axios('https://api.genderize.io', {params: searchParams.name ? searchParams : {...searchParams, name: 'Максим'}})

    // const data = await response.data;
    return []
}