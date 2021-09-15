import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id : 'm1',
    title : 'A First Meetup',
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mumbai_Skyline_at_Night.jpg/1280px-Mumbai_Skyline_at_Night.jpg',
    address : 'Some address 4 , 12344 Mumbai',
    description : 'This is a first meetup!'
  },
  {
    id : 'm1',
    title : 'A First Meetup',
    image : 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Kolkata_City_skyline_from_Hoogly_bridge.jpg',
    address : 'Some address 5 , 16444 Kolkota',
    description : 'This is a second meetup!'
  }
    
];


function HomePage(){
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //send http request
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />
  
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 1
//   }


export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  //fetch data from api
  return {
        props:{
          meetups : DUMMY_MEETUPS
        },     
      };
}

export default HomePage;