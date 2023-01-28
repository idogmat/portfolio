import todolist from '../assets/projects/todolist.png'
import mountains from '../assets/projects/mountains.png'
import cards from '../assets/projects/cards.png'


export const projectsData = [
    {
        id: '1',
        title: 'Todolist',
        description: 'You may create tasks and forget complete them',
        tech: ['React', 'TypeScript', 'redux/toolkit', 'SCSS'],
        backgroundImage: `url(${todolist})`,
        repoLink: 'https://github.com/idogmat/todo-list-ts',
        demoLink: 'https://idogmat.github.io/todo-list-ts/'
    },
    {
        id: '2',
        title: 'Portfolio',
        description: 'App with admin-panel and so long loading...',
        tech: ['Vue', 'Vuex', 'pug', 'postcss'],
        backgroundImage: `url(${mountains})`,
        repoLink: 'https://github.com/idogmat/Mountains',
        demoLink: 'https://idogmat.github.io/Mountains/'
    },
    {
        id: '3',
        title: 'Cards',
        description: 'App with admin-panel and so long loading...',
        tech: ['React', 'Redux', 'TypeScript', 'redux/toolkit', 'Styled-components'],
        backgroundImage: `url(${cards})`,
        repoLink: 'https://github.com/idogmat/Mountains',
        demoLink: 'https://idogmat.github.io/Mountains/'
    },

]