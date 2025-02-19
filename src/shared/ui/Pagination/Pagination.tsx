import { PaginationItem } from '#shared/ui'
import { useCallback } from 'react'
import styles from './Pagination.module.css'
import { DEFAULT_LIMIT_PAGINATION } from '#shared/lib'

export interface PaginationProps {
  page: number
  total: number
  limit?: number
  maxLength?: number
  onChange?: (page: number) => void
  className?: string
}

export const Pagination = ({
  page,
  total,
  limit = DEFAULT_LIMIT_PAGINATION,
  maxLength = 5,
  onChange,
  className: propClassName,
}: PaginationProps) => {
  const pages = Math.ceil(total / limit)

  const handleChangePage = (page: number) => {
    if (page < 1 || page > pages) return

    onChange?.(page)
  }

  const renderPaginationItems = useCallback(
    (pages: number, page: number) => {
      if (pages <= maxLength) {
        return [...Array(pages)].map((_, index) => (
          <PaginationItem
            onClick={handleChangePage}
            key={index}
            page={index + 1}
            selected={index + 1 === page}
          />
        ))
      }

      if (page <= maxLength) {
        return [
          [...Array(maxLength + 1)].map((_, index) => (
            <PaginationItem
              onClick={handleChangePage}
              key={index}
              page={index + 1}
              selected={index + 1 === page}
            />
          )),
          '...',
          <PaginationItem
            onClick={handleChangePage}
            key={3}
            page={pages}
            selected={false}
          />,
        ]
      }

      if (page >= pages - maxLength - 1) {
        return [
          <PaginationItem
            onClick={handleChangePage}
            key={0}
            page={1}
            selected={false}
          />,
          '...',
          [...Array(maxLength)].map((_, index) => (
            <PaginationItem
              onClick={handleChangePage}
              key={index}
              page={pages - maxLength + index + 1}
              selected={pages - maxLength + index + 1 === page}
            />
          )),
        ]
      }

      return [
        <PaginationItem
          onClick={handleChangePage}
          key={0}
          page={1}
          selected={page === 1}
        />,
        '...',
        [...Array(maxLength)].map((_, index) => (
          <PaginationItem
            onClick={handleChangePage}
            key={index}
            page={page - Math.ceil(maxLength / 2) + index + 1}
            selected={page - Math.ceil(maxLength / 2) + index + 1 === page}
          />
        )),
        '...',
        <PaginationItem
          onClick={handleChangePage}
          key={4}
          page={pages}
          selected={page === pages}
        />,
      ]
    },
    [pages, page],
  )

  return (
    <div className={`${styles['pagination-container']} ${propClassName}`}>
      {renderPaginationItems(pages, page)}
    </div>
  )
}
