const  assios  =  richiedi ( 'assios' ) ;
const  cheerio  =  richiedere ( 'cheerio' ) ;

funzione  playstore ( nome ) {
	restituisci una  nuova  promessa ( ( risolvi ,  rifiuta )  =>  {
		assio . get ( 'https://play.google.com/store/search?q=' +  nome  + '&c=apps' )
		. quindi ( ( { dati } )  =>  {
			cost  $  =  cheerio . caricare ( dati )
			sia  ln  =  [ ] ;
			sia  nm  =  [ ] ;
			lascia  dv  =  [ ] ;
			lascia  lm  =  [ ] ;
			 risultato  const =  [ ] ;
			$ ( 'div.wXUyZd > a' ) . ciascuno ( funzione ( a , b ) {
				 collegamento  const =   'https://play.google.com'  +  $ ( b ) . attr ( 'href' )
				ln.push(link);
			})
			$ ( 'div.b8cIId.ReQCgd.Q9MA7b > a > div' ) . ciascuno ( funzione ( d , e ) {
				const name = $(e).text().trim()
				nm . push ( nome ) ;
			})
			$ ( 'div.b8cIId.ReQCgd.KoLSrc > a > div' ) . ciascuno ( funzione ( f , g ) {
				const  dev  =  $ ( g ) . testo ( ) . rifilare ( ) ;
				dv . spingere ( dev )
			})
			$ ( 'div.b8cIId.ReQCgd.KoLSrc > a' ) . ciascuno ( funzione ( h , i ) {
				const  limk  =  'https://play.google.com'  +  $ ( i ) . attr ( 'href' ) ;
				lm . spingere ( limitare ) ;
			})			
		for  ( let  i  =  0 ;  i  <  ln . lunghezza ;  i ++ ) {
			risultato . spingere ( {
				nome : nm [ i ] ,
				link: ln[i],
				sviluppatore : dv [ i ] ,
				link_dev : lm [ io ]
			})
	}
		risolvere ( risultato )
		})
	. prendere ( rifiutare )
	})
}

modulo . esportazioni  =  {
  Play Store
}
