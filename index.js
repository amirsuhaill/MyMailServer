const SMTPServer = require('smtp-server').SMTPServer

server = new SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    
    onConnect(session , cb) {
        console.log(`onConnect`, session.id)
        cd();
    },

    onMailFrom(address,session,cb){
        console.log(`onMailFrom`, address.address, session.id)
        cb()
    },

    onRcptTo(address,session,cb){
        console.log(`onRcptTo`, address.address, session.id)
        cb()
    },

    onData(stream,session,cb){
        stream.on('data', (data) => console.log(`onData ${data.toString()}`))
        stream.off('end',cb)
    }

})

server.listen(25, () => {console.log("MyMail server listen on port 25")})