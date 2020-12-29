import { Icon } from '@iconify/react';
import closeIcon from '@iconify-icons/carbon/close';
import Moment from 'react-moment';
import 'moment-timezone';

const LocationInfoBox = ({ info, onClick }) => {
    return (        
        <div className="location-info">
            <Icon icon={closeIcon} className="close-icon"
            onClick={onClick}/>
            <h2>Event Location Info</h2>
            <ul>
                <li><strong>{ info.title }</strong></li>
                <li><strong>Last Active: <Moment date={info.lastActive} format="LL"/></strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
