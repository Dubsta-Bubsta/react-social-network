import React from 'react';
import s from './Paginator.module.css';


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);       //Количество страниц = всего пользователей / количество на странице
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.pagination}>
            {
                pages.map(page => <span
                    key={page}
                    className={currentPage === page ? s.currentPage : null}
                    onClick={() => { this.onPageChanged(page) }}>
                    {page}
                </span>
                )
            }
        </div>

    );
}

export default Paginator;
