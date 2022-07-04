import { useSelector, useDispatch } from 'react-redux';
import { selectDish, getDishes } from './menuSlice';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';

import { DishDetail } from '../../components';

const Menu = () => {
    const dishes = useSelector(getDishes);

    const dispatch = useDispatch();

    const menu = dishes.map((dish) => (
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card key={dish.id} onClick={() => dispatch(selectDish(dish))}>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </div>
    ))

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>
            </div>
            <div className="row">
                {menu}
            </div>
            {/* <div className="row">
                <DishDetail></DishDetail>
            </div> */}
        </div>
    );
}

export default Menu;