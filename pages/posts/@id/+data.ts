import axios from "axios";
import { PageContext } from "vike/types";


export const data = async (pageContext: PageContext) => {
    const postId = pageContext.routeParams.id;

    const response = await axios.get(`http://localhost:3001/posts/${postId}`)

    const content = `
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore aliquid neque quod numquam vero ut minima cupiditate reiciendis, dignissimos quae quam officiis, eos facere. Ducimus ut alias dolorum, ullam perspiciatis quia voluptates provident. Id quae distinctio dolores eligendi praesentium dolorum ea voluptas cumque illum, suscipit accusamus. Perferendis eum debitis quibusdam possimus commodi a reprehenderit atque veritatis repellat repellendus. Saepe eos eligendi optio sunt architecto labore? Repudiandae quam nesciunt iure necessitatibus obcaecati. Voluptates quod quae atque beatae enim laborum tenetur.</p>
    <img src="https://habrastorage.org/getpro/habr/upload_files/541/49c/453/54149c453aab8a370a0c5ab1b8a24a7b.png" />
    <p>Ещё на прошлой неделе писали, что начали разработку линтера, а вот уже и альфа версия подоспела! Ещё много работы предстоит. Например, написать документацию) Но уже сейчас можно описать с помощью специального DSL архитектуру вашего проекта, и задать основные архитектурные границы и правила.</p>
    <p>Особенно интересной получилась реализация генератора. Добавил папочку в pages, и линтер сам сгенерирует нужные папки и файлы с шаблонами внутри. Пример можно в видео посмотреть)</p>
    <p>Одной из ближайших задач будет написание шаблонов на распространённые архитектуры:</p>
    <ul>
        <li>Базовый FSD</li>
        <li>Моя версия FSD</li>
        <li>Модульная архитектура (великое детище Ульби)</li>
    </ul>
    <p>Достаточно будет одной команды, чтобы сгенерировать базовую структуру и настроить линтер. Планируем ещё добавить визуализацию архитектуры, ui билдер, и плагины для IDE, чтобы это было полноценным инструментом. Если у вас есть хотелки и пожелания — пишите в комментарии, мы учтём)</p>
    <a href='https://www.npmjs.com/package/evolution-design'>NPM</a>
    <a href='https://github.com/ep-community/evolution-design'>GITHUB</a>
    `

    
    
    return { content };
}
