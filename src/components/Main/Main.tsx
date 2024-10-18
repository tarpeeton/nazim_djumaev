import {FC} from 'react';
import Banner from './Banner'
import About from './About'


const Main: FC = () => {
  return (
    <div>
        <Banner />
        <About/>
    </div>
  );
};

export default Main;