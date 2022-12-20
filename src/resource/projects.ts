import todolist from '../assets/projects/todolist.png'
import mountains from '../assets/projects/mountains.png'




export const projectsData = [
    {
        id: '1',
        title: 'Todolist',
        description: 'ReactJS, TypeScript, redux/toolkit, axios, SCSS, StyledComponent',
        tech: ['ReactJS', 'TypeScript', 'redux/toolkit', 'axios', 'SCSS', 'StyledComponent'],
        backgroundImage: `url(${todolist})`,
        repoLink: 'https://github.com/idogmat/todo-list-ts',
        demoLink: 'https://idogmat.github.io/todo-list-ts/'
    },
    {
        id: '2',
        title: 'Portfolio',
        description: 'Vue, Vuex, pug, postcss, axios',
        tech: ['Vue', 'Vuex', 'pug', 'postcss', 'axios'],
        backgroundImage: `url(${mountains})`,
        repoLink: 'https://github.com/idogmat/Mountains',
        demoLink: 'https://idogmat.github.io/Mountains/'
    },

]