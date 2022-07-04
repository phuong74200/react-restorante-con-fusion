import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterFeaturedCard } from './homeSlice';

import { HomeCard } from '../../components';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterFeaturedCard());
    }, []);

    return (
        <div className="container">
            <div className="row align-items-start">
                <HomeCard />
            </div>
        </div>
    )
}

export default Home;