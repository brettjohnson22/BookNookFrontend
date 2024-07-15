import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import parse from 'html-react-parser';
import "./BookDetailPage.css"

const BookDetailPage = () => {

    const [user, token] = useAuth();
    const {bookId} = useParams()
    const [book, setBook] = useState({})
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [fullDetails, setFullDetails] = useState({})

    
    useEffect(() =>{
        getBook()
        getBookDetails()
    }, [bookId]) 

    const getBook = async() =>{
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}/`)
        setBook(response.data)
    }

    const getBookDetails = async() => {
        let response = await axios.get(`https://localhost:5001/api/bookdetails/${bookId}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setFullDetails(response.data)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let newReview = {
            bookId: bookId,
            text: text,
            rating: rating
        }
        let response = await axios.post(`https://localhost:44394/api/reviews`, newReview, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        if(response.status === 201){
            setText('')
            setRating(0)
            getBookDetails()
        }
    }

    const handleFavorite = async() => {
        let favorite = {
            book_id: bookId,
            title: book.volumeInfo.title,
            thumbnail_url: book.volumeInfo.imageLinks.smallThumbnail
        }
        let response = await axios.post(`http://127.0.0.1:5000/api/user_favorites`, favorite, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        if(response.status === 201){
            getBookDetails()
        }
    }

    const handleUnFavorite = async() => {

        let response = await axios.delete(`http://127.0.0.1:5000/api/user_favorites?book_id=${bookId}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        if(response.status === 204){
            getBookDetails()
        }
    }

    return(
        <div className="bigContainer">
            <div className="desc">
            {book.volumeInfo && 
            <>
                <div className="favContainer">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                    {user ? fullDetails.is_favorite ? <button className="favButton" onClick={handleUnFavorite}>Remove Favorite</button> : <button className="favButton" onClick={handleFavorite}>Add Favorite</button> : <></>}
                </div>
                <br/>
                <h1>{book.volumeInfo.title}</h1>
                {book.volumeInfo.authors.map((author) =>
                    <h2>{author}</h2>
                )}
                <p>{parse(book.volumeInfo.description)}</p>
            </>
            }
            </div>

            <div className="rightCol">                
                {fullDetails.review_info? (
                    <>
                        <h2>Average User Rating: {fullDetails.review_info.average_review_rating}</h2>
                        <br/>
                        <h3>User Reviews:</h3>
                        {fullDetails.review_info.reviews.map((review) => 
                        <><span>{review.user.username}</span> - <span>{review.text}</span><br /></>)} 
                    </> 
                ) : <></>
                } 
                <br />
                <br />
                {user ?
                <form onSubmit={handleSubmit}>
                    <label>Leave A Review:</label>
                    <textarea className="reviewText" rows="10" cols="40" type="text" onChange={(e) => setText(e.target.value)} value={text} />
                    <br />
                    <label>Rating (1-5):</label>
                    <input className="ratingInput" type="number" onChange={(e) => setRating(e.target.value)} value={rating} />
                    <input type="submit" value="Review" />
                </form> : <p>Log in to leave review</p>}
            </div>       
        </div>
    )
}


export default BookDetailPage