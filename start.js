const  fs  =  richiedi ( "fs" ) ;
const  Gruppo  =  JSON . parse ( fs . readFileSync ( './database/group.json' ) ) ;

/**
*
* @param { stringa } id
*/
const  addGroup  =  ( id )  =>  {
  let  position  =  false ;
    Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  vero ;
    }
  } ) ;
    se  ( posizione  ===  falso )  {
      const  obj  =  { 
          da : id , 
          offline : falso , 
          benvenuto : falso , 
          antilink : falso ,
          parolacce : falso ,
          anticancellazione : falso ,
          rileva : falso ,
          viewOnce : false ,
        } ;
        Gruppo . spingere ( obj ) ;
        fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
        restituisce  falso ;
    }
} ;

/**
*
* @param { stringa } id
*/
const  cekOffline  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    ritorno  Gruppo [ posizione ] . offline ;
    }
} ;

/**
*
* @param { stringa } id
*/
const  addOffline  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . offline  =  vero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  delOffline  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . offline  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  cekBenvenuto  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    ritorno  Gruppo [ posizione ] . benvenuto ;
    }
} ;

/**
*
* @param { stringa } id
*/
const  addBenvenuto  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . benvenuto  =  vero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  delBenvenuto  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . benvenuto  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;
/**
*
* @param { stringa } id
*/
const  cekDetect  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    ritorno  Gruppo [ posizione ] . rilevare ;
    }
} ;

/**
*
* @param { stringa } id
*/
const  addDetect  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . rileva  =  vero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  delDetect  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . rileva  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  cekAntilink  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    ritorno  Gruppo [ posizione ] . anticollegamento ;
    }
} ;

/**
*
* @param { stringa } id
*/
const  addAntilink  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . antilink  =  vero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  delAntilink  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . antilink  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  cekBadword  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    ritorno  Gruppo [ posizione ] . parolacce ;
    }
} ;

/**
*
* @param { stringa } id
*/
const  addBadword  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . parolaccia  =  vero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  delBadword  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . parolaccia  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  cekAntidelete  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    ritorno  Gruppo [ posizione ] . anticancellazione ;
    }
} ;

/**
*
* @param { stringa } id
*/
const  addAntidelete  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . anticancella  =  vero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  delAntidelete  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . anticancella  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  cekViewonce  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    ritorno  Gruppo [ posizione ] . vistaUna volta ;
    }
} ;

/**
*
* @param { stringa } id
*/
const  addViewonce  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . viewOnce  =  vero ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

/**
*
* @param { stringa } id
*/
const  delViewonce  =  ( id )  =>  {
  let  position  =  false ;
  Oggetto . tasti ( Gruppo ) . forEach ( ( i )  =>  {
    if  ( Gruppo [ i ] . da  ===  id )  {
      posizione  =  io ;
    }
  } ) ;
  se  ( posizione  !==  falso )  {
    Gruppo [ posizione ] . viewOnce  =  falso ;
    fs . writeFileSync ( './database/group.json' ,  JSON . stringify ( Gruppo ,  null ,  "\t" ) ) ;
  }
} ;

modulo . esportazioni  =  {
  gruppo ,
  addGroup ,
  aggiungiOffline ,
  delOffline ,
  cekOffline ,
  aggiungi Benvenuto ,
  del Benvenuto ,
  cekBenvenuto ,
  addAntilink ,
  delAntilink ,
  cekAntilink ,
  addBadword ,
  del parolacce ,
  cekBadword ,
  aggiungi Anticancella ,
  delAnticancella ,
  cekAntidelete ,
  addDetect ,
  delRileva ,
  cekDetect ,
  addViewonce ,
  delView una volta ,
  cekViewonce
} ;
