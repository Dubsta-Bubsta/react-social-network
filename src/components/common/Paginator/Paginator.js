import React from 'react';
import s from './Dialogs.module.css';


const Paginator = (props) => {



    return (
        <div className={s.pagination}>
            {
                pages.map(page => <span
                    key={page}
                    // page <= 3 || -1 * (this.props.currentPage - pagesCount) < 3? s.active : null
                    className={this.props.currentPage === page ? s.currentPage : null}
                    onClick={() => { this.onPageChanged(page) }}>
                    {page}
                </span>
                )
            }
        </div>

    );
}

export default Paginator;
