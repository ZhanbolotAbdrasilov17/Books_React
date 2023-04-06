import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getBooks } from '../store/booksSlice'

export const HomePage = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books.books)
  const statuses = useSelector(state => state.books.getBooks)

  console.log(statuses)

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <div>
      {statuses.loading && <div>LOADING</div>}
      {
        statuses.success && (
          <ul>
            {
              books.map(book => (
                <li key={book.id}>
                  {book.name}
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}