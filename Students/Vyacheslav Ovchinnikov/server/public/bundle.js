console.log('hell yeah!')

async function getCatalog() {
    let data = null;
    try {
        data = await fetch('/catalog').then(d => d.json())
    }
    catch(err) {
        console.log(err)
    }
    finally {
        console.log(data)
    }
}