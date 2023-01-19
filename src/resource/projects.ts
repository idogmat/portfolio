import todolist from '../assets/projects/todolist.png'
import mountains from '../assets/projects/mountains.png'


export const projectsData = [
    {
        id: '1',
        title: 'Todolist',
        description: 'You may create tasks and forget complete them',
        tech: ['ReactJS', 'TypeScript', 'redux/toolkit', 'axios', 'SCSS'],
        backgroundImage: `url(${todolist})`,
        repoLink: 'https://github.com/idogmat/todo-list-ts',
        demoLink: 'https://idogmat.github.io/todo-list-ts/'
    },
    {
        id: '2',
        title: 'Portfolio',
        description: 'App with admin-panel and so long loading...',
        tech: ['Vue', 'Vuex', 'pug', 'postcss', 'axios'],
        backgroundImage: `url(${mountains})`,
        repoLink: 'https://github.com/idogmat/Mountains',
        demoLink: 'https://idogmat.github.io/Mountains/'
    },

]