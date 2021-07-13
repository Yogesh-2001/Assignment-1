import React from 'react';
import Cards from './Cards';
import './index.css';
const App = ()=>{
return(
    <>
<div className='container-fluid'>
 <Cards 
 src='https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png'
 title='ReactJs Tutorial in Hindi❤'
 views='412k views'
 month='2 month ago'
 youtuber='Code with harry'

 />

 <Cards
 src='https://www.tutorialrepublic.com/lib/images/bootstrap-illustration.png'
 title='Bootstrap Tutorial❤'
 views='712k views'
 month='6 month ago'
 youtuber='Thapa Technical'
  />
 <Cards 
 src='https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg'
 title='JavaScript Tutorial ❤'
 views='212k views'
 month='4 month ago'
 youtuber='Free Code Camp'

 />
 </div>
 </>
)

};


export default App;