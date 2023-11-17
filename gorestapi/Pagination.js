const Pagination = ({prevPage, nextPage, setPageURL}) => {
    const handleNextPage = () => {
        setPageURL(nextPage);
      }
    
      const handlePrevPage = () => {
        setPageURL(prevPage);
      }

      return(
        <div>
            {prevPage && <button onClick={handlePrevPage} style={{"width": "100px", "height": "50px", "margin": "25px", "background": "yellow"}}>Prev</button>}
            {nextPage && <button onClick={handleNextPage} style={{"width": "100px", "height": "50px", "margin": "25px", "background": "yellow"}}>Next</button>}
        </div>
      )
}

export default Pagination;