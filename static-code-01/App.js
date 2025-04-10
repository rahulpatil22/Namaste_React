import React from "react";
import ReactDOM from "react-dom/client";




/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - search comp
 * - RestaurantContainer
 *   -RestaurantCard
 * Footer
 * - copyright
 * -link
 * -address
 * -contact
 *  
 */
const Header = () =>{

  return (

    <div className="header">
      <div className="logo-container">
        <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAwFBMVEXy8vLyGgX0vwfzFAXpAADvIwzuAADxAADlAADvNAnx8/Hy8/bxsQD3pBH1///z8fPznA3wrQj0LQr0hxX05+XxsLDoVVHz+Pjz1dLnPzzuYhfrUxT0fxjvpwvmY2Dx3dvmIhzojInlLy3sl5PqXVnqurbx47nz68zrtAD0zsjwwEH08ebcAADseXjiQUDux8XtQAzvjxDsHRbpo6H17tjsw1Ht1JTv1ojtx2T14Kzz0XnuuyvvhYPz4aPmbWv0yF8Qs4oqAAAELElEQVR4nO2abW/iOBCAHZzaWTslRxvi0C2E1yRNCvR4h7Lw///VjbOEQrt7X05Zo9M8UglBSDwaj2dsp4QgCIIgCIIgCIIgCIIgCIIgCIIgyH9GqXq9+NM3wrRNgSJhcxxMJsG4GQll2qZA1qeHGWMcYKx7mNZNCwEq6jBuWdTSUMrZITIcLI+osMWtK1grNGylRvYnJ8viztSolYr6X5zAqm90BP3g5MQo5JNF2ckq8Mw5qebJwnp649+/87en063dVDrh/jxQI/3+adI9uM9O+95+bDz8lKIt30wJhZk3OgWKPjSenfu/7Md2KcVGprJKjMssByn7UsriY2Go23gt+iHlXEu1zCgR4Tu/laKOoaQikWP9TspyIiOrBSHDUupLooOUqV5zjhT91n58bd+//n0ZKWnESfizc061a25ac2sfOTXzzTgJEpwb3+N9O03b98/n9heYqehgtS+lKLPfarU7u+w6FusZSilPTe+scgDpN5A631h3sHox1JRV5zx+V1IW75hbu6jQ+XWkjBWEgnP3u5LiY4NKRERlVbiUojOzq3RVhupSio+NbrM84nfpZynaNdWMS0SPf5biPWVqMVVKnZbEH1K07xPPcKjUgF1JUTa4geMEf8KvpCY6o0yfvKj5lRSf30CgoC/r04RSirdMB+knxZa0lIJtqMHd8QeCDHkpxYc3oURIsSml9OmJUsqNbUK/oPQSlOqMCm7GiaipTYvCaU+l6bp5RpBDURb4wXiBukCFto6UHd7G1CvwSP3AdKBu4WT4jKfCLqXd8IYGT6N6jPXELaVUQbNp2uAXKGM7vX/npgYPcsn7/Mmfi5pHZAG8K14BuIKRvpVXHkIBQo+qqrj1yEWsyaV+k0MSSRFvE9BK4jjJyxMpv3jgEE6nsP3zpvpS6bjKpatZkXXquulKkSSD202e60u6PX0rmEVEvTjMtid+k9mMdSo9rAKp4263SWI33R3dNAaZbPcOVll6BK9Yxwq6M2yy4LW1b/Fek0/2/Wr3EiC1TRKRw0XKlbvZuhsh8/c0zrJc/nCz4ksBZ06kXux93e925mxej+ygyv6jhy91IUBZrmWWu8ZWCrlxf2gpkaaQVhCizp4P6i/2cLRnhyY/jMZ8XHGkNpvdAkZrIWXiHtfuGiZh5haRStx3/dtDPhyzrg+DyFg3auqHuEFUZaaDVCKIFLvGZpEs3VXsvseLlZsusiyOl2CoFzH266vD5i/2ZDAP63PeGcz9SouCXDYWkMwwcnoSLnO51ldI+He3oWchfGXIRkqETncEOQUlas4G9arr1Oq4kELXq3WWrcFPbJfZMZb5erk8rvQYibme/6K3jzr6mZ8IO/rZbbX956KOe0UFl1Lpj8pCL4jSE03of50oVqGi6jghCIIgCIIgCIIgCIIgCIIgCIIg/0P+AX0RX+029ANlAAAAAElFTkSuQmCC"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
   </div>

  )
}


// const styleCard = {
//   backgroundColor:"#f0f0f0"
// }
const RestaurantCard = () =>{

  return (

    <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
      <img alt="rest-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/FOOD_CATALOG/IMAGES/CMS/2025/2/17/93654022-6286-40fc-96b3-40ea3c283f1d_e87c14c3-5b23-48b9-89ad-d465af764582.jpg"/>
      <h3>Jalaram Foods</h3>
      <h4>Biryani,North Indian, Asian</h4>
      <h4> 4.4</h4>
      <h4> 30 min</h4>
    </div>
  )
}

const Body = () =>{


  return (

    <div className="body">
    <div className="search">Search</div>
    <div className="rest-container">
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>

    </div>

    </div>
  )
}
const AppLayout = ()=>{

  return(

    <div className="app">
    <Header/>
    <Body/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
