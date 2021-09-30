cookieStore.getAll().then(res => {
    res.map(item => {
        cookieStore.set({
            "name": item.name,
            "value": "",
            "expires": 929734201
        })
    }).map(item => {
        cookieStore.set({
            "name": item.name,
            "value": "",
            "expires": 929734201,
            "domain": "medium.com"
        })
    })
})


cookieStore.getAll().then(res => {
    res.map(item => {
        cookieStore.delete(item.name)
    })
})