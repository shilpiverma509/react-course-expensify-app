//{HOC}
//A Component {HOC} that renders another component
//Reuse Code
//Render Hijacking
//Prop manipulation 
//Abstract State

 import React from 'react';
 import ReactDOM from 'react-dom';
const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is :{props.info}</p>
    </div>
);
//withAdminWarning is a general function that takes a component as a parameter
const withAdminWarning = (WrappedComponent)=>{
    return (props)=>{
        return (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
        )
    }
}

const AdminInfo= withAdminWarning(Info);

const requireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>)
                :(<p>Please log in to view the info</p> )
                }
        </div>
    )
}
const AuthInfo = requireAuthentication(Info);
//this is AdminInfo component
// // (props)=>(
//     <div>
//     <p>This is private info. Please don't share</p>
//     <WrappedComponent />
// </div>

ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is the detail"/>,document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin={true} info ="There are the details" />,document.getElementById('app'));




// const Info = (props)=>(
//     <div>
//         <h1>Info</h1>
//         <p>This info is :{props.info}</p>
//     </div>
// );

// //Regular function not a react component
// const withAdminWarning = (WrappedComponent)=>{
//     //{HOC} adds an admin message to other components (AdminInfo)
//     /*when we are instantiating a componet inside of JSX
//     we can use {} to create a JS expression and we can spread
//     out any given object
//     {...props} has the effect of taking every key value pair 
//     on that object and passing them down as props */
//     return (props)=>(
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share!</p>}
//            <WrappedComponent {...props}/>
//         </div>
//     );
// };
// //require Authentication
// const requireAuthentication = (WrappedComponent)=>{
//     //{HOC}
//     return (props)=>(
//         <div>
//             {props.isAuthenticated?
//                 (
//                 <WrappedComponent {...props}/>
//                 )
//                 :(
//                     <p>Please log in to view the info</p>
//                 )}
//         </div>
//     );
// }

// //wrapping info component into a regular function
// const AdminInfo=withAdminWarning(Info);
// const AuthInfo = requireAuthentication(Info);


// //ReactDOM.render(<AdminInfo isAdmin={false} info ="There are the details" />,document.getElementById('app'));
// ReactDOM.render(<AuthInfo isAuthenticated={false} info ="There are the details" />,document.getElementById('app'));