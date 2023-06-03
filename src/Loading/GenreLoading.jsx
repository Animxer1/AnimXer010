import React from 'react'
import Skeleton from 'react-loading-skeleton'
const GenreLoading = () => {
    return (
        <div className="movies-grid">
            {[1,2,3,4,5,6,7,8,9,10].map(()=>{
                return(
                    <div
                    className="movie-card" >
                    <Skeleton className="card-img" />
                </div>
                )
            })}
        </div>
    )
}

export default GenreLoading