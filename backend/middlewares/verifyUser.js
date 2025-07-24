import express from 'express'

const verifyUser = async (req, res, next)=>{
 const loggedInUsername = req.user?.username; 
 const loggedInRole = req.user?.role; 
  const routeUsername = req.params.username;
  const routeRole = req.params.role;


  console.log(loggedInUsername,loggedInRole,routeUsername,routeRole)
if (
  !loggedInRole || loggedInRole !== routeRole ||
  !loggedInUsername || loggedInUsername !== routeUsername
) {
  console.log("not",loggedInUsername,loggedInRole,routeUsername,routeRole)
  return res.status(403).json({ message: "Access denied: username or role mismatch",isAccessed:false });
}
req.isAuthorized = true;
  console.log("yes",loggedInUsername,loggedInRole,routeUsername,routeRole,req.isAuthorized)
  next(); 
}

export default verifyUser;