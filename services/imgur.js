const request = require('request');
// This function will be called in the routes file to make an API call to imgur
exports.getImage = (search, page=1)=>{
    return new Promise((success,err)=>{
        // Options for the API call
        let options = {
            url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,
            headers: { Authorization: 'Client-ID e93205215d1114e' },
            json: true,
        };
        getPics((err, res, body) => {
            if (err) throw err;
            if (res.statusCode == 200){
                // Filter out albums from body
                body = body.data.filter(image=> {
                    if(!image.is_album) return image;
                }).map(image=>{
                    return {
                        url : image.link,
                        snippet: image.title,
                        context: `https://imgur.com/${image.id}`
                    };
                });
                resolve(body);
            };
        })
    });
}