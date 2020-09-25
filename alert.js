let axios = require('axios')
axios.get('http://commitspy.herokuapp.com/api/project/checkalert')
    .then(res => {
        console.log(res.data);
    }).catch(err => {
        setInterval(() => {
            axios.get('http://commitspy.herokuapp.com/api/project/checkalert')
                .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err)
                })
        }, 120000);
    })