import DeleteModal from "./DeleteModal";
import {changePriority, changeStatus} from "./redux/actions";
import {connect} from "react-redux";
import EditModal from "./EditModal";

function Card(props) {

    const {name, priority, status, description} = props.card

    const moveButtonHandler = (card, statuses, direction) => {
        props.changeCardStatus(card, statuses, direction)
    }

    const statusesArr = props.statuses.map(el => el.title)

    return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
                <p className="card-text"></p>
                {status} {' '}
                <button type="button" className="btn btn-outline-primary"
                        onClick={() => moveButtonHandler(props.card, props.statuses, -1)}
                        disabled={statusesArr.indexOf(status) === 0}>⬅
                </button>
                <button type="button" className="btn btn-outline-primary"
                        onClick={() => moveButtonHandler(props.card, props.statuses, 1)}
                        disabled={statusesArr.indexOf(status) === statusesArr.length - 1}>➡
                </button>
                <br/>
                Priority: {priority}
                <button type="button" className="btn btn-outline-primary"
                        onClick={() => props.changeCardPriority(props.card._id, priority, 1)}
                        disabled={props.priorities.indexOf(priority) === props.priorities.length - 1}>⬆
                </button>
                <button type="button" className="btn btn-outline-primary"
                        onClick={() => props.changeCardPriority(props.card._id, priority, -1)}
                        disabled={props.priorities.indexOf(priority) === 0}>⬇
                </button>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <EditModal name={props.card.name} description={props.card.description} id={props.card._id}/>
                        </div>
                        <div className="col">
                            <DeleteModal name={props.card.name} id={props.card._id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    statuses: state.statuses,
    priorities: state.priorities
})

const mapDispatchToProps = (dispatch) => ({
    changeCardStatus: (card, statuses, direction) => dispatch(changeStatus(card, statuses, direction)),
    changeCardPriority: (id, priority, direction) => dispatch(changePriority(id, priority, direction))
})
export default connect(mapStateToProps, mapDispatchToProps)(Card)