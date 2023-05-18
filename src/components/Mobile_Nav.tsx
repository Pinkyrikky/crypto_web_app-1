import React, { ReactElement } from 'react';
import { ToggleIcon } from './Navbar';


interface IMenuOptions{
  icon?: ReactElement;
  title: string;
  link: string;

}

interface IMenu{
  name: string;
  hasMegaMenu: boolean;
  icon: ReactElement;
  content: IMenuOptions[];
}

const mainMenuItems: IMenu[] = [
  {
    name:'Buy Crypto',
    hasMegaMenu: true,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon"><use xlinkHref="#bank-g"></use></svg>,
    content:[
      {
        icon:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon"><use xlinkHref="#bank-g"></use></svg>,
        title:'pay with',
        link: '',
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon"><use xlinkHref="#bank-g"></use></svg>,
        title: 'Bank Deposit',
        link: ''
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon"><use xlinkHref="#card-g"></use></svg>,
        title: 'Credit/Debit Card',
        link: ''
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon"><use xlinkHref="#card-g"></use></svg>,
        title: 'Cash Balance',
        link: ''
    }
    ]
  },

  {
    name:'Markets',
    hasMegaMenu:true,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon"><use xlinkHref="#bank-g"></use></svg>,
    content:[
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon"><use xlinkHref="#bank-g"></use></svg>,
        title: 'Markets Overview',
        link: '/'
      }
    ]
  }
]

export default React.forwardRef((props, ref:any) => {
  return (
    <>
      <aside ref={ref} className="mobile-nav">
        
          <ul>
          <li className="md-hidden gap-2"><a href="/">Log In</a></li>
          </ul>
          <a className=" btn btn--primary gap-2" href="/">
            <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon"><path d="M13.5 6.379V3h-3v3.379l-2.94-2.94-2.12 2.122L7.878 8H4v3h6.75V8h2.5v3H20V8h-3.879l2.44-2.44-2.122-2.12L13.5 6.378zM4 13.5V20h6.75v-6.5H4zM13.25 20H20v-6.5h-6.75V20z" fill="currentColor"></path></svg>
                <span>Register</span>
            </span>
          </a> 
            
         <div className="megamenu">{
          mainMenuItems.map(item =>
            <li key={item.name} className="flex">
            <span className="txt flex">{item.icon}{item.name}
            <ToggleIcon />
            </span>
            </li>
            )
         }</div>
      </aside>
      
    </>
  )
})

