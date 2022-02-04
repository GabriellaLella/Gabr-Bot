// Tempo di recupero in mensajes
const  usedCommandRecently  =  new  Set ( ) ;

const  isFiltered  =  ( da )  =>  {
    ritorna  ! ! usedCommandRecently . ha ( da ) ;
} ;

const  addFilter  =  ( da )  =>  {
    usedCommandRecently . aggiungi ( da ) ;
    setTimeout ( ( )  =>  {
        return  usedCommandRecently . cancella ( da ) ;
    } ,  3000 ) ; // 3 secondi per il tempo di attesa per il successivo comando;
} ;
modulo . esportazioni  =  {
    msgFilter : {
        è Filtrato ,
        aggiungiFiltro
    } } ;
© 2022 GitHub, Inc.
Termini
Privacy
Sicure