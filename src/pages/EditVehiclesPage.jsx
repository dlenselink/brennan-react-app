
import {useEffect, useState} from "react";
import {PageTitle, PageWrapper, VehicleTable} from 'components'; // ErrorMessage,
import {flattenVehicleMakeData} from 'data';
import {defaultHeaders} from "../utils";




const EditVehiclesPage = () => {
    const [vehicleData, setVehicleData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/make/',
            {headers: defaultHeaders(),})
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setVehicleData(json);
            });
    },[]);
        const rowData = flattenVehicleMakeData(vehicleData);

        return (<PageWrapper>
            <PageTitle title="Manage Vehicles"/>
            <VehicleTable type="manage" rowData={rowData}/>
        </PageWrapper>);
    };

    export default EditVehiclesPage;
