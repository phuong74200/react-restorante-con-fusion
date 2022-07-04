import { useSelector } from 'react-redux';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { createSelector } from 'reselect'

const selectFeaturedCard = createSelector(
    (state) => state.home,
    (home) => home.value.featuredCard
);

const HomeCard = () => {
    const featuredCard = useSelector(selectFeaturedCard);
    return (
        <>
            {featuredCard.map(card => (
                <div key={card.id} className="col-12 col-md m-1">
                    <Card>
                        <CardImg src={card.image} alt={card.name} />
                        <CardBody>
                            <CardTitle>{card.name}</CardTitle>
                            {card.designation && <CardSubtitle>{card.designation}</CardSubtitle>}
                            <CardText>{card.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </>
    )
}

export default HomeCard;
