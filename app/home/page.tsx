import  style1 from "../home/home.module.css";

console.log(style1,"style1");

function HomePage(){
    return(
        <div className={style1.design}>Wellcome To Home Page</div>
    )
}


export default HomePage