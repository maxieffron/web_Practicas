/* ****** LIBRERÍA LUXON ****** */

const luxonDateTime = luxon.DateTime
init()

function init(){

    createDateTimeLocal()
    createDateTimeConArgumentos()
    createDateApartirDeUnObjeto()
    

}

function createDateTimeLocal()
{
   //const btn = document.getElementById("btnLUXON")
    
   const hoy = luxonDateTime.local()
   console.log(`Hoy: ${hoy}`) 

   const hoy2 = luxonDateTime.now() 
   console.log(`Hoy2: ${hoy2}`) 
   //Hay más métodos que estos tres 
   console.log(`Día: ${hoy2.day}, Mes: ${hoy2.month}, Año: ${hoy2.year}`)
    
   console.log(`Hoy2 toISO(): ${hoy2.toISO()}`) 
   //Te formatea la fecha a d/m/yyyy 
   console.log("Hoy2 toLocaleString():", hoy2.toLocaleString())

}

function createDateTimeConArgumentos()
{
   const otroDia = luxonDateTime.local(1986,2,6,12,30)
   console.log("CUMPLE MAXI",otroDia)

}

function createDateApartirDeUnObjeto()
{
    const dt = luxonDateTime.fromObject(
        {day:9,month:3,year:1990},
        {zone:'Buenos Aires, Argentina'}
    )

    console.log("CUMPLE DANI",dt)

}