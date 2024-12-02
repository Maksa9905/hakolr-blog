import { useCallback } from 'react';
import styles from './PaginationItem.module.css'

export interface PaginationItemProps {
    page: number;
    selected?: boolean;
    onClick?: (page: number) => void
}

export const PaginationItem = ({page, selected = false, onClick}: PaginationItemProps) => {
    const handlePageClick = useCallback(() => {
        onClick?.(page)
    }, [onClick])

    return(
        <div onClick={handlePageClick} className={`${styles['page-container']} ${selected ? styles['selected'] : ''}`}>
            {page}
        </div>
    )
}