import { Icon } from '@iconify/react'
import wildfireIcon from '@iconify/icons-mdi/fire-alert'
import volcanoIcon from '@iconify-icons/wi/volcano';

export const WildfireLocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={wildfireIcon} className="location-icon" />
        </div>
    )
}

export const VolcanoLocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="volcano-marker" onClick={onClick}>
            <Icon icon={volcanoIcon} className="volcano-icon" />
        </div>
    )
}

export default WildfireLocationMarker
