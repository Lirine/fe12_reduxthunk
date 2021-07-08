import 'bootstrap/dist/css/bootstrap.css'
import {connect} from "react-redux";
import Card from "./Card";

function Column(props) {
    return (
        <div className="col">
            {props.title}

            {props.cards
                .filter(el => el.status === props.title)
                .map(el => <Card key={el._id} card={el} />)}

        </div>
    )
}

const mapStateToProps = (state) => ({
   cards: state.cards
})

export default connect(mapStateToProps) (Column)