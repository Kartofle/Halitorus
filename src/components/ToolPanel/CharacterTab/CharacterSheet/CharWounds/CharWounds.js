import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Wound from './Wound/Wound';

const charWounds = (props) => {
    return (
        <FormControlLabel
            control={
                <div>
                    <Wound />
                    <Wound />
                </div>
            }
            label={<h3>Wounds</h3>}
            labelPlacement="start"
        />
    );
}

export default charWounds;