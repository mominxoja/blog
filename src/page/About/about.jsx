import { useContext } from 'react';
import './about.css'

import { context } from '../../components/context/context';

const About = () => {
    const allstate = useContext(context)
    const all=allstate.state
    console.log(all);
    return (
    <div>
        {all}

    </div>
    );
}

export default About;


