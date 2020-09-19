import React from 'react';
import { Content } from '../../components';
import { contentObj } from './Data';

function ContentPage() {
    return (
        <>
            <Content { ...contentObj } />
        </>
    )
}

export default ContentPage
