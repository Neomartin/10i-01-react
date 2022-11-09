import React from 'react';

const headerOptions = [
    { name: 'Home', icon: 'fa-home', link: '/' },
    { name: 'Contact', icon: 'fa-home', link: '/contact' },
    { name: 'About Us', icon: 'fa-home', link: '/' },
    { name: 'Gallery', icon: 'fa-home', link: '/' },
    { name: 'Register', icon: 'fa-home', link: '/' },
    { name: 'Login', icon: 'fa-home', link: '/' },
]


export default function HeaderComponent(props) {
    console.log(`Hola desde header component`)
    return (
        <header className='header'>
          {props.userHeader}
        <nav className='main-nav'>
          <ul>
            {
                headerOptions.map(option => {
                    return (
                        <li>
                            <a href={option.link}>{option.name}</a>
                        </li>
                    )
                })
            }
          </ul>
        </nav>
      </header>
    
        );
}