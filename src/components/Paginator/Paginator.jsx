import React, {useState} from 'react';
import cl from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChenged, portionSize=10}) => {
  const [portionNumber, setPortionNumber] = useState(1);


  const pageCount = Math.ceil(totalItemsCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pageCount / portionSize);
  const leftPartionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPartionPageNumber = portionNumber * portionSize;


  const CurrentPartionPage = (newPage) => {
    onPageChenged(newPage);
    const newPortionNumber = Math.ceil(newPage / portionSize);;
    setPortionNumber(newPortionNumber);
  }

  // useEffect(() => {
  //   if (currentPage > 1) {
  //     CurrentPartionPage(currentPage);
  //   }
  // },[]);

  const onNextClick = () => CurrentPartionPage (currentPage + 1);
  const onNextPortionClick = () => CurrentPartionPage (currentPage + portionSize);

  const onPrevClick = () => CurrentPartionPage (currentPage - 1);
  const onPrevPortionClick = () => CurrentPartionPage (currentPage - portionSize);

  const onFirstClick = () => CurrentPartionPage (1);
  const onLastClick = () => CurrentPartionPage (pageCount);

  return (
    <div className={cl.paginator}>
      { portionNumber > 1 &&
        <span>
          <button onClick={onFirstClick}>Первая</button>
          &nbsp;
          <button onClick={onPrevPortionClick}>&laquo;Пред.</button>
          &nbsp;
          <button onClick={onPrevClick}>&larr;</button>
          &nbsp;
        </span>
      }

      {pages
        .filter(p => p >= leftPartionPageNumber && p <= rightPartionPageNumber)
        .map(p => {
          return (
            <span
              className={ currentPage === p ? cl.selectedPage : cl.pageNumber}
              key={p}
              onClick={(e) => {onPageChenged(p);}}
            >{p}</span>
          );
        })
      }

      { portionCount > portionNumber &&
        <span>
          &nbsp;
          <button onClick={onNextClick}>&rarr;</button>
          &nbsp;
          <button onClick={onNextPortionClick}>&raquo;След.</button>
          &nbsp;
          <button onClick={onLastClick}>Последняя</button>
        </span>

      }
    </div>
  );
}

export default Paginator;
