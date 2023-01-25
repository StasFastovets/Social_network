import React from 'react';
import elem from './Paginator.module.css';


const Paginator = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)                        // количество страниц, ceil - округляет в большую сторону
   let pages = []                                                                            // массив страниц
   for (let i = 1; i <= pagesCount; i++) {                                                   //  for (let i = 1; i <= pagesCount; i++) {        
      pages.push(i)
   }

   return <div className={elem.pages}>
      {pages.map(p => <span onClick={() => props.onPageChanget(p)} className={props.currentPage === p ? elem.currentPage : elem.page}>
         {p}
      </span>)}
   </div>
}



export default Paginator;

