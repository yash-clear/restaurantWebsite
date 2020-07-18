import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, Button, Modal, ModalHeader, Row, ModalBody, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './components/Loading';
import { baseUrl } from './baseUrl'; 
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Commentform extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit= this.handleSubmit.bind(this);
      this.toggleModal = this.toggleModal.bind(this);

      this.state = {
        isModalOpen: false,

  };
}

toggleModal() {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}

  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render() {
      return(
        <>
              <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil" /> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                <Col md={{ size: 12 }}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows={5}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
          </>
      );
  }
}

function RenderDish({dish}) {
        return (
          <FadeTransform
          in
          transformProps={{
              exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
      <Card>
          <CardImg top src={baseUrl + dish.image} alt={dish.name} />
          <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
          </CardBody>
      </Card>
      </FadeTransform>
        );
      }
      
     function RenderComments({comments, postComment, dishId}) {
        if (comments == null || comments.length === 0) {
          return <div></div>;
        }
    else{
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <Stagger in>
            {comments.map(comment => {
              return (
                <Fade in key={comment.id}>
                  <li key={comment.id}>
                   {comment.comment}
                    <p>
                      -- {comment.author} ,{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                      }).format(new Date(Date.parse(comment.date)))}
                    </p>
                  </li>
                </Fade>
              );
            })}
          </Stagger>
          <Commentform dishId={dishId} postComment={postComment} />
        </div>
      )
      }}
      const  DishDetail = (props) => {
        if (props.isLoading) {
          return(
              <div className="container">
                  <div className="row">            
                      <Loading />
                  </div>
              </div>
          );
      }
      else if (props.errMess) {
          return(
              <div className="container">
                  <div className="row">            
                      <h4>{props.errMess}</h4>
                  </div>
              </div>
          );
      }
      else  if (props.dish != null) {
          return (
            <div class="container">
               <div className="row">
                    <Breadcrumb>
                        <Link to="/menu" style={{textDecoration:"none"}}>Menu</Link>
                        <span active>/ {props.dish.name}</span>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
                
              </div>
              <div className="col-12 col-md-5 m-1">
                  <Card>
                  <RenderComments comments={props.comments}
        postComment={props.postComment}
        dishId={props.dish.id}
      />
</Card> 
              </div>
            </div>
            </div>
          );
        } else {
          return <div></div>;
        }
      }
    
    
    export default DishDetail;