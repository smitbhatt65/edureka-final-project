import React from 'react';
import { withRouter } from 'react-router-dom';
import './QuickSearchDisplay.css';
import {Link} from 'react-router-dom';

const DisplaySearch = (props) => {
    //const handleClick = (id) => {
    //    props.history.push(`/details/${id}`);
    //}
    

    const listMeal = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                     <Link to={`/details/${item._id}`}>
                        
                        <div className="tileContainer"   >


                            <div className="tileComponent1">
                                <img src={`/images/${item.name}.jpg`} />
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Have  exclusive {item.name} options
                                    </div>
                            </div>

                        </div>
                 </Link>  
                )
            })
        }
    }

    return (
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    Quick Searches
                </p>
                <p className="quickSearchSubHeading">
                    <center><strong> Tired of Searching  for a restaurant? Select a mealtype instead!!</strong></center>
                </p>
                {listMeal(props)}
            </div>
        </div>
    )
}

export default withRouter(DisplaySearch);