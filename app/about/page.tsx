import Style from "../about/about.module.css"

console.log(Style,"Style");


function AboutPage (){
    return(
        <div className={Style.container}>welcome to About Page</div>
    
    )
}

export default AboutPage