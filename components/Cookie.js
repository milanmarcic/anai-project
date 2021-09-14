import React from "react";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

export default function Cookie (){

  

  return (
    <CookieConsent
    debug={false}
    location="bottom"
    buttonText="Prihvati kolačiće"
    cookieName="myAwesomeCookieName2"
    style={{ background: "#374151" , textAlign: "left" , padding:"12px" , fontSize: "18px" , fontFamily: "PT Sans Caption"}}
    buttonStyle={{ color: "white", fontSize: "18px", borderRadius: "4px" , background: "#ef4444", fontFamily: "PT Sans Caption" , padding:"9px" }}
    expires={150}
  >
     Koristimo kolačiće (eng. "cookies") kako bismo za vas personalizirali sadržaj i oglase na našem webu te vam pružili najbolje korisničko iskustvo. Više informacija možete saznati <a href="/cookiepolicy" className="underline text-red-500">ovdje.</a>  {" "}
    
  </CookieConsent>
    );
  }
  


     
