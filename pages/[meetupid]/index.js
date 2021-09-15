import { Fragment } from "react";

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(){
    
    return (
        <MeetupDetail 
        image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/DLF_CyberHub.jpg/2560px-DLF_CyberHub.jpg' 
        title="First Meet up" 
        address="Some stress 6, Gurgaon" 
        description="This is a first"
        />    

    );
}

export default MeetupDetails;