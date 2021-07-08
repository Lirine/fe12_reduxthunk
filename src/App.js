import './App.css';
import {getCards, getStatuses} from "./redux/actions";
import {connect} from "react-redux";
import {useEffect} from "react";
import Column from "./Column";
import AddModal from "./AddModal";

function App(props) {

    useEffect(() => {
        props.getStatuses()
        props.getCards()
    }, [])

    return (
        <div className="App">
            <h3>Kanban Board Redux Thunk</h3>
            <div className="container">
                <AddModal/>
                <div className="row align-items-start">
                    {props.statuses.map(el => <Column key={el._id} {...el}/>)}
                </div>
            </div>


        </div>
    );
}

const mapStateToProps = (state) => ({
    statuses: state.statuses
})

const mapDispatchToProps = (dispatch) => ({
    getStatuses: () => dispatch(getStatuses()),
    getCards: () => dispatch(getCards())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
