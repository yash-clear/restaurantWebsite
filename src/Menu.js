import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle , Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './components/Loading';

import { baseUrl } from './baseUrl';
     /* function  Renderdish ({dish,onClick}){
        return (
          <Card
              onClick={() => onClick(dish.id)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
          </Card>
      );
  }*/
  function RenderMenuItem ({dish, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} style={{textDecoration:"none",fontStyle:"Italic",color:"green",fontWeight:"200"}} >
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}


        const Menu=(props)=>{
            const menu = props.dishes.dishes.map((dish) => {
                if (props.dishes.isLoading) {
                    return(
                        <div className="container">
                            <div className="row">            
                                <Loading />
                            </div>
                        </div>
                    );
                }
                else if (props.dishes.errMess) {
                    return(
                        <div className="container">
                            <div className="row"> 
                                <div className="col-12">
                                    <h4>{props.dishes.errMess}</h4>
                                </div>
                            </div>
                        </div>
                    );
                }
              
              return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish}  onClick={props.onClick}/>
                </div>
              )
          });
        return (
          <div className="container">
                 <div className="row">
                    <Breadcrumb>
                       <Link to="/home" style={{textDecoration:"none"}}>Home</Link>
                        <span class="active">/ Menu</span>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
              
                  {menu}</div>
             </div>
        )
    }
export default Menu;
