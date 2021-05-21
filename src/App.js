import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';
import mapStyles from './mapStyles';


// Load Google Map Component
function Map() {
    const [infoWindowPosition, setInfoWidowPosition] = React.useState(null);
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 36.806496, lng: 10.181532 }}
            defaultOptions={{styles: mapStyles}}
        >
            {/* CREATE MARKERS */}
            <React.Fragment>
                <Marker label="Kasserine" position={{ lat: 35.167488, lng: 8.833450 }} onClick={() => setInfoWidowPosition({ lat: 35.167488, lng: 8.833450 })} />
                <Marker position={{ lat: 35.288525, lng: 8.524565 }} onClick={() => setInfoWidowPosition({ lat: 35.288525, lng: 8.524565 })} />
                <Marker position={{ lat: 36.806496, lng: 10.181532 }} onClick={() => setInfoWidowPosition({ lat: 36.806496, lng: 10.181532 })} />
                {/* CUSTOM MARKER ICON PROPERTY */}
                <Marker position={{ lat: 35.987455, lng: 8.545214 }} onClick={() => setInfoWidowPosition({ lat: 35.987455, lng: 8.545214 })} 
                     icon={{url: '/skateboarding.svg', scaledSize: new window.google.maps.Size(25,25)}}
                />

                {infoWindowPosition && <InfoWindow
                    position={infoWindowPosition}
                    onCloseClick={() => setInfoWidowPosition(null)}>
                    <div>
                        <h3>Info Window </h3>
                        <span>This is an info window, you could add any information right here.</span>
                    </div>
                </InfoWindow>}
            </React.Fragment>
        </GoogleMap>
    )
};

// HOC COMPONENET (is Where you should load your Api key)
const Wrapper = withScriptjs(withGoogleMap(Map))

const App = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Wrapper
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
                loadingElement={<div style={{ height: '100%' }}></div>}
                containerElement={<div style={{ height: '100%' }}></div>}
                mapElement={<div style={{ height: '100%' }}></div>}
            />
        </div>
    )
};

export default App
