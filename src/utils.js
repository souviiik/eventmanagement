import React from 'react';
import _ from 'lodash';

export const generateOptions = (eventTypes, selectedOption) => {
    return _.map(eventTypes, function(eventType, key) {
        return <option key={key} value={eventType} selected={eventType === selectedOption}>{eventType}</option>
    })
}