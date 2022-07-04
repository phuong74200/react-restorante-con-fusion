import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import { useSelector } from 'react-redux';
import { createSelector } from 'reselect'

import { Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';

const selectDishProps = createSelector(
    (state) => state.dishes,
    (dishes) => dishes.value.selectedDish
);

const DishDetail = () => {
    const dish = useSelector(selectDishProps);
    return dish ? (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to="/menu">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    {dish.name}
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{dish.name}</h3>
                <hr />
            </div>
            <div className="row">
                <div className="col-12 col-sm-5">
                    <Card>
                        <CardImg top src={`/${dish.image}`} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-7">
                    <h2>Comments</h2>
                    {
                        dish.comments.map((comment) => (
                            <div key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>{comment.author}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    ) : null;
}

export default DishDetail;
