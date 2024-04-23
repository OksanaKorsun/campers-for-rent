import { CardList } from '../../components/CardList/CardList';
import { Loader } from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/operations';
import { fetchAllCampers } from '../../redux/api/api';
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { LoadMoreButton } from './CatalogPage.styled';
import { Filter } from '../../components/Filters/Filter';
const CatalogPage = () => {
  const limit = 4;
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  // useEffect(() => {
  //   (async () => {
  //     const totalResult = await fetchCampers({ page: 1, limit: '' });

  //     console.log(totalResult);
  //     console.log(page);
  //     setTotalPage(Math.ceil(totalResult.length / limit));
  //   })();
  // }, [page, limit]);
  useEffect(() => {
    const getTotalResult = async () => {
      try {
        const totalResult = await fetchAllCampers({ page: 1, limit: '' });
        console.log(totalResult);
        setTotalPage(Math.ceil(totalResult.length / limit));
      } catch (error) {
        console.error('Error fetching total result:', error);
      }
    };

    getTotalResult();
  }, [limit]);
  useEffect(() => {
    dispatch(fetchCampers({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <div>
      <Filter campers={campers}/>
      <div>
        {error && <div>Error: {error}</div>}
        {isLoading ? <Loader /> : <CardList campers={campers} />}

        {page < totalPage && (
          <LoadMoreButton onClick={handleLoadMore} disabled={isLoading} type="button">
            {isLoading ? <Loader /> : 'Load more'}
          </LoadMoreButton>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
