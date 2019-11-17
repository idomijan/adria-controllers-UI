import React, { Fragment } from 'react';
import useDataApi from '../helpers/FetchData'
import {Card} from '@material-ui/core'

export default function ControllerPage({match}) {
  
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
                    <Card>
                        {JSON.stringify(data.controllers[match.params.id])}
                    </Card>)}
        </Fragment>
    )
}
