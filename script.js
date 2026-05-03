const form = document.querySelector( 'form' );
const dataInput = document.getElementById( 'add-input' );
const selectLevels = document.getElementById( 'levels' )
const dataTodo = document.querySelector( '.data.to-do' );
const dataDone = document.querySelector( '.data.done' );
const dataDate = document.querySelector( '.date' );
const data = []

const date = new Date();
const dayName = date.toLocaleDateString( 'en-US', { weekday: 'long' } );
const monthName = date.toLocaleDateString( 'default', { month: 'long' } );
const year = date.getFullYear();
dataDate.innerHTML = dayName + ", " + monthName + " " + year;

form.addEventListener( 'submit', ( event ) => {
    event.preventDefault();
    data.push( {
        id: Date.now(),
        activity: dataInput.value,
        level: selectLevels.value
    } )
    const list = document.createElement( 'li' );
    const listText = document.createElement( 'span' );
    list.classList.add( 'list' );
    const containerTombols = document.createElement( 'div' )
    containerTombols.classList.add( 'tombols' );
    console.log( containerTombols );
    const checklist = document.createElement( 'input' );
    checklist.setAttribute( 'type', 'checkbox' )
    checklist.addEventListener( 'click', () => strikeOut() );
    const buttonDel = document.createElement( 'button' )
    buttonDel.textContent = "hapus";
    buttonDel.addEventListener( 'click', () => del() );
    listText.textContent = dataInput.value + " - " + selectLevels.value;
    containerTombols.appendChild( checklist );
    containerTombols.appendChild( buttonDel );
    list.appendChild( listText );
    list.appendChild( containerTombols );
    dataTodo.appendChild( list );

    function strikeOut() {
        listText.classList.toggle( 'strikeline' );
        // buttonDel.classList.remove( 'strikeline' );
        if ( listText.classList.contains( 'strikeline' ) ) {
            dataDone.appendChild( list );
        } else {
            dataTodo.appendChild( list );
        }
    }
    function del() {
        list.style.display = 'none';
    }
} )
