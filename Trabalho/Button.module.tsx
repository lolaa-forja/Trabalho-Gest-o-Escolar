 button {

  display: inline flex;
  align items: center;
  justify content: center;
  gap: var(space 2);
  border: 1px solid transparent;
  border radius: var(radius md);
  font: inherit;
  font weight: 600;
  cursor: pointer;
  transition: backgroundcolor 0.15s, 
  bordercolor: 0.15s;
}

 button:focus visible {
  outline: 3px solid 
  var(colorfocus);
  outline offset: 2px;
}

 button: disabled 
 { opacity: 0.6;
   cursor: not allowed; }

 sm { height: 36px;
   padding: 0 
   var(space 3);
    fontsize: 14px; }
 md { height: 44px;
   padding: 0
    var(space 4);
     fontsize: 16px; }
 lg { height: 52px; 

padding: 0 
 var(space 6); 
 fontsize: 16px; }
fullWidth { width: 100% ; }

primary { background: 
  var (color primary); 
  color: var 
  (color primary contrast); }
   primary: hover: not 
   (disabled) { 
    background: var
    (color primary hover); }

 secondary { 
  background: var (color surface); 
  color: var (color text); 
  border color: 
  var(color border); } 
  secondary: hover: not (disabled)  
  border color:
   var (color primary){
   };

 ghost { background: transparent; color: 
  var (color primary); }
 ghost: hover: not(disabled)
  { background: rgba(173, 42, 244, 0.08); }


 spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border right color: transparent;
  border radius: 50%;
  animation: spin 0.7s linear infinite;
}

 @keyframes spin { to { transform: rotate( 360deg 

);}

 }

 @media (prefers reduced motion: reduce) {

  spinner { animation duration: 2s; }

}