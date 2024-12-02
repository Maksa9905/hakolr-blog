export const contentParser = (content: string) => {
    return content
        .replace('<h6>', '<h6>')
        .replace('<h5>', '<h6>')
        .replace('<h4>', '<h5>')
        .replace('<h3>', '<h4>')
        .replace('<h2>', '<h3>')
        .replace('<h1>', '<h2>')
        .replace('</h6>', '</h6>')
        .replace('</h5>', '</h5>')
        .replace('</h4>', '</h4>')
        .replace('</h3>', '</h3>')
        .replace('</h2>', '</h2>')
        .replace('</h1>', '</h1>')
}