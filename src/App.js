import React from 'react';
import './App.css';
import Card from './components/Card/Card.js';
import NavBar from './components/NavBar/NavBar.js';
import MoreDetails from './components/MoreDetails/MoreDetails.js';
import AddPhoto from './components/AddPhoto/AddPhoto.js';
import Modal from './components/Modal/Modal.js';
import ConfirmationForm from './components/ConfirmationForm/ConfirmationForm.js';
import EditForm from './components/EditForm/EditForm.js';
import AddForm from './components/AddForm/AddForm.js';
import axios from 'axios';

class App extends React.Component {

  state={ 
    photos:[],
    currentPhoto:"",
    route:"home",
    showModal:false,
    form:{
      author:"",
      title:"",
      imageUrl:"",
      description:""

    },
    touched:{
      author:false,
      title:false,
      imageUrl:false,
      description:false
    }
  }




  componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/photos/')
  .then(response => response.data)
  .then(json => json.splice(0,100))
  .then(res=> res.map(photo=>{
    return { ...photo,
          author:"Albert",
          description:"This is a stock photo from the jsonplaceholder api"
                  }
  }))
  .then(photos=> this.setState({photos:photos}))       //fetching the info from the api and then setting the state with
                                                       // splicing the first 100 photos so that only 100 photos are listed   
  }                                                    //instead of 5000(api) and added two new attributes author and desc   


  handleError=(field)=>(event)=>{                       // onBlur handling(when clicked) to set the touched att to true 
    this.setState({                                     //       
      touched:{ ... this.state.touched, [field]:true}
    });
  }


  validateForm(author,title,imageUrl,description){     //function that recives the values from the forms 
      const errors={
             author:"",                                // erros object to store the errors if different conditions are not met 
             title:"",
             imageUrl:"",
             description:""
      }
      let imageType=false;
      if(imageUrl.endsWith("jpg") || imageUrl.endsWith("png") || imageUrl.endsWith("jpeg")){
        imageType=true;
      }

      if(this.state.touched.author && author.length<3){
        errors.author="Author should be more than 3 characters"
      } else if(this.state.touched.author && author.length>16){
         errors.author="First name should be less than 16 characters"
      }

       if(this.state.touched.title && title.length<3){
        errors.title="title should be more than 3 characters"
      } else if(this.state.touched.author && author.length>16){
         errors.title="title should be less than 16 characters"
      }

       if(this.state.touched.imageUrl && !imageType){
        errors.imageUrl="Image should finish with jpg,png,jpeg";
      } 
       if(this.state.touched.description && description.length<3){
        errors.description="title should be more than 8 characters"
      } else if(this.state.touched.description && description.length>50){
         errors.description="description should be less than 50 characters"
      }
      return errors;
  }

  changeUrl=(e,newRoute)=>{             //changing the route so that different content is shown on the DOM.
   e.preventDefault();
    this.setState({route:newRoute})
  }

  selectPhoto=(id)=>{                     // storing a current photo in the state on edit click so that that photo
    const photosObj=this.state.photos;    //can be manipulated 
    const find=photosObj.find(photoObj => {
      return photoObj.id===id
    } );
      this.setState({currentPhoto:find, route:"details"})
  }

  toggleModal=()=>{                       //toggling modal if show is true show modal else hide modal
    let newStateModal=this.state.showModal;

    this.setState({showModal:!newStateModal});
  }

  deletePhoto=()=>{
    // axios.delete('https://jsonplaceholder.typicode.com/photos/' + this.state.currentPhoto.id)
    //   .then(response=>{
    //     console.log(response);
    //   })     for fake deleting directly in the api
      const photoToDelete={...this.state.currentPhoto};    //deleting photo instead directly in the api(it will only mimic)
      const newPhotos=[...this.state.photos];               //finding the photos id then splicing from the array and 
      const findIndex=newPhotos.findIndex(photo=> photo.id===photoToDelete.id); //setting the new photos with the new array
      newPhotos.splice(findIndex,1);                                                                
      this.setState({photos:newPhotos, currentPhoto:"", route:"home", showModal:false}); //hiding the modal and changing the route
  }

  editPhoto=()=>{
    this.setState({route:"editPhoto"})      //setting the route to show the edit form
  }

  saveEditChanges=(e)=>{

    //  axios.put('https://jsonplaceholder.typicode.com/photos/' + this.state.currentPhoto.id, newPhotos[findIndex])
    //   .then(response=>{
    //     console.log(response);
    //   })     
      
      let photoToEdit={...this.state.currentPhoto}  //similarly like with the delete photo instead of editing directly
      const newPhotos=[...this.state.photos];       //in the api(it will only mimic) i find the photo to be edited
      const findIndex=newPhotos.findIndex(photo=> photo.id===photoToEdit.id); //then setting the new values
      newPhotos[findIndex].author=this.state.form.author;                   //setting the state with the new edit changes
      newPhotos[findIndex].title=this.state.form.title;                     //deleting the form values and changing the route  
      newPhotos[findIndex].url=this.state.form.imageUrl;            //and reseting the touched values back to false
      newPhotos[findIndex].description=this.state.form.description;
      newPhotos[findIndex].thumbnailUrl=this.state.form.imageUrl;
      console.log(newPhotos);
     this.setState({photos:newPhotos, currentPhoto:"", route:"home", form:{author:'', title:'', imageUrl:'', description:''}, touched:{
      author:false,
      title:false,
      imageUrl:false,
      description:false
    } });
     
  }


    handleChange = e => {
    const { name, value } = e.target;      

    this.setState(prevState => ({
      form: { ...prevState.form, [name]: value }       //changing the values in the form for the input that is changing
    }));
  };  
  ID = () => {

  return '_' + Math.random().toString(36).substr(2, 9);      //funciton for a random ID
};
      
      addNewPhoto=(e)=>{

          //  axios.post('https://jsonplaceholder.typicode.com/photos/', photoToBeAdded)
    //   .then(response=>{
    //     console.log(response);
    //   })     

        let id=this.ID();              // adding a new photo similarly instead of directly in the api(it will only mimic)
        e.preventDefault();               //a new photo object is created from the values in the add form and then 
        const newPhotos=[...this.state.photos];  //that object is added in the begginning of the array
        const photoToBeAdded={                //and the state is set with the new object the form and the touched are reset 
              key:id,
              id:id,
              author:this.state.form.author,
              title:this.state.form.title,
              url:this.state.form.imageUrl,
              description:this.state.form.description,
              thumbnailUrl:this.state.form.imageUrl

        };

        newPhotos.unshift(photoToBeAdded);
       this.setState({photos:newPhotos, currentPhoto:"", route:"home", form:{author:'', title:'', imageUrl:'', description:''}, touched:{
         author:false,
      title:false,
      imageUrl:false,
      description:false
    } });

      }
  

  render(){
      const errors=this.validateForm(this.state.form.author, this.state.form.title, this.state.form.imageUrl, this.state.form.description);
        //validate form is called with the values from the input and errors are stored in the errors const
    let btn=false;           
    for(let key in errors){
      if(errors[key]!==""){
        btn=true;
      }
    }

    let newForm=this.state.form;
    let btn1=false;
    for(let key in newForm){
      if(newForm[key]===""){
          btn1=true;
      }
    }
    let disab=false;
     if(btn || btn1){
        disab=true;
     }                        //checking if there are errors or the form is not touched the submit btn should be
                              //disabled so that an submit with empty values or a submit with errors is submitted
    let result="";
    if(this.state.route==="home"){
      result=this.state.photos.map(photo=>{
      return <Card selectPhoto={(id)=>this.selectPhoto(photo.id)} key={photo.id} id={photo.id } title={photo.title} author={photo.author} description={photo.description} thumbnailURL={photo.thumbnailUrl} imgURL={photo.url}/>
    })

    }else if(this.state.route==="details") {
      result= (<MoreDetails photoObj={this.state.currentPhoto} changeUrl={this.changeUrl} openModal={this.toggleModal} editPhoto={this.editPhoto}/>)
    }else if(this.state.route==="addphoto"){
      result= (<AddForm btn={disab} errors={errors} touched={this.state.touched} handleError={this.handleError} addNewPhoto={this.addNewPhoto} form={this.state.form} handleChange={this.handleChange} />)
    }else if(this.state.route==="editPhoto"){
      result=(<EditForm btn={disab} errors={errors} touched={this.state.touched} handleError={this.handleError} photoObj={this.state.currentPhoto} saveEditChanges={this.saveEditChanges} form={this.state.form} handleChange={this.handleChange}/>)
    }
      
      //depending on the route value in the state a different RESULT is shown in the DOM.

  return (
    <div>
    <NavBar changeUrl={this.changeUrl}/>
    <div className="App">
    
          {result}
    </div>

   <Modal show={this.state.showModal}>
        <ConfirmationForm toggleModal={this.toggleModal} deletePhoto={this.deletePhoto} />
   </Modal>
    
    </div>
  );
}
}
export default App;


//modal with the confirmation form is show if the state for modal show is true