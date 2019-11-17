import React, { Fragment } from 'react';
import useDataApi from '../helpers/FetchData'
import ControllerItem from './ControllerItem'
import SettingsTable from './SettingsTable'
import Properties from './Properties';


export default function Controllers() {
  
const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'http://ae.hr/rooms_status.php',
    { controllers: [] },
  );

    return (
        <Fragment>
            {isError && <div>Something went wrong! </div>}
            {isLoading ? (
                <div>Loading data...</div>
            ) : (
                    <ul>
                        {data.controllers.map(item => (
                            <ControllerItem
                                key={item.id}
                                zone={item.zone}
                                name={item.name}
                                address={item.address}
                                settings={item.settings.map(item => (
                                    <SettingsTable
                                        key={item.Id}
                                        name={item.settingName}
                                        value={item.settingValue}>
                                    </SettingsTable>
                                ))}
                                properties={item.properties.map(item => (
                                    <Properties
                                        key={item.id}
                                        name={item.name}
                                        value={item.Value}>
                                    </Properties>
                                ))}
                                ></ControllerItem>       
                        ))}
                    </ul>)}
        </Fragment>
    )
}
