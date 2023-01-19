import codewars from './../assets/icons/codewars.svg'
import linkedin from './../assets/icons/linkedin.svg'
import telegram from './../assets/icons/telegram.svg'
import github from './../assets/icons/github.svg'

export const nav = [
    {
        point: 'Main', to: 'main', spy: true,
        smooth: true,
        offset: 1,
        duration: 800
    },
    {
        point: 'Skills', to: 'skills', spy: true,
        smooth: true,
        offset: 1,
        duration: 800
    },
    {
        point: 'Projects', to: 'projects', spy: true,
        smooth: true,
        offset: 1,
        duration: 800
    },
    {
        point: 'Contacts', to: 'contacts', spy: true,
        smooth: true,
        offset: 1,
        duration: 800
    }

]
export const contactLinks = [

    {
        link: 'https://www.linkedin.com/in/jack-rodin/',
        icon: linkedin
    },
    {
        link: 'https://github.com/idogmat',
        icon: github
    },
    {
        link: 'https://www.codewars.com/users/idogmat',
        icon: codewars
    },

    {
        link: 'https://t.me/io_jack',
        icon: telegram
    }
]