import React, { useState } from 'react';
import s from './Paginator.module.css';


const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);       //Количество страниц = всего пользователей / количество на странице
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={s.pagination}>
            {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>{"<"}</button>}

            {
                pages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => <span
                        key={page}
                        className={currentPage === page ? s.currentPage : null}
                        onClick={() => { onPageChanged(page) }}>
                        {page}
                    </span>
                    )
            }

            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>{">"}</button>}

        </div>

    );
}

export default Paginator;
