import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("usertype") == null)
    return false;
  
  if(localStorage.getItem("usertype") != "admin")
    return false;

  return true;
};
