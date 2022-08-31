import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import styles from './styles.module.scss'
import { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        // Removes the attribution text in the bottom right corner of the map
        function removeAttributionText(){
            document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';
        }
        removeAttributionText()
    },[])
        return (
            <div className={styles.mapContainer}>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "30vh" , width: '100%'}} zoomControl={false} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
}

export default Map