
import './App.css';

import React, { useState,useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout';
import Home from './page/Home/home';
import About from './page/About/about';
import Blog from './page/Blog/blog';
import Projects from './page/Projects/projects';
import Service from './page/service/service';
import {context} from './components/context/context'
import { useContext } from 'react';
function App() {
  // const state = useContext(context)
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
    if (theme === 'light') {
    setTheme('dark');
    } else {
    setTheme('light');
    }
    };
    useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
    }, [theme]);
    
  return (
    
    <div className='App{` ${theme}`}'>
      
      <button className='darkmode' onClick={toggleTheme}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACkCAMAAAAuTiJaAAAAflBMVEX///8AAADW1tafn5/T09Pt7e309PT7+/teXl44ODj39/eysrLw8PBRUVHn5+fLy8vg4OCHh4d1dXUUFBSmpqZpaWnExMRjY2PMzMwlJSVVVVWQkJC8vLwsLCwxMTFBQUFHR0ceHh6srKxycnKZmZkMDAyBgYEXFxeNjY0mJia8zEBNAAAE8klEQVR4nO3d63qiOhgF4OGogFCgiicUtdra+7/BTUXwAw2QtG6QrPffjELDekJIQsB//wAAAAAAAAAAAAAAAAAAAAAAAHpAHSvKNuq6FK8l+lZ+aF2X45UY80tmSqJ3XZIXoipX065L8kKK0HB+tofQBCA0AQhNAEITgNAEIDQBCE0AQhOA0B4wPpKdZrI/L0I7sL8zOrjJXKKxqXMJxGIfsX3MMpsZzK9M3Ms3gmeUr4/8XRbJ/o35FS/cK8ppvGB+wbCudVF9Rgl7SDspjamZzjnQ2PXMd/MTOHxGCXvomB+w8s1OrZY/Lnax+tuy9VZR09J2TWhGm2SmzP66dD2lJrdjTgRS80hmimBdfT1HctAW91EbLtl8/ozy9VNADnvm8W07ohu7zylfP32SA+c8QU1az+znFK+nSHVx+Lb0SSVl90kGabQ+/Tq0D84T+/XZeWpf991+PXY07bjWpof4/kN7KdgYDoF9zo49KA/cR/ox3G2vwXxtk9k5qjRcjpznZmYU79NjX09K/zd1t7eub2azO5fyGTk/22lyXQMIwy//+7BRHtpXIvK80f9Yyl6jI4WqZYyYHrAP7Mgubd+keR+yMdbv9aEpH37zXuTihQ2RpVYSTW63UZq4YMJytZJZm8zSuoYz9GbdLrO0Xau5hSUZp21m6TUUPY+M33TdpOKuS9sPow+OzJRl18Xth/ibJzSsXf5htuihUVspZzcqYsYgnWnddYm7N2rd3citpJ0UKvitxgLUVppbnUwRT38jc+y6zJ1rmBB6JJS9g2u0HHVSO1nG7d5UK0zJmjJvxR8aXTVD93tgL2d7SVGpud/dOqj+lj+0vcPYbzKojq/nVo67qGtc487coXm/A3DXFysWrqjVT7hCY+93AO5GSu/5J0Khac37HYC7g9vnn/xxaPvHf/8lTastV7G8+HenJ3u/A2BWemObYu3K7y4E7P0OgX+mxza7jR5FuhybmLHf+cBGpaaqF1QyI3bXaWiBdm5L+x1UPathcM11Z9wh9caExPyhfXZd5s4teCdulXc8z+hxT3Mk0p+d5ScxWhnLPp2WWtQs5XvkVPPgrDw+m4OiLFS0lGo1J0XgTXQXXFXN6rq0PWHztGpYoXaltx614ypw03qB2hp3129adtZCLIsn7KA5sbRbK8s0Rkt2i7r2gUVWVZfHxOqs0au9t6ifxMV18yH7kxnbcob+WcZUI0cvtVNq+HBItZxF5e3ieCFp++ZdHiGrPCYWneeVWcnTKohLj1xMzj/bhVLOqnnXuwPVx/e9yJm51uXx4veNO5/GfvkCkK83lWbBFXFbmHZ/383zVV1/e1voqn/fM7Pz7VzpUrPnopfFt2LDnWxnKLndKf4yk0SuSyqdDOK8LW6TTZcSpWbS9Yvcz6bTpc3f0oxGS++lmnNXFpPO9LqyjK0i0vEfC5xgE5oaZ4v4sjRSUYQaJZra+K9L11O3WSBLcDBEntyTJbRp/jahDfsaYASJVTdIL7rGsqyGMa8d2x07M/0ycP+qabDyzrE0E+CLVTrkXobsc9O4nn51K9GCdGB/smS5DqRsLQjq3rjU6nej9HNwlKab1gJerS8AoQlAaAIQmgCEJgChCUBoAhCaAIQmAKEJwM/vCpjkA3aJbpz8XvYTR1u8lo/L5DhehahnAAAAAAAAAAAAAAAAAAAAANDoP00fN2lhD7RfAAAAAElFTkSuQmCC" alt="" width='20px' /></button>
      <h6>bu qora rejim</h6>
      
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
             <Route index path='/' element={   
                   <Home />
              } />
            <Route path='/about' element={
                 <About />
            } />
            <Route path='/blog' element={
            <Blog />
            } />
            <Route path='/projects' element={
            <Projects />
            } />
            <Route path='/service' element={
            <Service />
            } />

          </Route>

          
          
        </Routes>
      </BrowserRouter>
      </div>
    
    
  );
  

}

export default App;









